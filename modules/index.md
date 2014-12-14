title: Modules
author:
  name: Kottans
  twitter: kottans_org
output: index.html
theme: sudodoki/reveal-cleaver-theme

--

#Modules

--

##Saying 'module' we can mean:
* The Module pattern
* Object literal notation
* AMD modules
* CommonJS modules
* ES6 modules

--

#Object literal

```javascript
var myModule = {
  myProperty: "someValue",
  myConfig: {
    useCaching: true
  },
  myMethod: function ( config ) {
    /* ... */
  }
}
```

--

#Module

```javascript
var myModule = (function (){
  myPrivateData = "HAXXORSWON'TGETMYSECRET"
  return {
    publicMethod: doSomeStuff(arg) {
      /* use myPrivateData here */
    }
  }
})();

myModule.publicMethod('ok');

```

--

#Namespace

```javascript
var myApp = myApp || {};
myApp.myModule = ...
```

--

#Script loading
+ [require.js](https://github.com/jrburke/requirejs)
+ [curl.js](https://github.com/cujojs/curl)
+ [loadrunner.js](https://github.com/danwrong/loadrunner)
+ [head.js](http://headjs.com/)
+ [lab.js](http://labjs.com/)

--

#AMD
##Asynchronous Module Definition
Solution for modular JavaScript that developers can use today (or yesterday). It was born out of Dojo's real world experience using XHR+eval and proponents of this format wanted to avoid any future solutions suffering from the weaknesses of those in the past.

--

#Two words[:](http://www.wordsmith.org/anagram/anagram.cgi?anagram=REQUIRE++DEFINE&t=1000&a=n)
##REQUIRE
##DEFINE

--
```javascript
define(
    module_id /*optional*/,
    [dependencies] /*optional*/,
    definition function /*function for instantiating the module or object*/
);

```

--

```javascript
require([
  module_id, /* optional */
  module_id2, /* optional */
  module_id3, /* optional */
])
```

--
![Anonymous](https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQRvFigO4e0aUOf-NOrDjdPMIejTCTPz-8hqdpv8qfftbbXBIOqKA)  
###Anonymous modules
##path ~ module_id
--

#Config
```javascript
require.config({
  baseUrl: '/another/path',
  paths: {
    'lodash': 'bower_components/lodash/dist/lodash.js'
  }
})
require(['lodash'], function (_) { /* ... */ })
```
--
#Plugins
+ text!
+ css!
+ [whatever](https://github.com/jrburke/requirejs/wiki/Plugins)!
--
Why?
+ Clear proposal for defining flexible modules.
+ Significantly cleaner than the present global namespace and `<script>` tags.
+ Module definitions are encapsulated, avoiding pollution of the global namespace.
+ Most AMD loaders support loading modules in the browser without a build process.
+ Provides a "transport" approach for including multiple modules in a single file.
+ It's possible to lazy load scripts if this is needed.

--
#[Almond.js](https://github.com/jrburke/almond)
--
#[R.js](http://requirejs.org/docs/optimization.html)
##[Example build.js](https://github.com/jrburke/r.js/blob/master/build/example.build.js)

--

#CommonJS-like style
```javascript
define(function(require) {
  var $ = require('jquery'),
      _ = require('lodash'),
      model = require('./model');
});
```

--

###Browser & server-side
+ [requirejs](http://requirejs.org/)
+ [PINF](http://github.com/pinf/loader-js)  

###In-browser
+ [curljs](http://github.com/unscriptable/curl)
+ [bdLoad](http://bdframework.com/bdLoad)
+ [Yabble](http://github.com/jbrantly/yabble)

--

#CommonJS

--
#Sample
```javascript
var lib = require('lib');
var localLib = require('./local-lib');

function lol(){
   return localLib.modifyLol(lib.lol())
}
module.exports = lol
```

--

# Run the demo
```javascript
console.log(module, typeof module);
console.log(module.exports, typeof module.exports);
```

--

###In-browser:
+ curl.js
+ PING

###Server-side:
+ Node
+ [Narwhal](https://github.com/tlrobinson/narwhal)
+ [Perservere](http://www.persvr.org/)
+ [Wakanda](http://www.wakandasoft.com/)

--
#[Browserify](https://github.com/substack/node-browserify)
##by [@substack](https://github.com/substack)
![Browserify hat](http://browserify.org/images/wizard_hat.png)
--

#UMD

--

```javascript
// creating commonJsStrict module
(function ( root, factory ) {
    if ( typeof exports === 'object' ) {
        // CommonJS
        factory( exports, require('b') );
    } else if ( typeof define === 'function' && define.amd ) {
        // AMD. Register as an anonymous module.
        define( ['exports', 'b'], factory);
    } else {
        // Browser globals
        factory( (root.commonJsStrict = {}), root.b );
}(this, function ( exports, b ) {
    //use b in some fashion.
    // attach properties to the exports object to define
    // the exported module properties.
    exports.action = function () {};
}));

```

--

#[ES6 modules](http://jsmodules.io/)

--

##Quick examples
```javascript
// default export
export default jQuery;
// exports this class as "File"
export class File() { /* implementation */ }
// use shorthand objects to export 2 functions
export { encrypt, decrypt };
// import the default export of a module
import $ from "jquery";
// using 2 non-defaults exports
import { encrypt, decrypt } from "crypto";
// binding a module's exports to variables
import { unlink as rm } from "fs";
// binding and renaming one of a module's exports
import * as fs from "fs";
/* and say, use `fs.unlink` further on */
```

--
## Get over here, module
```javascript
// loading from external
import { y } from "foo";

import "foo";                // fetches "foo" at compile time

System.import("foo").then(function (fooModule) {
  let foo = fooModule;
}); // succeeds at runtime
```

--

## Module Tag
```javascript
<script type="module">
  // loads the 'q' export from 'mymodule.js' in the same path as the page
  import { MyConstructor } from 'mymodule';

  new MyConstructor();
</script>
```

--

# Config
```javascript
System.baseURL = '/another/path';
System.paths['lodash'] = 'bower_components/lodash/dist/lodash.js'
System.import('lodash').then(function(_) {
  /* ... */
})
```

--

# Right [here](https://github.com/square/es6-module-transpiler), right [now](https://github.com/ModuleLoader/es6-module-loader).

--

# [Module reading you need](http://addyosmani.com/resources/essentialjsdesignpatterns/book/#modulepatternjavascript).
