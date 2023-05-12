[![Built With Rindo](https://img.shields.io/badge/-Built%20With%20Rindo-16161d.svg?colorA=16161d&style=flat-square)](https://rindojs.web.app)

# Rindo Component Starter

This is a starter project for building a standalone Web Component using Rindo.

Rindo is also great for building entire apps. For that, use the [rindo-app-starter](https://github.com/familyjs/rindo-app-starter) instead.

# Rindo

Rindo is a compiler for building fast web apps using Web Components.

Rindo combines the best concepts of the most popular frontend frameworks into a compile-time rather than run-time tool.  Rindo takes TypeScript, JSX, a tiny virtual DOM layer, efficient one-way data binding, an asynchronous rendering pipeline (similar to React Fiber), and lazy-loading out of the box, and generates 100% standards-based Web Components that run in any browser supporting the Custom Elements v1 spec.

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

Instead, use a prefix that fits your company or any name for a group of related components. For example, all of the Family generated web components use the prefix `fml`.


## Using this component

There are three strategies we recommend for using web components built with Rindo.

The first step for all three of these strategies is to [publish to NPM](https://docs.npmjs.com/getting-started/publishing-npm-packages).

### Script tag

- Put a script tag similar to this `<script type='module' src='https://unpkg.com/my-component@0.0.1/dist/my-component.esm.js'></script>` in the head of your index.html
- Then you can use the element anywhere in your template, JSX, html etc

### Node Modules
- Run `npm install my-component --save`
- Put a script tag similar to this `<script type='module' src='node_modules/my-component/dist/my-component.esm.js'></script>` in the head of your index.html
- Then you can use the element anywhere in your template, JSX, html etc

### In a rindo-starter app
- Run `npm install my-component --save`
- Add an import to the npm packages `import my-component;`
- Then you can use the element anywhere in your template, JSX, html etc
