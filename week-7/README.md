# Intro to JS Resources

## Terminology

This week we'll introduce you to some new terms. Here's an overview of what they mean:

**Vanilla JS**: Vanilla JS or even just "vanilla" refers to regular, plain ol' JavaScript (as opposed to jQuery, which we'll get to in a second). JavaScript is a programming language that is built into your browser, so it can interpret your programs and run the code when the user loads a page. Vanilla JS is just JavaScript.

**jQuery**: jQuery is a JavaScript library that lets us "do more and write less" JavaScript. It needs to be included as an external script in your HTML file in order to run. When you include it in your project code, jQuery provides a "wrapper" around vanilla JS, giving you access to different jQuery methods that simplify their vanilla counterparts.

**DOM**: DOM stands for Document Object Model. The DOM is the way that your browser interprets HTML and makes it available to JavaScript. The DOM is not its own programming language, but rather just refers to a standardized way for JavaScript to interact with HTML in browsers.

**Node**: In the DOM, each HTML element is referred to as a node.

**NodeJS**: This is different from a DOM node! NodeJS is a JavaScript framework that lets you write server-side code in JavaScript. We won't be covering it in this class, but it's worth mentioning here just for the sake of distinguishing NodeJS from DOM nodes.

## Resources

For a thorough introduction to vanilla JavaScript, checkout the [JavaScript Basics explainer/tutorial, via Mozilla](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics)

A list of all of your common (and even some uncommon)[HTML Events](http://www.w3schools.com/jsref/dom_obj_event.asp)

jQuery is a library that sits on top of JavaScript and gives you access to many different methods that streamline the process of writing JavaScript. But there are some cases where jQuery could actually detract from the performance of your site, and it would behoove you to "go vanilla." [You Might Not Need jQuery](http://youmightnotneedjquery.com/) has a list of the basic jQuery methods and their vanilla counterparts; looking at it side by side, you realize that vanilla JS isn't so scary after all!

It's fine to be more comfortable with jQuery than with vanilla JS, but if you need to go vanilla for one reason or another, definitely check out Chris Ferdinandi's awesome explainer about [how he ditched jQuery](https://gomakethings.com/ditching-jquery/).
