---
to: package2.json
---

{
  "name": "<%= project.name %>",
  "private": true,
  "version": "1.0.0",
  "license": "<%= project.license %>",
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
  "workspaces": {
    "packages": [
      "./packages/**"
    ]
  },
  "scripts": {
    "bootstrap": "lerna bootstrap",
    "build": "lerna run build",
    "lint": "lerna run lint",
    "test": "lerna run test"
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
