import prompts from "prompts";
import fs from "fs-extra";
import ora, { Ora } from "ora";
import _ from "lodash";
import execa from "execa";
import { Fs } from "@vincentgraul/utils";

import { ProjectInfo, getProjectInfo } from "./utils";

const spinner: Ora = ora();

export async function start(): Promise<void> {
  const response = await prompts({
    type: "multiselect",
    name: "types",
    message: "What type(s) of package folder do you want to remove?",
    choices: [
      { title: "node modules", value: "node_modules" },
      { title: "build", value: "build" },
    ],
    initial: 1,
  });

  if (!_.isEmpty(response)) {
    list(response.types);
  }
}

async function list(types: string[]): Promise<void> {
  spinner.start("Loading folders...");

  let folders: Fs.Folder[] = [];
  const projectInfo: ProjectInfo = getProjectInfo();
  const excludes: string[] = ["node_modules", "build"];

  try {
    folders = await Fs.listFolders(projectInfo.root, excludes);
  } catch (error) {
    console.error(error);
    spinner.fail("Unable to load folders...");
    process.exit(1);
  }

  folders = folders.filter((folder: Fs.Folder) => types.includes(folder.name));

  spinner.stop();

  const response = await prompts({
    type: "multiselect",
    name: "folders",
    message: "Which folder(s) do you want to remove?",
    choices: folders.map((folder: Fs.Folder) => ({
      title: `${folder.name} (${folder.path.relative})`,
      value: folder,
    })),
    initial: 1,
  });

  if (!_.isEmpty(response)) {
    remove(response.folders);
  }
}

async function remove(folders: Fs.Folder[]): Promise<void> {
  spinner.start("Removing folders...");

  for (const folder of folders) {
    try {
      await fs.remove(folder.path.absolute);
    } catch (error) {
      console.error(error);
      spinner.fail(
        `Unable to remove the folder ${folder.name} (${folder.path.relative})`
      );
      process.exit(1);
    }
  }

  spinner.succeed("Folder(s) has/have been successfully removed");

  const builds: Fs.Folder[] = folders.filter(
    (folder) => folder.name === "build"
  );
  const modules: Fs.Folder[] = folders.filter(
    (folder) => folder.name === "node_modules"
  );

  if (modules.length > 0) {
    await install();
  }

  if (builds.length > 0) {
    await build();
  }
}

async function install(): Promise<void> {
  const response = await prompts({
    type: "toggle",
    name: "value",
    message: "Do you want to make a new install?",
    initial: true,
    active: "yes",
    inactive: "no",
  });

  if (response.value) {
    spinner.start("Installation is progress...");

    try {
      await execa.command("yarn install");
    } catch (error) {
      spinner.fail("Installation has failed");
      process.exit(1);
    }

    spinner.succeed("Installation is finish");
  }
}

async function build(): Promise<void> {
  const response = await prompts({
    type: "toggle",
    name: "value",
    message: "Do you want to make a new build?",
    initial: true,
    active: "yes",
    inactive: "no",
  });

  if (response.value) {
    spinner.start("Building...");

    try {
      await execa.command("yarn build");
    } catch (error) {
      spinner.fail("Build has failed");
      process.exit(1);
    }

    spinner.succeed("Build is finish");
  }
}
