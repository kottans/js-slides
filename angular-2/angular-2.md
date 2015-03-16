title: Angular (Part II)
output: index.html
author:
  name: sudodoki
  email: smd.deluzion@gmail.com
  twitter: sudodoki

--

# Angular, round II

--

# DOM manipulation

--

# File structures

--

### Utils
+ copy (deep copy, can pass 'destination'), equals, extend (shallow extend), merge (deep extend)
+ equals, isArray, isDate, isDefined, isElement, isFunction, isNumber, isObject, isString/isUndefined
+ forEach
+ fromJson, toJson
+ identity, noop
+ lowercase, uppercase
+ module, injector

--

```
var $div = $('<div ng-controller="MyCtrl">{{content.label}}</div>');
$(document.body).append($div);

angular.element(document).injector().invoke(function($compile) {
  var scope = angular.element($div).scope();
  $compile($div)(scope);
});
```

--

### angular.element
If **jQuery** is _available_, angular.element is an **alias** for the jQuery function. If **jQuery** is _not available_, angular.element delegates to Angular's built-in subset of jQuery, called "jQuery lite" or "**jqLite**."

Limitations: not all methods, `children()`/`next()`/`find()` do not support selectors (or just tag names), `on()`/`off()`/`bind()`/`unbind()` do not support namespaces/selectors

--

# NB
## $window, $document
--

### Directives
+ ngShow/ngHide
+ ngIf/ngCase
+ ngInclude
+ ngBind, ngBindHtml ($sanitize), ngBindTemplate, ngNonBindable
+ ngBlur, ngChange, ngChecked, ngCopy, ngFocus, ngKeypress, ngKeyup, ngMousedown, ngMouseenter, ngMouseleave, ngMousemove, ngMouseover,  ngMouseup, ngPaste, ngSubmit, ngClick, ngDblclick
+ ..

--

+ ..
+ ngModel/ngModelOptions
+ ngPluralize
+ ngOptions/ngValue
+ ngDisabled, ngSrc, ngHref, ngOpen, ngReadonly, ngSrcSet, ngSelected
+ ngClass, ngClassEven, ngClassOd
+ ngRepeat
+ ngCloak,
+ ngCsp, ngJq

--

## Example
<a class="jsbin-embed" href="http://jsbin.com/zixilirolu/2/embed?html,js,output">JS Bin</a><script src="http://static.jsbin.com/js/embed.js"></script>

--

## Forms (ngForm)
+ css classes (ng-valid, ng-invalid, ng-pristine, ng-dirty, ng-submitted)
+ Don't use ng-click - use ng-submit
+ Use names on input & forms. If specified, will bind fields to related scope
--

## ngModelOptions
View value might differ from model
To sync model - view after model-options play their part, call $rollbackViewValue on input field (use form controller).
--

## Example
<a class="jsbin-embed" href="http://jsbin.com/sijoki/2/embed?html,js,console,output">JS Bin</a><script src="http://static.jsbin.com/js/embed.js"></script>

--

### Services
+ $sce
+ $q
+ $http, $resource`*`
+ $timeout, $interval
+ $cacheFactory
+ $compile, $parse
+ $location

--

### $q
+ defer()
+ reject(reason) - create rejected promise
+ when - thenable to $q
+ all(promises)

--

### $http
+ get
+ head
+ post
+ put
+ delete
+ jsonp
+ patch

--

### $cacheFactory
+ $templateCache - $cacheFactory.get('templates')
+ $httpCache - $cacheFactory.get('$http')
$cacheFactory.get(cacheId)
+ $cacheFactory('my-cache');

--

### Cache instance Methods:
+ info() — Returns id, size, and options of cache.
+ **put**({string} key, {*} value) — Puts a new key-value pair into the cache and returns it.
+ **get**({string} key) — Returns cached value for key or undefined for cache miss.
+ remove({string} key) — Removes a key-value pair from the cache.
+ removeAll() — Removes all cached values.
+ destroy() — Removes references to this cache from $cacheFactory.
--

# $compile
$compile(domNode)(scope) -> binds dom to scope, frequently used in test

--
```
var templateElement = angular.element('<p>{{total}}</p>'),
    scope = ....;

var clonedElement = $compile(templateElement)(scope, function(clonedElement, scope) {
  //attach the clone to DOM document at the right place
});

//now we have reference to the cloned DOM via `clonedElement`
```
--

# $parse
$parse(ngExpression)(scope) -> get getter & getter.assign - setter for values

--
```
var getter = $parse('user.name');
var setter = getter.assign;
var context = {user:{name:'angular'}};
var locals = {user:{name:'local'}};

expect(getter(context)).toEqual('angular');
setter(context, 'newValue');
expect(context.user.name).toEqual('newValue');
expect(getter(context, locals)).toEqual('local');
```

--

### Filter
+ currency
+ date
+ filter
+ json
+ limitTo
+ lowercase, uppercase
+ number
+ orderBy

--

### Extensions
+ ngMessages
+ $resource
+ ngRoute
+ uiRouter
+ ngSanitize
+ ngAnimate
+ ngAria
+ ngCookies
+ ngMock
+ ngTouch

--

# [$ngMessages](https://docs.angularjs.org/api/ngMessages/directive/ngMessages)

--

# [$resource](https://docs.angularjs.org/api/ngResource/service/$resource)

--

# [uiRouter](https://github.com/angular-ui/ui-router)

--

# [Example](https://github.com/Kottans/js-slides/tree/gh-pages/angular-2/example
)

