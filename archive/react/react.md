title: react
author:
  name: Джон
  twitter: sudodoki
output: index.html
theme: sudodoki/reveal-cleaver-theme

--

#[React.js](http://facebook.github.io/react/) 
>A javascript library for building user interfaces

--
## Opensourced: May 2013.
--
>React is **V** in **MVC**

--

#Key features:
+ Simple & Declarative
+ Component Based
+ Virtual DOM
+ Enforcing One-way Dataflow
+ Synthetic Events

--

#Component Based
### Not web components.
### Build reusable components.
### You can consider your app as a tree of components.

--
#Sample Component
```
var React = require('react');
var Counter = React.createClass({
  getInitialState: function() {
    return { count: 0 }
  },
  incrementCount: function () {
    this.setState({count: this.state.count + 1})
  },
  render: function() {
    var styleObj = {padding:"10px", "margin-left":"5px"}
    return (<div>
        Total {this.props.purpose} count: {this.state.count}
        <button style={styleObj} onClick={this.incrementCount}>⊕</button>
      </div>)
  }
});
module.exports = Counter;
```
[Demo](http://jsfiddle.net/69z2wepo/2070/)
--
#Virtual DOM
Represent DOM as intermediate js object. Whenever there's need in render, generate VDOM tree, diff it with previous state, generate minimum sets of changes, apply to actual DOM. Repeat.
--
## Something changes — RERENDER **EVERYTHING**
--
#JSX
Optional HTML-like syntax to create React tree nodes. You have it inside your components, thus your whole component incapsulates both markup & behaviour

--
```
      <div>
        <nav id='main-nav'>
          <li className='list-item'><a href='/'></a></li>
          <li className='list-item'><a href='/'></a></li>
        </nav>
        <Page />
      </div>
```
->
```
      React.createElement("div", null,
        React.createElement("nav", {id: "main-nav"},
          React.createElement("li", {className: "list-item"}, React.createElement("a", {href: "/"})),
          React.createElement("li", {className: "list-item"}, React.createElement("a", {href: "/"}))
        ),
        React.createElement(Page, null)
      )
```
--

# One-way dataflow
### Each components has state, which can be changed/reset using components API
### Each components has props (properties), which are passed to it from parent component.
--
```
<Route name="createEvent" handler = {require('./EventFormComponent')}/>
```
Depend on only changing `state` of the component, props are given. Owner components sets props on its children.
--
# Root component
Mounted using `React.render` and passing component followed by the DOM node to attach to.
```
React.render(
        <h1>Hello, world!</h1>,
        document.getElementById('example')
      );
```
--
# [Component Specs](http://facebook.github.io/react/docs/component-specs.html#component-specifications)
+ `render()` - required method that returns null/false or another component.
+ `getInitialState()`
+ `getDefaultProps()`
+ `propTypes` - object to specify [properties validations](http://facebook.github.io/react/docs/reusable-components.html#prop-validation)
+ `mixins` - [Mixins](http://facebook.github.io/react/docs/reusable-components.html#mixins)
+ `statics` - static methods for the component
+ `displayName` - used in debugging
--
# [Lifecycle](http://facebook.github.io/react/docs/component-specs.html#lifecycle-methods)
+ `componentWillMount`
+ `componentDidMount`
+ `componentWillReceiveProps`
+ `shouldComponentUpdate`
+ `componentWillUpdate`
+ `componentDidUpdate`
+ `componentWillUnmount`
--
# [Event System](http://facebook.github.io/react/docs/events.html)
React deals with crossbrowser pain & passes you `SyntheticEvent` wrappers for browser's native events.
--
### NB:
> The event handlers are triggered by an event in the bubbling phase. To register an event handler for the capture phase, append Capture to the event name
--
# [Addons](http://facebook.github.io/react/docs/addons.html)
--
+ [Getting Started](http://facebook.github.io/react/docs/getting-started.html)
+ [Thinking in React](http://facebook.github.io/react/docs/thinking-in-react.html)
+ [Reconciliation](http://facebook.github.io/react/docs/reconciliation.html)
+ [Understanding React & reimplementing Views](https://gcanti.github.io/2014/10/29/understanding-react-and-reimplementing-it-from-scratch-part-1.html)
+ [React components vs web components](http://programmers.stackexchange.com/questions/225400/pros-and-cons-of-facebooks-react-vs-web-components-polymer)
+ [ReactiveElements](https://github.com/PixelsCommander/ReactiveElements)
+ [Awesome React](https://github.com/enaqx/awesome-react)
+ [React Components](http://react-components.com)
+ [React starterify](https://github.com/koistya/react-starterify)
+ [dev-ua/reactjs](https://gitter.im/dev-ua/reactjs)

