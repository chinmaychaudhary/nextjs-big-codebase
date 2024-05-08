## Getting Started

```bash
nvm use 18
corepack enable
yarn set version 4.0.2
yarn
```

## Build failure

```bash
yarn build
```

## When built using custom-built node bindings with injected logs
```
transform file name /nextjs-big-codebase/src/generated/Component14.jsx
transform start_pos: 282744
transform end_pos: 268718281
transform file name /nextjs-big-codebase/src/generated/Component10.jsx
transform start_pos: 268718282
transform end_pos: 537153819
transform file name /nextjs-big-codebase/src/generated/Component13.jsx
transform start_pos: 537153820
transform end_pos: 805589357
transform file name /nextjs-big-codebase/src/generated/Component9.jsx
transform start_pos: 805589358
transform end_pos: 1074024895
transform file name /nextjs-big-codebase/src/generated/Component12.jsx
transform start_pos: 1074025036
transform end_pos: 1342460573
transform file name /nextjs-big-codebase/src/generated/Component11.jsx
transform start_pos: 1342460574
transform end_pos: 1610896111
transform file name /nextjs-big-codebase/src/generated/Component16.jsx
transform start_pos: 1610896112
transform end_pos: 1879331649
transform file name /nextjs-big-codebase/src/generated/Component7.jsx
transform start_pos: 1879331650
transform end_pos: 2147767187
transform file name /nextjs-big-codebase/src/generated/Component8.jsx
transform start_pos: 2147767328
transform end_pos: 2416202865
transform file name /nextjs-big-codebase/src/generated/Component15.jsx
transform start_pos: 2416202866
transform end_pos: 2684638403
transform file name /nextjs-big-codebase/src/generated/Component6.jsx
transform start_pos: 2684638404
transform end_pos: 2953073941
transform file name /nextjs-big-codebase/src/generated/Component4.jsx
transform start_pos: 2953073942
transform end_pos: 3221509479
transform file name /nextjs-big-codebase/src/generated/Component2.jsx
transform start_pos: 3221509620
transform end_pos: 3489945157
transform file name /nextjs-big-codebase/src/generated/Component5.jsx
transform start_pos: 3489945158
transform end_pos: 3758380695
transform file name /nextjs-big-codebase/src/generated/Component3.jsx
transform start_pos: 3758380696
transform end_pos: 4026816233
transform file name /nextjs-big-codebase/src/generated/Component1.jsx
transform start_pos: 4026816234
transform end_pos: 284475
Panic: PanicInfo { payload: Any { .. }, message: Some(assertion failed: start <= end), location: Location { file: "/Users/<unnamed>/.cargo/registry/src/index.crates.io-6f17d22bba15001f/swc_common-0.33.22/src/input.rs", line: 31, col: 9 }, can_unwind: true, force_no_backtrace: false }
```
