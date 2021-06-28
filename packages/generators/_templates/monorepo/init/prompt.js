module.exports = [
  {
    type: "input",
    name: "project.name",
    message: "What's your project name?",
  },
  {
    type: "select",
    name: "project.license",
    message: "What's your project license?",
    initial: 0,
    choices: [
      "GNU AGPLv3",
      "GNU GPLv3",
      "GNU LGPLv3",
      "Mozilla Public License 2.0",
      "Apache License 2.0",
      "MIT",
      "Boost Software License 1.0",
      "Unlicense",
    ],
  },
  {
    type: "input",
    name: "author.name",
    message: "What's your name?",
  },
  {
    type: "input",
    name: "author.email",
    message: "What's your email?",
  },
  {
    type: "input",
    name: "author.url",
    message: "What's your website address?",
  },
];
