<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# isIteratorLike

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] [![dependencies][dependencies-image]][dependencies-url]

> Test if a value is [`iterator`][mdn-iterator-protocol]-like.

<section class="installation">

## Installation

```bash
npm install @stdlib/assert-is-iterator-like
```

</section>

<section class="usage">

## Usage

```javascript
var isIteratorLike = require( '@stdlib/assert-is-iterator-like' );
```

#### isIteratorLike( value )

Tests if a `value` is [`iterator`][mdn-iterator-protocol]-like.

<!-- eslint-disable no-restricted-syntax, no-empty-function -->

```javascript
var obj = {
    'next': function noop() {}
};
var bool = isIteratorLike( obj );
// returns true

bool = isIteratorLike( {} );
// returns false
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   An [iterator protocol-compliant object][mdn-iterator-protocol] is an `object` having a `next` method following the [iterator protocol][mdn-iterator-protocol].
-   As full [iterator][mdn-iterator-protocol] compliance is **impossible** to achieve without evaluating an [iterator][mdn-iterator-protocol], this function checks **only** for interface compliance.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var noop = require( '@stdlib/utils-noop' );
var isIteratorLike = require( '@stdlib/assert-is-iterator-like' );

var obj = {
    'next': noop
};
var bool = isIteratorLike( obj );
// returns true

bool = isIteratorLike( {} );
// returns false

bool = isIteratorLike( [] );
// returns false

bool = isIteratorLike( null );
// returns false
```

</section>

<!-- /.examples -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/assert-is-iterator-like.svg
[npm-url]: https://npmjs.org/package/@stdlib/assert-is-iterator-like

[test-image]: https://github.com/stdlib-js/assert-is-iterator-like/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/assert-is-iterator-like/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/assert-is-iterator-like/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/assert-is-iterator-like?branch=main

[dependencies-image]: https://img.shields.io/david/stdlib-js/assert-is-iterator-like
[dependencies-url]: https://david-dm.org/stdlib-js/assert-is-iterator-like/main

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/assert-is-iterator-like/main/LICENSE

[mdn-iterator-protocol]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterator_protocol

</section>

<!-- /.links -->
