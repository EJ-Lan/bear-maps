module.exports = function (plop) {
  // Component generator
  plop.setGenerator("component", {
    description: "Create a new component with CSS, README, and React files",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Component name:",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/{{pascalCase name}}.jsx",
        templateFile: "plop-templates/Component.jsx.hbs",
      },
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/{{pascalCase name}}.css",
        templateFile: "plop-templates/Component.css.hbs",
      },
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/README.md",
        templateFile: "plop-templates/README.md.hbs",
      },
    ],
  });
};
