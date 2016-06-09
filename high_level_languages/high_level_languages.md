title: Insert Title here
author:
  name: sudodoki
  email: smd.deluzion@gmail.com
  github: sudodoki
  twitter: sudodoki
theme: sudodoki/reveal-cleaver-theme
output: index.html
--
<style type="text/css">
  .reveal abbr.dotted {
    border-bottom: 1px dotted;
  }
</style>

# JS: NEXT LEVEL
There're a lot of tools that extend JS possibilities, like libs that modify standard objects, etc. But some people wanted to do something so different, they created their own language, that compiles (or better said transpiles) into javascript.
--

## Why Would They Do This?
## There're Several Reasons
<ol>
  <li class="fragment">To introduce some <abbr title='syntax within a programming language that is designed to make things easier to read or to express' class='dotted'>syntactic sugar</abbr>, like <a href="http://coffeescript.org/">CoffeeScript</a> </li>
  <li class="fragment">To introduce <abbr class="dotted" title='data types (such as integer, character, hexadecimal, packed decimal, and so forth) is predefined as part of the programming language and all constants or variables defined for a given program must be described with one of the data types'>strong typing</abbr> , like <a href="www.typescriptlang.org/‎">Typescript</a> or <a href="www.dartlang.org/‎">Dart</a></li>
  <li class="fragment">To write javascript in your favourite language: <a href="http://clojure.org/clojurescript">ClojureScript</a>, <a href="https://www.scala-js.org/">Scala.js</a>, <a href="opalrb.org/‎">Opal</a>, <a href="http://pyjs.org/">Pyjamas</a>, <a href="https://github.com/fglock/Perlito">Perlito</a>, <a href="https://github.com/kless/go2js">Go2js</a>, <a href="https://github.com/ghcjs/ghcjs">GHCJS</a> and ton of others</li>
  <li class="fragment">Other semantics: [Elm](http://elm-lang.org/), …</li>
  <li class="fragment">Snobbery</li>
</ol>

--

# [List of languages, that compile to JS](https://github.com/jashkenas/coffeescript/wiki/List-of-languages-that-compile-to-JS)

--

# [CoffeeScript in previous year slides](../high_level_languages-2015/#/13)

--

# [ClojureScript in previous year slides](../high_level_languages-2015/#/24)
## [Cljs for js devs](http://roman01la.github.io/cljs-for-js-devs/)

--

# [TypeScript](www.typescriptlang.org)
## [Awesome TypeScript](https://github.com/dzharii/awesome-typescript)
### [TypeScript Revealed](http://www.amazon.com/TypeScript-Revealed-Dan-Maharry/dp/1430257253)
### [TypeScript Deep Dive](https://basarat.gitbooks.io/typescript)

--

# Future JS Now
+ Classes
+ Arrow Functions
+ Rest Parameters
+ let
+ const
+ Destructuring
+ for...of
+ Iterators
+ Template Strings
+ Spread Operator
+ Enums
+ Promise
+ Generators
+ Async Await
+ Decorators

--

# Future? JS Now
+ ~~Classes~~ | ~~Arrow Functions~~ | ~~Rest Parameters~~ | ~~let~~ | ~~const~~ | ~~Destructuring~~ | ~~for...of~~ | ~~Iterators~~ | ~~Template Strings~~
+ Spread Operator  (+ Stage 2 Rest/Spread properties)
+ ###**Enums**
+ ~~Promise~~ | ~~Generators~~
+ Async Await (Stage 3)
+ Decorators (Stage 1)

--

# Static type language fanboys' cherry
+ Namespaces / Modules
+ Classes
+ Generics
+ Interfaces
+ Decorators

--

## Design time parts
+ Type/signature check
+ Private/public/protected

## Run Time Parts
+ Transpilation

--

# Helping w/ type information – type definitions
+ [DefinitelyType](https://github.com/DefinitelyTyped/DefinitelyTyped)
+ [typings](https://github.com/typings/typings)

--

# Code Time
