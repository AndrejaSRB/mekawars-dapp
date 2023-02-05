module.exports = {
  root: true,
  plugins: ["prettier", "@typescript-eslint"],
  extends: [
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "plugin:prettier/recommended",
    "next/core-web-vitals",
  ],
  rules: {
    "prettier/prettier": "error",
    "no-console": ["error", { allow: ["error", "warn", "debug"] }],
    "no-restricted-imports": [
      "error",
      {
        paths: [
          {
            name: "lodash",
            message:
              "Use specific imports instead, like `import merge from 'lodash/merge'`.",
          },
          {
            name: "date-fns",
            message:
              "Use specific imports instead, like `import format from 'date-fns/format'`.",
          },
          {
            name: "react",
            importNames: ["FunctionComponent"],
            message: "Use `import FC from 'react'` instead.",
          },
          {
            name: "@chakra-ui/react",
            importNames: ["useToast"],
            message: "Use our custom `useToast` hook instead",
          },
        ],
      },
    ],
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "react/jsx-curly-brace-presence": [
      "error",
      { props: "never", children: "never" },
    ],
    "react/no-unescaped-entities": ["error", { forbid: [">", "}"] }],
    "react-hooks/exhaustive-deps": [
      "warn",
      {
        additionalHooks: "(useDeepMemo|useMyOtherCustomHook)", // we keep useMyOtherCustomHook for the syntax
      },
    ],
    "@typescript-eslint/consistent-type-imports": [
      "error",
      { prefer: "type-imports" },
    ],
    "@typescript-eslint/no-unused-vars": [
      "error",
      { varsIgnorePattern: "^_", ignoreRestSiblings: true },
    ],
    "@typescript-eslint/no-explicit-any": "off",
  },
  overrides: [
    // Application
    {
      files: ["src/**/*.ts?(x)"],
      extends: [
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
      ],
      parserOptions: {
        project: "tsconfig.json",
      },
      rules: {
        "react/self-closing-comp": "error",

        // Disabled rules; we might re-enable them later
        "@typescript-eslint/no-empty-interface": "off",
        "@typescript-eslint/no-misused-promises": "off",
        "@typescript-eslint/no-unsafe-argument": "off",
        "@typescript-eslint/no-unsafe-assignment": "off",
        "@typescript-eslint/no-unsafe-member-access": "off",
        "@typescript-eslint/no-non-null-assertion": "off",
        "@typescript-eslint/restrict-template-expressions": [
          "error",
          { allowNumber: true, allowNullish: true },
        ],
      },
    },

    // Configuration files
    {
      files: ["./*.js"],
      rules: {
        "@typescript-eslint/no-var-requires": "off",
      },
    },
  ],
};
