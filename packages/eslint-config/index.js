module.exports = {
  extends: [
    "plugin:flowtype/recommended",
    "airbnb",
    "plugin:prettier/recommended",
    "prettier/flowtype",
    "prettier/react"
  ],
  rules: {
    "react/jsx-filename-extension": [
      1,
      {
        "extensions": [".js", ".jsx"]
      }
    ],
    "react/prop-types": 0,
    "react/destructuring-assignment": false
  },
  plugins: ["flowtype", "prettier"],
  overrides: [
    {
      files: ["**/*.test.js"],
      env: {
        jest: true
      },
      plugins: ["jest"]
    }
  ],
  env: {
    es6: true
  }
}
