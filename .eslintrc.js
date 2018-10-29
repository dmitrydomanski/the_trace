module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true
    },
    "extends": [
        "eslint:recommended",
        'plugin:react/recommended',
        'airbnb'
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module",
        "allowImportExportEverywhere": false,
        "codeFrame": true
    },
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ],
    "rules": {
        "indent": ["error", 4, {
            "ignoredNodes": ['JSXElement', 'JSXElement > *',
                'JSXAttribute', 'JSXIdentifier', 'JSXNamespacedName',
                'JSXMemberExpression', 'JSXSpreadAttribute', 'JSXExpressionContainer',
                'JSXOpeningElement', 'JSXClosingElement', 'JSXText', 'JSXEmptyExpression',
                'JSXSpreadChild'
            ]
        }],
        "react/jsx-indent": ['error', 4],
        "react/jsx-one-expression-per-line": 0,
        "object-curly-newline": ["error", {
            "ObjectExpression": "always",
            "ObjectPattern": {"multiline": true}
        }],
        "react/jsx-indent-props": ['error', 4],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        "react/jsx-filename-extension": [1, {
            "extensions": [".js", ".jsx"]
        }],
        

    },
    "parser": "babel-eslint"
};