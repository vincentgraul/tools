import { basename } from "path";

export interface ProjectInfo {
  root: string;
  name: string;
}

export function getProjectInfo(): ProjectInfo {
  const root: string = process.cwd();

  return {
    root,
    name: basename(root),
  };
}
