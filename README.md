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

# Portuguese Stop Words

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> A list of Portuguese [stop words][stopwords].

<section class="intro">

</section>

<!-- /.intro -->



<section class="usage">

## Usage

To use in Observable,

```javascript
stopwords = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/datasets-savoy-stopwords-por@umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var stopwords = require( 'path/to/vendor/umd/datasets-savoy-stopwords-por/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/datasets-savoy-stopwords-por@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.stopwords;
})();
</script>
```

#### stopwords()

Returns a list of 356 Portuguese [stop words][stopwords].

```javascript
var list = stopwords();
/* returns
    [
        'a',
        'à',
        'adeus',
        'agora',
        'aí',
        'ainda',
        ...
    ]
*/
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/datasets-savoy-stopwords-por@umd/browser.js"></script>
<script type="text/javascript">
(function () {

var list = stopwords();
var len = list.length;
var idx;
var i;

// Select random words from the list...
for ( i = 0; i < 100; i++ ) {
    idx = floor( randu()*len );
    console.log( list[ idx ] );
}

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->



<section class="references">

## References

-   Savoy, Jacques. 2005. "IR Multilingual Resources at UniNE." <http://members.unine.ch/jacques.savoy/clef/>.

</section>

<!-- /.references -->

<!-- <license> -->

## License

The data files (databases) and their contents are licensed under a [BSD-2-Clause license][bsd-license]. The software is licensed under [Apache License, Version 2.0][apache-license].

<!-- </license> -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/datasets-savoy-stopwords-por.svg
[npm-url]: https://npmjs.org/package/@stdlib/datasets-savoy-stopwords-por

[test-image]: https://github.com/stdlib-js/datasets-savoy-stopwords-por/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/datasets-savoy-stopwords-por/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/datasets-savoy-stopwords-por/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/datasets-savoy-stopwords-por?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/datasets-savoy-stopwords-por.svg
[dependencies-url]: https://david-dm.org/stdlib-js/datasets-savoy-stopwords-por/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/datasets-savoy-stopwords-por/tree/deno
[umd-url]: https://github.com/stdlib-js/datasets-savoy-stopwords-por/tree/umd
[esm-url]: https://github.com/stdlib-js/datasets-savoy-stopwords-por/tree/esm
[branches-url]: https://github.com/stdlib-js/datasets-savoy-stopwords-por/blob/main/branches.md

[stopwords]: https://en.wikipedia.org/wiki/Stop_words

[bsd-license]: https://opensource.org/licenses/bsd-license.html

[apache-license]: https://www.apache.org/licenses/LICENSE-2.0

</section>

<!-- /.links -->
