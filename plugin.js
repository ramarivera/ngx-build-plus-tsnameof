"use strict";
exports.__esModule = true;
var webpack_1 = require("@ngtools/webpack");
var tsNameof = require("ts-nameof");
exports["default"] = {
    config: function (cfg) {
        var angularCompilerPlugin = cfg.plugins.find(function (x) { return x instanceof webpack_1.AngularCompilerPlugin; });
        angularCompilerPlugin._platformTransformers = [tsNameof];
        angularCompilerPlugin._transformers = [tsNameof].concat(angularCompilerPlugin._transformers);
        return cfg;
    }
};
