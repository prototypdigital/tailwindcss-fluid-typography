# Table of Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)

## Introduction

A fluid typography plugin for Tailwind CSS. This plugin generates a set of fluid typography utilities based on your configuration. It uses the `clamp()` CSS function to create a fluid typography scale that is responsive by default.

## How is it different than other plugins?

There are two major similar plugins:

1. https://github.com/davidhellmann/tailwindcss-fluid-type
2. https://github.com/craigrileyuk/tailwind-fluid-typography

Both of these plugins are based on automatically scaling via multipliers which means it's hard to manually set each font size or break scale if design requires so.

This plugin allows you to set each font size, line height and tracking values individually. It does not give you a predefined set of sizes, you have to manually define them yourself, but the plugin will scale them for you.

## Installation

```js
npm i tailwindcss-fluid-typography
 or
yarn add tailwindcss-fluid-typography
```

## Usage

You should reference your static font sizes from Tailwind config and copy those. Then, add another value in the array to scale between them.

You should check your design and set each typescale size upper and lower end based on the desktop and mobile design sizes. The plugin will automatically resize between those two sizes within the chosen screen sizes.

Specify min and max values in an array, for example:

```js
  fontSize: [1.125, 1.5],
  lineHeight: [1.75, 2],
```

Will scale between font-size 1.125rem and 1.5rem and 1.75rem and 2rem line height, between specified minScreenWidth and maxScreenWidth.

```js
module.exports = {
  plugins: [
    require("tailwindcss-fluid-typography")({
      minScreenWidth: 30,
      maxScreenWidth: 80,
      unit: "rem",
      suffix: "-fluid",
      prefix: "",
      values: [
        {
          key: "xs",
          fontSize: [0.75, 0.75],
          lineHeight: [0.75, 1],
        },
        {
          key: "xs",
          fontSize: [0.5, 0.75],
          lineHeight: [0.75, 1],
        },
        {
          key: "sm",
          fontSize: [0.75, 1],
          lineHeight: [1.25, 1.5],
        },
        {
          key: "base",
          fontSize: [0.875, 1],
          lineHeight: [1, 1.25],
        },
        {
          key: "lg",
          fontSize: [1.125, 1.5],
          lineHeight: [1.75, 2],
        },
        {
          key: "2xl",
          fontSize: [1.5, 1.875],
          lineHeight: [2, 2.25],
        },
        {
          key: "3xl",
          fontSize: [1.875, 2.25],
          lineHeight: [2.25, 2.5],
        },
        {
          key: "4xl",
          fontSize: [2.25, 3],
          lineHeight: [2.5, 1],
        },
        {
          key: "5xl",
          fontSize: [3, 3.75],
          lineHeight: 1,
        },
        {
          key: "6xl",
          fontSize: [3.75, 4.5],
          lineHeight: 1,
        },
        {
          key: "7xl",
          fontSize: [4.5, 6],
          lineHeight: 1,
        },
        {
          key: "8xl",
          fontSize: [6, 8],
          lineHeight: 1,
        },
        {
          key: "9xl",
          fontSize: [6, 8],
          lineHeight: [1],
        },
      ],
    }),
  ],
};
```

Then you can use the generated classed in your HTML, just by appending `-fluid` to existing font sizes. For example:

```html
<h1 class="text-3xl-fluid">Hello World</h1>
```

Or you can pass a custom suffix or prefix in config to alter generated class names:

```js
  suffix: "",
  prefix: "fluid-",
```

to get

```html
<h1 class="fluid-text-3xl">Hello World</h1>
```

## Line height and letter spacing

You can also control fluid line heights and tracking values. You can do that by adding `lineHeight` and `letterSpacing` values to your config.

```js
{
    key: '3xl',
    fontSize: [2.125, 5],
    lineHeight: [2.625, 5.5],
    letterSpacing: [0.003125, 0.00625],
},
```

You can pass array with two values to scale betweeen them, or just a number to set a fixed value.

```js
{
    key: '3xl',
    fontSize: [2.125, 5],
    lineHeight: [2.625, 5.5],
    letterSpacing: 0.03125,
},
```

## Contributing

Feel free to make changes on your forker repo or submit a PR for review.
