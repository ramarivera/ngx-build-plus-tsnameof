import { AngularCompilerPlugin } from '@ngtools/webpack';
import * as tsNameof from 'ts-nameof';

export default {
  config(cfg) {
    const angularCompilerPlugin = cfg.plugins.find(
      x => x instanceof AngularCompilerPlugin
    );

    angularCompilerPlugin._transformers = [
      tsNameof,
      ...angularCompilerPlugin._transformers,
    ];

    return cfg;
  },
};
