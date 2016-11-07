import buble from 'rollup-plugin-buble';
import uglify from 'rollup-plugin-uglify';
import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import alias from 'rollup-plugin-alias';

export default {
  entry: 'src/index.js',
  external: [],
  moduleName: 'inferno-starter',
  plugins: [
    alias({
      'react-dom': __dirname + '/scripts/react-dom-to-inferno-dom.js',
      react: __dirname + '/scripts/react-to-inferno'
    }),
    buble({
      // uncomment this to use `import createElement from
      // 'inferno-create-element';` with jsx
      // jsx: 'createElement',
      objectAssign: 'Object.assign'
    }),
    uglify(),
    nodeResolve({
      jsnext: true,
      browser: true
    }),
    commonjs()
  ],
  format: 'iife',
  dest: 'dist/bundle.js'
};
