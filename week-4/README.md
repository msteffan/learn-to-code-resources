# General CSS resources

http://devdocs.io/css/

## CSS Layouts:

### How can we position elements with CSS?

*Static* — When you add an element to the page without modifying its position, the element still has a default value: static, which is to say, its position has no special properties. If something has “static” position, we call it “non-positioned.”

*Relative* — The first of the positions we’ll talk about isn’t particularly exciting; in fact, if you add position: relative nothing will happen—yet. That’s because relative position is calculated relative to its normal (static) position, so we have to offset the element some amount in order to see change. We can add offset on any side using the top, right, bottom, and left properties. The offset will be applied calculated from the element’s original position, and it leaves a gap in the page when it is moved.

*Fixed* — It’s possible to position elements so that they appear not to move at all. We do this with fixed position. When an element’s position is fixed, it receives position coordinates relative to the viewport. As with relative, we’ll need to specify top, right, bottom, and left properties; once we do, though, we can achieve cool effects like a header element that seems to stick to the top of the page.

*Absolute* — We’ve saved the best for last—and by best I mean “most likely to trip up even a senior developer.” Absolute position is like a blend of relative and fixed. An element that receives position: absolute will be positioned relative to its nearest positioned ancestor, rather than to the viewport.

### Whoa, whoa, whoa. Now that we can position elements, this means elements could get stacked on top of each other. How can I modify that?

We can modify the stacking context of our divs using a property called *z-index*, which only works on elements that are positioned. An element’s z-index is a number that determines how high in the stack an element should be; a higher z-index means that the element will be rendered above those elements with lower z-indexes.

### Tutorials & Links

A list of all named CSS colors and their hexidecimal equivalents, [via CSS Tricks](https://css-tricks.com/snippets/css/named-colors-and-hex-equivalents/)

Need a cool color scheme? We recommend checking out [Coolors.co](https://coolors.co/app) Generate a color scheme, lock any colors you like, and then press the space bar to generate other coordinating colors.

Free fonts available from [Google Fonts](https://fonts.google.com/). To learn how to use a Google font, re-watch the first seminar on CSS; the process is covered there in detail. 

Highly recommend this tutorial on layouts, called [Learn Layout.](http://learnlayout.com/) It will help clarify each of the different CSS positions, how to use them, and how they cause elements to interact with each other. There's also a section on Flexbox if you want to get more advanced.

An introductory CSS tutorial, from [Mozilla Developer Nework](https://developer.mozilla.org/en-US/docs/Web/CSS/Tutorials)

To take things a step further, checkout this [intermediate CSS tutorial.](http://learn.shayhowe.com/advanced-html-css/)

As with HTML, HTML Dog is a great resource for [intermediate & advanced CSS.](http://www.htmldog.com/guides/css/intermediate/layout/)

### Flexbox

[CSS Tricks' "Guide to Flexbox"](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) is one of the most authoritative resources out there explaining what flexbox is and how to use it.

CSS Tricks also offers [this helpful screencast](https://css-tricks.com/video-screencasts/131-tinkering-flexbox/) if you prefer to learn via video tutorials.

[Flexbox In 5](http://flexboxin5.com/)

#### Codepen Visuals
These examples are visual aids for understanding how flex properties behave differently depending on how `flex-direction` is set on the flex container. 

[flex-direction: row](http://codepen.io/danasselin/full/JRYKxN/)

[flex-direction: column](http://codepen.io/danasselin/full/KgdgaV/)



