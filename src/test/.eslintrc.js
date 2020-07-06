module.export = {
  env: {
    mocha: true,
  },
  rules: {
    "no-unuse-vars": ["error", { varsIgnorePattern: "should|expect" }],
  },
};
