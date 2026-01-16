module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react', 'react-hooks'],
    rules: {
        'react/react-in-jsx-scope': 'off',
        'react/prop-types': 'off',
        'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        "react/jsx-no-bind": [
            "warn",
            {
                "allowArrowFunctions": true // 暂且允许箭头函数，来提升代码可读性
            }
        ],
        "max-nested-callbacks": [
            "warn",
            4
        ], // 循环最多4层，超过4层警告
        "react/require-default-props": "off", // 组件的非必填属性不要求一定有默认值
        "react/no-find-dom-node": "off", // 暂且允许使用react-dom的findDOMNode方法
        "@babel/object-curly-spacing": "off",
        "object-curly-spacing": [
            "off",
            "always",
            {
                "arraysInObjects": false
            }
        ], // 对象括号是否允许添加空格
        "brace-style": [
            "off",
            "1tbs"
        ],
        "react/no-string-refs": "warn", // string类型的refs报warn
        "no-unreachable-loop": "off",
        "eol-last": ["error", "always"], // 文件末尾需要多空一行
        "guard-for-in": 0,
        "indent": ["error", 4, { "SwitchCase": 1 }] // 设置4个空格缩进
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
};

