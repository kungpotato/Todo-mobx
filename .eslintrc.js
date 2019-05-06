module.exports = {
    "extends": ["airbnb", "prettier"],
    parser: "babel-eslint",
    env: {
      jest: true,
      browser: true
    },
    plugins: ["prettier", "react"],
    rules: {
      "no-use-before-define": "off",
      "react/prop-types": "off",
      'prettier/prettier': [
        'error',
        {
          singleQuote: true,
          semi: false
        }
      ],
      "semi": ["error", "never"]
    }
  }
