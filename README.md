# Webpack, preprocess-loader, typescript issue

## Summary
When using `preprocess-loader` with TypeScript it will try to compile a dependency that should have been skipped if the import is not in the root entry file. 

## Run with the expected behavior
* `npm i`
* Add the code snippet below to index.ts:
```ts
// @if ENABLE
import { Dummy } from "./dummy";
// @endif
```
* `npm run build`

## Run with the error
* `npm i`
* Add the code snippet below to app.ts (and make sure it is not in index.ts anymore):
```ts
// @if ENABLE
import { Dummy } from "./dummy";
// @endif
```
* `npm run build`

## Conclusion
* In both cases the generated output is correct.
* When preprocess is not in the entry file but in a dependency, the TS compiler compiles it even though it should skip that dependency entirely.