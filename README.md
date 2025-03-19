# abort-options

[![codecov](https://img.shields.io/codecov/c/github/achingbrain/abort-options.svg?style=flat-square)](https://codecov.io/gh/achingbrain/abort-options)
[![CI](https://img.shields.io/github/actions/workflow/status/achingbrain/abort-options/js-test-and-release.yml?branch=main\&style=flat-square)](https://github.com/achingbrain/abort-options/actions/workflows/js-test-and-release.yml?query=branch%3Amain)

> An interface with an optional AbortSignal

# About

<!--

!IMPORTANT!

Everything in this README between "# About" and "# Install" is automatically
generated and will be overwritten the next time the doc generator is run.

To make changes to this section, please update the @packageDocumentation section
of src/index.js or src/index.ts

To experiment with formatting, please run "npm run docs" from the root of this
repo and examine the changes made.

-->

An object that contains an AbortSignal as the optional `signal` property.

## Example

```js
const controller = new AbortController()

aLongRunningOperation({
  signal: controller.signal
})

// later

controller.abort()
```

# Install

```console
$ npm i abort-options
```

## Browser `<script>` tag

Loading this module through a script tag will make its exports available as `AbortOptions` in the global namespace.

```html
<script src="https://unpkg.com/abort-options/dist/index.min.js"></script>
```

# API Docs

- <https://achingbrain.github.io/abort-options>

# License

Licensed under either of

- Apache 2.0, ([LICENSE-APACHE](https://github.com/achingbrain/abort-options/LICENSE-APACHE) / <http://www.apache.org/licenses/LICENSE-2.0>)
- MIT ([LICENSE-MIT](https://github.com/achingbrain/abort-options/LICENSE-MIT) / <http://opensource.org/licenses/MIT>)

# Contribution

Unless you explicitly state otherwise, any contribution intentionally submitted for inclusion in the work by you, as defined in the Apache-2.0 license, shall be dual licensed as above, without any additional terms or conditions.
