const sass = require('sass');
const path = require('path');
const postcss = require('postcss');
const autoprefixer = require('autoprefixer');

function transformSass(sassFilePath, config = {}) {
  const { cwd = process.cwd() } = config;
  const resolvedSassFile = path.resolve(cwd, sassFilePath);

  return sass
    .compileAsync(resolvedSassFile)
    .then(result => postcss([autoprefixer]).process(result.css, { from: undefined }))
    .then(r => r.css);
}

module.exports = transformSass;
