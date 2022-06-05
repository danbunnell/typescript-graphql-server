module.exports = {
    root: true,
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking"
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        project: ["./tsconfig.json"],
        tsconfigRootDir: __dirname,
    },
    plugins: [
        "@typescript-eslint"
    ],
    ignorePatterns: [".eslintrc.js", "src/**/*.test.ts", "build/", "src/graphql/types/generated.ts"]
};