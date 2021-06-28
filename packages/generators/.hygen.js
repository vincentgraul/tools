const { Npm, Path, Word } = require("@vincentgraul/utils");
const globby = require("globby");

module.exports = {
  helpers: {
    getPackageVersion: (name) => Npm.getPackageInfoSync(name, "version"),
    getRootPackage: () => Path.getLastPath(process.cwd),
    getFiles: (path, extensions) =>
      globby.sync(path, { expandDirectories: { extensions, onlyFiles: true } }),
    getFileName: (path) => Path.decomposeFilePath(path).name,
    capitalize: Word.capitalize,
  },
};
