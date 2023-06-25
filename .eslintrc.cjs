module.exports = {
  env: {
    "browser": true,
    "es2021": true
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  overrides: [],
  globals: {
    React: true,
    google: true,
    mount: true,
    mountWithRouter: true,
    shallow: true,
    shallowWithRouter: true,
    context: true,
    expect: true,
    jsdom: true,
    JSX: true,
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@', './src'],
        ],
      },
      node: {
        extensions: [
          ".js",
          ".jsx",
          ".ts",
          ".tsx"
        ]
      }
    },
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
        "ecmaVersion": "latest",
        "sourceType": "module"
  },
  plugins: [
    "react",
    "@typescript-eslint"
  ],
  rules: {
    "react/jsx-filename-extension": [0, { "extensions": [".js", ".jsx"] }],
    "import/no-extraneous-dependencies": 0,
    "import/extensions": 0,
    "import/no-unresolved": 0,
    "@typescript-eslint/ban-ts-comment": 0,
  }
}
