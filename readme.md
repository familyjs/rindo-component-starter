[![Built With Rindo](https://img.shields.io/badge/-Built%20With%20Rindo-16161d.svg?colorA=16161d&style=flat-square)](https://rindojs.web.app)

# Rindo Component Starter

This is a starter project for building a standalone Web Component using Rindo.

Rindo is also great for building entire apps. For that, use the [rindo-app-starter](https://github.com/familyjs/rindo-app-starter) instead.

# Rindo

Rindo is a compiler for building fast web apps using Web Components.

Rindo combines the best concepts of the most popular frontend frameworks into a compile-time rather than runtime tool. Rindo takes TypeScript, JSX, a tiny virtual DOM layer, efficient one-way data binding, an asynchronous rendering pipeline (similar to React Fiber), and lazy-loading out of the box, and generates 100% standards-based Web Components that run in any browser supporting the Custom Elements v1 spec.

Rindo components are just Web Components, so they work in any major framework or with no framework at all.

## Getting Started

To start building a new web component using Rindo, clone this repo to a new directory:

```bash
git clone https://github.com/familyjs/rindo-component-starter.git my-component
cd my-component
git remote rm origin
```

and run:

```bash
npm install
npm start
```

To build the component for production, run:

```bash
npm run build
```

To run the unit tests for the components, run:

```bash
npm test
```

Need help? Check out our docs [here](https://rindojs.web.app/docs/my-first-component).

## Naming Components

When creating new component tags, we recommend _not_ using `rindo` in the component name (ex: `<rindo-datepicker>`). This is because the generated component has little to nothing to do with Rindo; it's just a web component!

Instead, use a prefix that fits your company or any name for a group of related components. For example, all of the Family-generated web components use the prefix `fml`.

## Using this component

There are two strategies we recommend for using web components built with Rindo.

The first step for all two of these strategies is to [publish to NPM](https://docs.npmjs.com/getting-started/publishing-npm-packages).

You can read more about these different approaches in the [Rindo docs](https://rindojs.web.app/docs/publishing).

### Lazy Loading

If your Rindo project is built with the [`dist`](https://rindojs.web.app/docs/distribution) output target, you can import a small bootstrap script that registers all components and allows you to load individual component scripts lazily.

For example, given your Rindo project namespace is called `my-design-system`, to use `my-component` on any website, inject this into your HTML:

```html
<script type="module" src="https://unpkg.com/my-design-system"></script>
<!--
To avoid unpkg.com redirects to the actual file, you can also directly import:
https://unpkg.com/foobar-design-system@0.0.1/dist/foobar-design-system/foobar-design-system.esm.js
-->
<my-component first="Rindo" last="'Don't call me a framework' JS"></my-component>
```

This will only load the necessary scripts needed to render `<my-component />`. Once more components of this package are used, they will automatically be loaded lazily.

You can also import the script as part of your `node_modules` in your applications entry file:

```tsx
import 'foobar-design-system/dist/foobar-design-system/foobar-design-system.esm.js';
```

### Standalone

If you are using a Rindo component library with `dist-custom-elements`, we recommend importing Rindo components individually in those files where they are needed.

To export Rindo components as standalone components make sure you have the [`dist-custom-elements`](https://rindojs.web.app/docs/custom-elements) output target defined in your `rindo.config.ts`.

For example, given you'd like to use `<my-component />` as part of a React component, you can import the component directly via:

```tsx
import 'foobar-design-system/my-component';

function App() {
  return (
    <>
      <div>
        <my-component
          first="Rindo"
          last="'Don't call me a framework' JS"
        ></my-component>
      </div>
    </>
  );
}

export default App;
```
