# Inferno Rollup starter
This is a base project to use when you want to build an [Inferno](https://github.com/trueadm/inferno) app, that is bundled by [Rollup](https://github.com/rollup/rollup) and transpiled by [Bublé](https://buble.surge.sh/guide/).

## Getting started
```
npm install
npm start
```
This will build the project and serve it on [http://localhost:5000](http://localhost:5000).

## Quirks
Just like you need to have `import React from 'react'` in every JSX file in a React project, you need to include `import createElement from 'inferno-create-element'` in every JSX file here.

This is because JSX elements are normally transpiled to `React.createElement(...)`, but here Bublé has been instructed to transpile them to just `createElement(...)`, so the createElement function needs to be available.

## App structure
Well, there isn't much. `src/index.js` which loads and renders the `src/components/Hello.js` component.

## Scripts
* `npm run build` Builds the project to `dist`
* `npm start` - Builds and serves the project
* `npm run watch` - Builds and serves the project, then watches the `src` folder and rebuilds the project on changes.
