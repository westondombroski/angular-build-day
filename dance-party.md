# <img src="https://cloud.githubusercontent.com/assets/7833470/10423298/ea833a68-7079-11e5-84f8-0a925ab96893.png" width="60"> Angular Party

<img src="https://media.giphy.com/media/V0BIjUQRfl8tO/giphy.gif" width="50%">

An AngularJS party with music and "guests"! The inspiration for this app is <a href="http://gifdanceparty.giphy.com/" >GIF Dance Party.</a> Basically, we'll use the giphy "stickers" api to let users stick moving images onto the page, and we'll add sound and a background image.

This app focuses on:

* using external APIs
* using external angular directives
* stretch: caching app data

## Possible User Stories

MVP
1. A user should be able to add a random sticker (from giphy) to the page.   
1. A user should be able to drag stickers around over the "dance floor" background.
1. The user should be able to toggle fun audio on or off!  

Customization
1. A user should be able select one of a list of 2-3 background images.
1. The user should be able to enter the URL for whatever background image they want!
1. Instead of gifs being random, the user should be able to enter a search term or tag to determine what kind of sticker they get from giphy.
1. The user should be able to see at least three stickers from giphy and choose which one they'd like to add.  
1. The user should be able to select from a few preloaded audio tracks.


### Tips
Here are some tips you may find useful for key steps during this project!


#### Explore the <a href="https://github.com/Giphy/GiphyAPI#giphy-sticker-api" >giphy sticker api</a>

1. Before you start to code, use your browser or Postman to make some test calls to the sticker api. You should figure out the structure of the url to send and explore the structure of the data you get back.
1. Decide what parts of the data you'll want to use to fill out your wireframe. Hint: You'll definitely want something from the `images` section of each gif! :D

#### Dragging

1. Include an external `ngDraggable` directive in your project.  The <a href="https://docs.angularjs.org/guide/directive" >Angular Directives guide</a> has a simple draggable implementation (CMD+F draggable), or you could search for a more full-featured one.  Check out a demo of any draggable you consider to make sure it behaves the way you want!
1. If the draggable you find suggests installing with bower, you can either install bower, or copy the source code directly into your project. If you copy the source code, add a comment that gives credit to the creator and a link to their site!
1. Remember to add a dependency to your `ngDraggable` module in your application with `angular.module('yourAppName', ['ngDraggable']);`.  
1. Read the module's docs (or check out the demo code) to see how to incorporate it into your html.
1. Grab one gif from the api results you explored earlier and use it to test out dragging on your page.


#### Sound

1. Include an external `ngAudio` directive in your project. Hint: One possibility is <a href="http://stackoverflow.com/a/17624543" >this simple directive from StackOverflow user narced133</a>. Remember to add a comment with the source of your external directives!
1. Incorporate the audio directive into your html with an example sound.
1. Modify your html so that the sound loops. Reference MDN's <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio" >HTML5 `<audio>` docs</a>.
1. Find a few sounds you like. You need the url of the sound online, so you're looking for urls that end in, for example, `.ogg` or `.wav`. One potential resource is <a href="http://www.findsounds.com/" >http://www.findsounds.com/</a>.  Try searching "loop" to find sounds that loop well!

<img src="http://www.reactiongifs.com/wp-content/uploads/2012/10/boombox-boogie.gif" width ="20%">
