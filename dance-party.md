# <img src="https://cloud.githubusercontent.com/assets/7833470/10423298/ea833a68-7079-11e5-84f8-0a925ab96893.png" width="60"> Angular Party

<img src="https://media.giphy.com/media/V0BIjUQRfl8tO/giphy.gif" width="50%">

Your goal is to implement an AngularJS party with music and "guests"! The inspiration for this app is <a href="http://gifdanceparty.giphy.com/" >GIF Dance Party.</a> Basically, we'll use the giphy "stickers" api to let users stick moving images onto the page, and we'll add sound and a background image.

This app focuses on:

* using external APIs
* using external angular directives
* stretch: caching app data

## Suggested User Stories

**Sticker Search**
1. A user should be able to add a sticker (from giphy) to the page.   
1. The user should be able to enter a search term or tag to determine what kind of sticker they get.
1. Stretch: The user should be able to see at least three stickers from giphy and choose which one they'd like to add.  

**Dragging**
1. A user should be able to drag stickers around over the "dance floor" background.

**Background**
1. A user should be able select one of a list of 2-3 background images.
1. Stretch: The user should be able to enter the URL for whatever background image they want!

**Sound**
1. The user should be able to toggle fun audio on or off!  
1. Stretch: The user should be able to select from a few preloaded audio tracks.


## Tips / Suggested Approach

Here are some tips you may find useful for key steps during this project!

### Decide user stories and draw wireframes

If you're following the user stories above, you probably only need one page. Draw out what that page will look like, including all of the controls that will be available to the user.   Are there forms or other modals that might appear and disappear?

You could even make a simple paper prototype to experiment with how the user can interact with stickers, but don't spend too long on this step!

<img src="http://www.sabazaidi.com/img/ethny-prototype.png" width="50%">  

<sup>image from Saba Zaidi at http://www.sabazaidi.com/ethny.php</sup>


### Explore the <a href="https://github.com/Giphy/GiphyAPI#giphy-sticker-api" >giphy sticker api</a>

1. Before you start to code, use your browser or Postman to make some test calls to the sticker api. You should figure out the structure of the url to send and explore the structure of the data you get back.
1. Decide what parts of the data you'll want to use to fill out your wireframe. Hint: You'll definitely want something from the `images` section of each gif! :D

### Basic Project Setup

1. Create a project directory and tie it to a github repo before you start to code!
1. You'll need an `index.html` and an `app.js` to get started.
1. Use `script` tags to include AngularJS and your `app.js` in `index.html`.
1. Define your app in `app.js` and include it in your `index.html` using `ng-app="yourAppName"`.
1. Start up a `budo` server and go to the page in your browser. Check back frequently to see if there are errors or to confirm that the page is still working!
1. Create your first controller. Create a sanity check variable on your controller to check that everything is connected properly. You may use a separate controller file if you prefer, or keep your controller(s) in `app.js`.

<img src="http://www.thisiscolossal.com/wp-content/uploads/2014/09/amish.gif" width="50%">

### Implement Wireframes with Dummy Data

1. Create the `index.html` view code you need to match your wireframes.
1. Spend a little time on styling, but don't worry about getting everything perfect at the beginning. This is a good time to add the user controls you'll need and a background image.
1. Create the `vm` variables you'll need to make your view work!
1. For variables with data, supply dummy data and test that it shows up correctly on the page.


### Tie User Input to the Giphy API

1. Create a form where the user can input the "tag" or search term for the gif they'd like to see.
1. Use `ng-model` to connect individual form inputs to your controller and `ng-submit` to handle submitting the form.
1. Add validation if you'd like, so the user can't submit a blank tag.  (Or skip this if you want the user to be able to get a gif without supplying a tag. It's up to you! Just think about what happens to your API call if the field is blank.)
1. Use `ngResource` to send the user's tag to the giphy api.
1. Based on your prior investigation of the response format, set a variable or variables in the `vm` to store the parts of the giphy API response that you want to use on the page.


### Add Dragging

Placing gifs on the page is an essential part of this app's minimal scope, so get it working early!

1. Include an external `draggable` directive in your project.  The <a href="https://docs.angularjs.org/guide/directive" >Angular Directives guide</a> has a simple draggable implementation (CMD+F draggable), or you could search for a more full-featured one.  Check out a demo of any draggable you consider to make sure it behaves the way you want!
1. If the draggable you find suggests installing with bower, you can either install bower, or copy the source code directly into your project. If you copy the source code, add a comment that gives credit to the creator and a link to their site!
1. Remember to add a dependency to your `draggable` module in your application with `angular.module('yourAppName', ['draggable']);`.  
1. Read the module's docs (or check out the demo code) to see how to incorporate it into your html.
1. Grab one gif from the api results you explored earlier and use it to test out dragging on your page.


### Add Sound

1. Include an external `ngAudio` directive in your project. Hint: One possibility is <a href="http://stackoverflow.com/a/17624543" >this simple directive from StackOverflow user narced133</a>. Remember to add a comment with the source of your external directives!
1. Incorporate the audio directive into your html with an example sound.
1. Modify your html so that the sound loops. Reference MDN's <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio" >HTML5 `<audio>` docs</a>.
1. Find a few sounds you like. You need the url of the sound online, so you're looking for urls that end in, for example, `.ogg` or `.wav`. One potential resource is <a href="http://www.findsounds.com/" >http://www.findsounds.com/</a>.  Try searching "loop" to find sounds that loop well!

<img src="http://www.reactiongifs.com/wp-content/uploads/2012/10/boombox-boogie.gif" width ="20%">

### Cache Data

"Caching" data just means saving data for later, when you already know you'll need it later. This concept is essential in areas from advanced recursive algorithms to speeding up websites.  

Often, websites cache data for a certain amount of time. If the data is older than, say, 30 minutes, they'll make a new API call. If the data is new enough, they'll just show previous results.  This wouldn't work as well for realtime sites like twitter.  Caching works best when data doesn't update very frequently, because you can save the time it would take to make an API request. When data doesn't update much (like giphy's stickers), caching api results for user searches will make the app faster and smoother to use!

So, how do we save data for later? Sometimes, you'll store it in your database. There are also shorter-term storage options like localStorage and Redis.

> Note: `localStorage` is available in your browser. It lets you keep data around even after the page refreshes! We talked about `localStorage` very early on in the class, and there are angular modules avaialble to use it. If you get excited about this project and want to, you could store API data in `localStorage` with an external angular module. Redis is a very popular in-memory key value store (another somewhat similar tool is memcached).  Data in Redis lasts longer than in localStorage but not as long as an always-on remote database. It's a cool tool, but not within the scope of the weekend project.

1. **Anyway**, you can start by creating a variable to store the user's previous search terms and the giphy API results you got back.  You could do this directly in yoru controller or in a service.  You might call it `cache` or `giphyCache`, etc.
1. Think about what data type this variable should be, to let you store the search terms associated with the results, and look them up quickly if the user does the same search again.
1. Change your code so that when the user submits a search term, you check whether that term is already in your cache. If it is in the cache, use the cached results instead of making a new API call!
