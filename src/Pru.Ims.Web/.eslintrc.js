module.exports = {
    "env": {
        "browser": true
    },
    "globals": {
        "google": true,
        "singalR": true
    },
    "extends": "eslint:recommended",
    "rules": {
        // allow paren-less arrow functions
        'arrow-parens': 0,
        // allow async-await
        'generator-star-spacing': 0,
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
        // require trailing commas on last property or method in list
        "comma-dangle": [2, "always-multiline"],
        // ensure there is no space before function parens
        "space-before-function-paren": [2, "never"],
        // no trailing spaces
        "no-trailing-spaces": 1,
        "indent": ["error", 4]
    }
};