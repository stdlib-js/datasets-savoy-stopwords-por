// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,o){"object"==typeof exports&&"undefined"!=typeof module?module.exports=o():"function"==typeof define&&define.amd?define(o):(e="undefined"!=typeof globalThis?globalThis:e||self).stopwords=o()}(this,(function(){"use strict";function e(e){if(e.__esModule)return e;var o=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(e).forEach((function(r){var t=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(o,r,t.get?t:{enumerable:!0,get:function(){return e[r]}})})),o}var o=require("path").resolve,r=require("@stdlib/fs-read-json").sync,t=o("/home/runner/work/datasets-savoy-stopwords-por/datasets-savoy-stopwords-por/lib","..","data","words.json"),n={encoding:"utf8"};return module.exports=function(){var e=r(t,n);if(e instanceof Error)throw e;return e},e(Object.freeze({__proto__:null}))}));
//# sourceMappingURL=bundle.js.map
