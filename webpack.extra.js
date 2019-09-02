const ngTools = require('@ngtools/webpack');
const tsNameof = require("ts-nameof");

module.exports = function(original)  {

  const angularCompilerPlugin = original.plugins.filter(x => x instanceof ngTools.AngularCompilerPlugin)[0];
  const index = original.plugins.indexOf(angularCompilerPlugin);
  delete original.plugins[index];

  const options = Object.assign({}, angularCompilerPlugin.options, { platformTransformers : [tsNameof] });
  const newPlugin = new ngTools.AngularCompilerPlugin(options);
  original.plugins[index] = newPlugin;

  console.log(original.plugins)

  return original;
};
