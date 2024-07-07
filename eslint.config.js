import globals from "globals"
import pluginJs from "@eslint/js"

export default [
   {
      languageOptions: { 
         globals: globals.browser,
         ecmaVersion: "latest",
         sourceType: "module"
      },
      rules: {
         indent: ["error", 3],
         "linebreak-style": ["error", "unix"],
         quotes: ["error", "double"],
         semi: ["error", "never"]
      }
   },
   pluginJs.configs.recommended,
]
