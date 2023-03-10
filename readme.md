# Tailwind setup

refs:

- https://chrissainty.com/adding-tailwind-css-v3-to-a-blazor-app/

procedure:

1. install the cli globally

```shell
npm install -g tailwindcss
```

this failed on my MacOS with a node installed using installer.

1. add tailwind to blazor

```shell
npx tailwindcss init
```

1. tell which files contains css by updating `tailwind.config.js`

```js
module.exports = {
  content: ["./src/**/*.{razor,html,cshtml}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

1. add tailwind directives to the main css file `Styles/app.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

1. start the cli

```shell
npx tailwindcss -i ./Styles/app.css -o ./wwwroot/app.css --watch
```

1. add a reference to the output css in the host page

```html
<head>
  ...
  <link href="app.css" rel="stylesheet" />
</head>
```

## production

before going to production, minify the css using this command

```shell
npx tailwindcss -i ./Styles/app.css -o ./wwwroot/app.css --minify
```

# App

references: 
1. drag n drop: https://www.binarcode.com/blog/building-animated-draggable-interfaces-with-vuejs-and-tailwind
2. js file hash: https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API/Non-cryptographic_uses_of_subtle_crypto#hashing_a_file
3. .net js interop: https://learn.microsoft.com/en-us/aspnet/core/blazor/javascript-interoperability/?view=aspnetcore-7.0


## Run project
```shell
dotnet watch --project .
```
