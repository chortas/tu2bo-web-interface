'use strict';

module.exports = {
  "env": {
    "es6": true,
    "node": true,
    "browser": true,
    "jest/globals": true
  },
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": true
    },
    "sourceType": "module"
  },
  "plugins": [
    "react",
    "prettier",
    "flowtype",
    "jest"
  ],
  "extends": [
    "eslint:recommended",
    "airbnb",
    "plugin:react/recommended",
    "prettier",
    "prettier/flowtype",
    "prettier/react",
    "plugin:jest/recommended"
  ],
  "globals": {
    "__DEV__": true,
  },
  "rules": {
    "prettier/prettier": ["error", { printWidth: 110, singleQuote: true }],
    "no-invalid-this": "off",
    "jsx-a11y/href-no-hash": [0],
    "consistent-return": "off",
    "no-return-assign": "off",
    "no-param-reassign": "off",
    "no-nested-ternary": "off",
    "react/require-default-props": "off",
    "react/jsx-filename-extension": ["error", { "extensions": [".js", ".ejs"] }],
    "react/prop-types": "off",
    "react/prefer-stateless-function": "off",
    "react/jsx-props-no-spreading": "off",
    "import/order": "off",
    "import/prefer-default-export": "off",
    "import/no-unresolved": "off",
    "import/named": "off",
    "import/extensions": "off",
    "import/no-extraneous-dependencies": "off",
    "import/default": "off",
    "import/namespace": "off",
    "import/no-absolute-path": "error"
  },
  "settings": {
    "import/resolver": {
      "node": {
        "extensions": [
          ".js",
          ".jsx",
          ".android.js",
          ".ios.js"
        ]
      }
    }
  }
};