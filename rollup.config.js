const { defineConfig } = require('rollup');

module.exports = defineConfig({
  input: './src/index.js',
  output: {
    format: 'es',
    file: './worker.js'
  }
});
