# Installation

Add `@njmyers/eslint-config` package via your favorite package manager

# Extends

Extend which configurations you need based on the environment you are working in. All of the available configurations are.

- `@njmyers/eslint-config`
- `@njmyers/eslint-config/node`
- `@njmyers/eslint-config/react`
- `@njmyers/eslint-config/jest`
- `@njmyers/eslint-config/typescript`

## Typescript

Typescript needs some additional settings as we need to point eslint to the `tsconfig.json` file. Ths is the minimum required settings in order to work with typescript.

```json
{
  "extends": ["@njmyers/eslint-config", "@njmyers/eslint-config/typescript"],
  "parserOptions": {
    "project": ["./tsconfig.json"]
  },
  "settings": {
    "import/resolver": {
      "typescript": {
        "project": ["./tsconfig.json"]
      }
    }
  }
}
```
