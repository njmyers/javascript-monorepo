# Boil CLI

Cook up your team's favorite recipes! This time don't wait for the pot to boil. That means not spending anymore time writing boilerplate! Boil CLI is an easy to use code generator that let's you write your own templates.

## Motivation

I have had great success when using domain concepts to group related code files in folders. When using this approach it is easy to make changes as all related code is co-located. However there are a few issues with that. Given the following structure...

```
src/
  components/
    Cart/
      action.js
      reducer.js
      index.js
      __test__/
        action.test.js
        reducer.test.js
    Checkout/
      action.js
      reducer.js
      index.js
      __test__/
        action.test.js
        reducer.test.js
```

You can see already the problem. All of the files have the same name. If every file is named `reducer.js` then it will be impossible to search for files. Eventually I started using/naming files like follows.

```
src/
  components/
    Cart/
      cart-action.js
      cart-reducer.js
      index.js
      __test__/
        cart-action.test.js
        cart-reducer.test.js
    Checkout/
      checkout-action.js
      checkout-reducer.js
      index.js
      __test__/
        checkout-action.test.js
        checkout-reducer.test.js
```

I really liked this approach. The filenames/paths were verbose and easy to search for while the files inside of the domain folders were easy to identify. However there was a boilerplate problem and my wrists got tired. Different languages like `css` or classes had different naming conventions so it wasn't always easy to use text editor search/replace with differently cased names. Enter the boil cli...

## Installation

```bash
npm install -g @njmyers/boil
```

## Usage

Boil up your favorite recipes. Simply enter the command `boil [template] kebab-case-name`. Template is simply the name of the template you wish to use. Boil cli comes with 4 ready-made templates but the point is to create your own! `kebab-case-name` is whatever the domain concept of the folder and files. In traditional unix style you can pass as many `kebab-case-names` as you wish to create multiple files/folders.

## Templates

By default, Boil CLI will look for a folder called `templates` in your project root. If it does not find this folder it will fallback to the included templates. The template folder path is configurable please see the config section.

One of the main ideas behind the templates was to make them look like code. That way when you are creating templates and editing them you can use all of your favorite tools to format your templates. Using template strings or a template syntax makes it difficult to read templates and spot errors. Although these systems give you more functionality I decided to use a limited set of syntax tokens that will hopefully make the template process something you can complete quickly. It also makes it so the code you write in your template looks like the code that will wind up in your `src` folder. These are the available tokens.

- `camelCase`
- `PascalCase`
- `snake_case`
- `SNAKE_CASE`
- `kebab-case`
- `KEBAB-CASE`

When you write a template file just use these exact strings and they will be replaced. If you pass a cli argument `big-button` the above tokens would turn into these strings.

- `bigButton`
- `BigButton`
- `big_button`
- `BIG_BUTTON`
- `big-button`
- `BIG-BUTTON`

In terms of a folder structure, you simply name your folders or files using these same tokens and they will also be replaced. Here is an example of what your template folder structure could look like. For examples sake we will use `.js` files but you could use whatever files you want.

```
templates/
  function/ // this folder name will become the template type on your cli args
    index.js
    camelCase.js
    camelCase.test.js
```

and then inside these files

```js
// camelCase.js
/**
 * Write some documentation
 */
function camelCase() {
  return null;
}

export default camelCase;

// camelCase.test.js
import camelCase from './camelCase';

describe('camelCase', () => {
  test('it works', () => {
    expect(typeof camelCase).toBe('function');
  });
});

// index.js
export { default } from './camelCase';
```

No more writing index files or test boilerplate! This encourages good practices especially on teams. If you already have test files or markdown files created then your team members will be more likely to fill them in with things that should be there. This is called the [default effect](https://en.wikipedia.org/wiki/Default_effect).

## Configuration

Even boil gets it's own rcfile! Put your own `.boilrc` file in the repo root or use cli flags. Here are the json options for `.boilrc`

```jsonc
{
  // The relative or absolute directory where your templates are kept.
  // Defaults to "./templates"
  "templateDirectory": "String",
  // The relative or absolute directory of you project root.
  // Defaults to the nearest package.json.
  "projectRoot": "String",
  // The path where the code should be written. For example "./src" if you use the cli from project root.
  // Defaults to cwd.
  "codePath": "String",
  // Override the template file extension.
  // No default.
  "extension": "Boolean",
  // A string to match against template files that should be included.
  // No default.
  "include": "String",
  // A string to match against template files that should be excluded.
  // No default.
  "exclude": "String",
  // Print your current configuration.
  // Defaults to false.
  "debug": "Boolean",
  // Print code and codePath to the console but don't write anything.
  // Defaults to false.
  "dryRun": "Boolean"
}
```

The command `boil -h` will give you a list of accepted flags. In general they follow the `--kebab-case` format of the `camelCase` json options listed above.

## Zero Config

Create most of a frontend react project with this command.

`boil component -p src button link header footer layout cart checkout`

Now the easy part writing the code :)
