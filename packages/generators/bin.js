#!/usr/bin/env node

const path = require("path");
const fs = require("fs-extra");

async function main() {
    const source = path.join(__dirname, "_templates");
    const destination = path.join(process.cwd(), "_templates");

    if (await fs.pathExists(destination)) {
        console.error("Files have already been generated");
        process.exit(1);
    }

    await fs.copy(source, destination);
}

main();