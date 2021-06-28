---
to: packages/<%= h.getRootPackage() %>/package.json
---

{
  "name": "@<%= <%= package.name %>",
  "private": true,
  "version": "1.0.0",
  "license": "<%= package.license %>",
  "author": {
    "name": "<%= author.name %>",
    "email": "<%= author.email %>",
    "url": "<%= author.url %>"
  },
  "maintainers": [
    {
      "name": "<%= author.name %>",
      "email": "<%= author.email %>",
      "url": "<%= author.url %>"
    }
  ],
  "scripts": {
    "build": "tsc"
  },
  "devDependencies": {
    "typescript": "^<%= h.getPackageVersion("typescript") %>",
    "@typescript-eslint/parser": "^<%= h.getPackageVersion("@typescript-eslint/parser") %>",
    "@typescript-eslint/eslint-plugin": "^<%= h.getPackageVersion("@typescript-eslint/eslint-plugin") %>",
    "prettier": "^<%= h.getPackageVersion("prettier") %>",
    "eslint-config-prettier": "^<%= h.getPackageVersion("eslint-config-prettier") %>",
    "lerna": "^<%= h.getPackageVersion("lerna") %>",
    "ts-jest": "^<%= h.getPackageVersion("ts-jest") %>"
  }
}
