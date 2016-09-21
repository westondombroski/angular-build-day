# <img src="https://cloud.githubusercontent.com/assets/7833470/10423298/ea833a68-7079-11e5-84f8-0a925ab96893.png" width="60"> Angular Blog

<img src="https://media.giphy.com/media/xpxtdcSjOIUSI/giphy.gif">

Your goal is to implement an AngularJS blog to capture users' collective thoughts!

This app focuses on:

* full stack MEAN

## Suggested User Stories

**Lists of Posts**
1. A user should be able to see everyone's posts.
1. Stretch: The user should be able to see a shortened "teaser" of each post's content in the list of all posts.
1. Stretch: A user should be able to search posts by words in the title.

**Single Posts**
1. A user should be able to a detailed view of each of the posts.
1. A user should be able to create a post.
1. Stretch: A user should be able to specify some aspect of how their post is displayed - a background image, text color, or perhaps a font.

## Tips / Suggested Approach

Here are some tips you may find useful for key steps during this project!


### Decide user stories and draw wireframes

If you're following the user stories above, you probably need a few different pages. Draw out what each page will look like, including all of the controls that will be available to the user.   Are there forms or other modals that might appear and disappear?

You could even make a simple paper prototype to experiment with, but don't spend too long on this step!

<img src="http://www.sabazaidi.com/img/ethny-prototype.png" width="50%">  

<sup>image from Saba Zaidi at http://www.sabazaidi.com/ethny.php</sup>



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

### Tie User Input to Your API

1. Create a form or forms to capture user input.
1. Use `ng-model` to connect individual form inputs to your controller and `ng-submit` to handle submitting the form.
1. Add validation if you'd like, so the user can't submit a blank form.
1. Create a service that has mock data. Wire up the controller to use your service.


### Server

1. Make sure your server can correctly serve your Angular app's HTML before moving data to your database. 
1. Follow RESTful routing conventions to design your back end's api routes.
1. Review mongoose and express docs as you make your model(s).
1. Update your front-end service with `$resource` to  easily access  your server's RESTful routes.
