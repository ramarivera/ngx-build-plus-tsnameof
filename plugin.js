(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@ngtools/webpack", "ts-nameof", "typescript"], factory);
    }
})(function (require, exports) {
    "use strict";
    exports.__esModule = true;
    var webpack_1 = require("@ngtools/webpack");
    var tsNameof = require("ts-nameof");
    var typescript_1 = require("typescript");
    exports["default"] = {
        config: function (cfg) {
          var angularCompilerPlugin = cfg.plugins.find(function (x) { return x instanceof webpack_1.AngularCompilerPlugin; });
          console.log(angularCompilerPlugin);
            angularCompilerPlugin._transformers = [
              buildFactory('BEFORE')
,
                tsNameof,
                buildFactory('AFTER')
            ].concat(angularCompilerPlugin._transformers);
            return cfg;
        }
    };
    function buildFactory(text) {
        return function simpleTransformerFactory(context) {
            // Visit each node and call the function 'visit' from below
            return function (rootNode) { return typescript_1.visitNode(rootNode, visit); };
            function visit(node) {
                if (typescript_1.isClassDeclaration(node)) {
                    console.log(text + 'Found class node! ', node.name.escapedText);
                }
                if (typescript_1.isMethodDeclaration(node)) {
                    console.log(text + 'Found method node! ', node.name);
                }
                // Visit each Child-Node recursively with the same visit function
                return typescript_1.visitEachChild(node, visit, context);
            }
        };
    }
});
