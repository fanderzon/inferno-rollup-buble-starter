# Inferno Rollup starter
This is a base project to use when you want to build an [Inferno](https://github.com/trueadm/inferno) app, that is bundled by [Rollup](https://github.com/rollup/rollup) and transpiled by [Bublé](https://buble.surge.sh/guide/).

## Getting started
```
npm install
npm start
```
This will build the project and serve it on [http://localhost:5000](http://localhost:5000).

## Quirks
The project has been designed with interop of React-like libraries in mind. We want to easily be able to switch and test different libraries by changing a build step. So it requires you put a standard `import React from 'react'` in every JSX file.

This is because JSX elements, like in any React project, are transpiled to `React.createElement(...)` by Bublé, everything still works with Inferno because `react` and `react-dom` have been aliased in the Rollup build, to point to `inferno-create-element` and `inferno-dom`.

If you would rather not pretend you're using React you can easily instruct Bublé to transpile JSX to just `createElement(...)`, and include `import createElement from 'inferno-create-element'` in every JSX file instead. There is a line to uncomment in the `rollup.config.js` file for that.


## App structure
Well, there isn't much. `src/index.js` which loads and renders the `src/components/Hello.js` component.

## Scripts
* `npm run build` Builds the project to `dist`
* `npm start` - Builds and serves the project
* `npm run watch` - Watches the `src` folder and rebuilds the project on changes.
