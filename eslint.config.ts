import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginVue from "eslint-plugin-vue";
import prettier from "eslint-plugin-prettier/recommended";
import { defineConfig } from "eslint/config";

export default defineConfig([
  // Cấu hình chung cho JS/TS
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,vue}"],
    languageOptions: {
      globals: globals.browser,
    },
    extends: [
      js.configs.recommended, // rule mặc định cho JS
    ],
  },

  // TypeScript configs
  ...tseslint.configs.recommended,

  // Vue configs
  pluginVue.configs["flat/essential"],

  // Thêm Prettier (đặt cuối cùng để override các rule khác)
  prettier,

  // Cấu hình riêng cho file Vue
  {
    files: ["**/*.vue"],
    languageOptions: {
      parserOptions: {
        parser: tseslint.parser,
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
  },
]);
