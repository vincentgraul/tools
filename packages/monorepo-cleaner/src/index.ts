import program from "commander";
import { start } from "./commands";

program.version("1.0.0");

program
  .command("start")
  .description("Start monorepo cleaner program")
  .action(start);

program.parse(process.argv);
