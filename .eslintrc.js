module.exports = {
    root: true,
    extends: [
        'plugin:import/recommended',
        '@react-native-community',
        'airbnb-typescript',
        'prettier'
    ],
    parserOptions: {
        project: ['./tsconfig.json']
    },
    ignorePatterns: ['.eslintrc.js'],
    rules: {
        // suppress errors for missing 'import React' in files
        'react/react-in-jsx-scope': 'off',
        // allow jsx syntax in js files (for next.js project)
        'react/jsx-filename-extension': [
            1,
            { extensions: ['.js', '.jsx', '.ts', '.tsx'] }
        ], //should add ".ts" if typescript project
        'react-native/no-inline-styles': 'off',
        'import/no-unresolved': [0, { commonjs: true, amd: true }],
        'import/named': 0,
        'import/no-named-as-default': 0,
        'import/no-named-as-default-member': 0,
        'import/namespace': 0,
        'import/default': 0,
        'import/export': 0,
        'import/no-extranous': 'off'
    }
};
