// We convert less import in es/lib to css file path
function cssInjection(content) {
  return content
    .replace(/\/style\/?'/g, "/style/css'")
    .replace(/\/style\/?"/g, '/style/css"')
    .replace(/\.less/g, '.css')
    .replace(/\.s(a|c)ss/g, '.css');
}

module.exports = {
  cssInjection,
};
