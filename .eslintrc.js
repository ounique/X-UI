module.exports = {
    env: {
        browser: true,
        node: true
    },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        "ecmaVersion": 6,
        // "project": "tsconfig.eslint.json", // Unfortunately it is root cause of slow execution
        "sourceType": "module",
        "ecmaFeatures": {
            "modules": true
        }
    },
    plugins: [
        "@typescript-eslint"
    ],
    rules: {
        // eslint
        "array-bracket-newline": ["error", "consistent"],
        "array-element-newline": ["error", "consistent"],
        "linebreak-style": ["error", "unix"],
        "quotes": ["error", "double"],
        "semi": "error",
        "no-multi-spaces": "error",
        "comma-dangle": ["error", {
            "arrays": "never",
            "objects": "never",
            "imports": "never",
            "exports": "never",
            "functions": "never"
        }],
        "comma-spacing": ["error", {
            "before": false,
            "after": true
        }],
        "comma-style": ["error", "last"],
        "object-curly-newline": [
            "error",
            {
                "ObjectExpression": { "consistent": true },
                "ObjectPattern": { "consistent": true },
                "ImportDeclaration": { "consistent": true },
                "ExportDeclaration": { "consistent": true }
            }
        ],
        "object-property-newline": "error",
        "newline-per-chained-call": "error",
        "no-continue": "error",
        "eqeqeq": "error",
        "no-alert": "error",
        "eol-last": "error",
        "function-paren-newline": ["error", "consistent"],
        "function-call-argument-newline": ["error", "consistent"],
        "lines-between-class-members": ["error", "always", { exceptAfterSingleLine: true }],
        "no-multiple-empty-lines": "error",
        // overridden eslint rules
        "no-extra-boolean-cast": 0,
        "brace-style": 0,
        "indent": 0,
        "no-useless-constructor": "off",
        // typescript rules
        "@typescript-eslint/no-explicit-any": 0,
        "@typescript-eslint/explicit-function-return-type": 0,
        "@typescript-eslint/no-parameter-properties": 0,
        "@typescript-eslint/no-object-literal-type-assertion": 0,
        "@typescript-eslint/no-inferrable-types": 0,
        "@typescript-eslint/consistent-type-assertions": 0,
        "@typescript-eslint/naming-convention": ["error", {
            "selector": "default",
            "format": ["UPPER_CASE", "PascalCase", "camelCase", "snake_case"],
            "leadingUnderscore": "allow",
            "trailingUnderscore": "allow"
        }],
        "@typescript-eslint/member-delimiter-style": 0,
        "@typescript-eslint/no-use-before-define": 0,
        "@typescript-eslint/no-empty-function": 0,
        "@typescript-eslint/no-this-alias": 0,
        "@typescript-eslint/no-var-requires": 0,
        "@typescript-eslint/indent": ["error", 4, {
            "SwitchCase": 1,
            "VariableDeclarator": "first",
            "CallExpression": { "arguments": "first" },
            "FunctionExpression": { "parameters": "first" },
            "FunctionDeclaration": { "parameters": "first" },
            "MemberExpression": 1,
            "flatTernaryExpressions": true,
            "ArrayExpression": "first"
        }],
        "@typescript-eslint/explicit-member-accessibility": ["error", {
            "accessibility": "explicit",
            "overrides": {
                "accessors": "explicit",
                "constructors": "no-public",
                "methods": "explicit",
                "properties": "explicit",
                "parameterProperties": "explicit"
            }
        }],
        "@typescript-eslint/ban-types": [
            "error",
            {
                "extendDefaults": true,
                "types": {
                    "{}": false
                }
            }
        ],
        "@typescript-eslint/no-empty-interface": ["error", { "allowSingleExtends": true }],
        "@typescript-eslint/brace-style": ["error"],
        "@typescript-eslint/no-unused-vars": ["error", { "args": "none" }],
        "@typescript-eslint/no-useless-constructor": "error"
    },
    overrides: [
        {
            "files": ["*.ts"],
            "rules": {
                "@typescript-eslint/explicit-function-return-type": 1
            }
        }
    ]
};
