# Table of Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)

# Introduction

A fluid typography plugin for Tailwind CSS. This plugin generates a set of fluid typography utilities based on your configuration. It uses the `clamp()` CSS function to create a fluid typography scale that is responsive by default.

## How is it different than other plugins?

There are two major similar plugins:

1. https://github.com/davidhellmann/tailwindcss-fluid-type
2. https://github.com/craigrileyuk/tailwind-fluid-typography

Both of these plugins are based on automatically scaling via multipliers which means it's hard to manually set each font size or break the scale if the design requires so.

This plugin allows you to set each `font-size`, `line-height`, and `letter-spacing` values individually. It does not give you a predefined set of sizes or sizes that follow a type scale, you have to manually define them yourself, but the plugin will scale them for you.

# Installation

```js
npm i tailwindcss-fluid-typography
```

or

```js
yarn add tailwindcss-fluid-typography
```

# Usage

Reference your static font sizes from Tailwind config and copy those. Then, add another value in the array to scale between the two values.

You should check your design and set each type scale size upper and lower end based on the desktop and mobile design sizes. The plugin will automatically resize between those two sizes within the chosen screen sizes.

The default screen sizes are `30rem` (480px) and `80rem` (1280px)

Specify min and max values in an array, for example:

```js
  fontSize: [1.125, 1.5],
  lineHeight: [1.75, 2],
```

The plugin will scale between `font-size: 1.125rem` and `font-size: 1.5rem` and `line-height: 1.75rem` and `line-height: 2rem`, within the selected screen sizes.

## Example config

```js
module.exports = {
  plugins: [
    require("tailwindcss-fluid-typography")({
      minScreenWidth: 30, // width in rem
      maxScreenWidth: 80, // width in rem
      unit: "rem",
      suffix: "-fluid",
      prefix: "",
      values: [
        {
          key: "xs",
          fontSize: 0.75,
          lineHeight: 1,
        },
        {
          key: "sm",
          fontSize: 0.875,
          lineHeight: 1.25,
        },
        {
          key: "base",
          fontSize: [0.875, 1],
          lineHeight: [1.25, 1.5],
        },
        {
          key: "lg",
          fontSize: [1, 1.125],
          lineHeight: [1.5, 1.75],
        },
        {
          key: "xl",
          fontSize: [1.125, 1.25],
          lineHeight: [1.5, 1.75],
        },
        {
          key: "2xl",
          fontSize: [1.25, 1.5],
          lineHeight: [1.75, 2],
        },
        {
          key: "3xl",
          fontSize: [1.5, 1.875],
          lineHeight: [2, 2.25],
        },
        {
          key: "4xl",
          fontSize: [1.875, 2.25],
          lineHeight: [2.25, 2.5],
        },
        {
          key: "5xl",
          fontSize: [2.25, 3],
          lineHeight: [2.5, 3.5],
        },
        {
          key: "6xl",
          fontSize: [3, 3.75],
          lineHeight: [3.5, 4.5],
        },
        {
          key: "7xl",
          fontSize: [3.75, 4.5],
          lineHeight: [4.5, 5],
        },
        {
          key: "8xl",
          fontSize: [4.5, 5.5],
          lineHeight: [5, 5.5],
        },
        {
          key: "9xl",
          fontSize: [5.5, 6.25],
          lineHeight: [5.5, 6.25],
        },
      ],
    }),
  ],
};
```

Then you can use the generated classes in your HTML, just by appending `-fluid` to the existing font sizes. For example:

```html
<h1 class="text-3xl-fluid">Hello World</h1>
```

Or you can pass a custom suffix or prefix in config to alter the generated class names:

```js
  suffix: "",
  prefix: "fluid-",
```

to get

```html
<h1 class="fluid-text-3xl">Hello World</h1>
```

# Letter spacing

You can also control tracking values. You can do that by adding `letterSpacing` values to your config.

```js
{
    key: '3xl',
    fontSize: [2.125, 5],
    lineHeight: [2.625, 5.5],
    letterSpacing: [-0.003125, -0.00625],
},
```

You can pass an array with two values to scale between them, or just a number to set a fixed value in case you need so.

```js
{
    key: '3xl',
    fontSize: [2.125, 5],
    lineHeight: [2.625, 5.5],
    letterSpacing: -0.03125,
},
```

## Contributing

Feel free to submit PR for review or suggest changes in GitHub issues.
