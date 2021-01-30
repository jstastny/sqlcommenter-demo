## About

This tries to be minimal example application with ExpressJS and Knex together with sqlcommenter.

## The problem
This tries to demonstrate that when following the [sqlcommenter guide](https://google.github.io/sqlcommenter/node/knex/#express-middleware) the resulting application fails to start with:

```
➜  sqlcommenter-demo node index.js
internal/modules/cjs/loader.js:960
  throw err;
  ^

Error: Cannot find module '@opencensus/propagation-tracecontext'
Require stack:
- /Users/honza/projects/sqlcommenter-demo/node_modules/@google-cloud/sqlcommenter-knex/util.js
- /Users/honza/projects/sqlcommenter-demo/node_modules/@google-cloud/sqlcommenter-knex/index.js
- /Users/honza/projects/sqlcommenter-demo/index.js
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:957:15)
    at Function.Module._load (internal/modules/cjs/loader.js:840:27)
    at Module.require (internal/modules/cjs/loader.js:1019:19)
    at require (internal/modules/cjs/helpers.js:77:18)
    at Object.<anonymous> (/Users/honza/projects/sqlcommenter-demo/node_modules/@google-cloud/sqlcommenter-knex/util.js:15:30)
    at Module._compile (internal/modules/cjs/loader.js:1133:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1153:10)
    at Module.load (internal/modules/cjs/loader.js:977:32)
    at Function.Module._load (internal/modules/cjs/loader.js:877:14)
    at Module.require (internal/modules/cjs/loader.js:1019:19) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/Users/honza/projects/sqlcommenter-demo/node_modules/@google-cloud/sqlcommenter-knex/util.js',
    '/Users/honza/projects/sqlcommenter-demo/node_modules/@google-cloud/sqlcommenter-knex/index.js',
    '/Users/honza/projects/sqlcommenter-demo/index.js'
  ]
}
```

