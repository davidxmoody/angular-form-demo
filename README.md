## About

This is my submission for a developer test for a job I was considering in early March 2015. The task was to build a simple 3-step survey form. I have decided to leave it up as an example of my work. It should still be viewable at <http://davidxmoody.com/angular-form-demo/>

## Setup

1. Make sure you have Node.js, npm and Git installed
2. Clone and cd into this repository `git clone https://github.com/davidxmoody/angular-form-demo && cd angular-form-demo`
3. Run `npm install` to install dependencies
4. Run `npm start` to build the app and serve it at `http://localhost:8080`

## Technologies used and structure of the project

As per the instructions, I chose to use Angular, Sass and gulp. 

The `src/index.html` file contains the Angular form template. The displaying of each stage is controlled by a "ng-switch" directive. All fields (except feedback) are required and the Submit/Next button is disabled until they have been filled in. Suitable input types have been chosen for each field to make input on mobile devices easier. 

Upon completion of the third stage, the collected JSON data is submitted to <http://requestb.in>. A "Thank you" message and the JSON data is displayed as well as a link to view the submitted data on RequestBin. *Note that the RequestBin URL has since expired and will not work.*

The gulpfile for the project is pretty simple. The JavaScript and HTML files are copied into the `build` directory. The Sass files are processed and then copied. Additionally, the default task will watch for changes and re-process when necessary. It will also start a simple web server. 

The CSS for the project is written with Sass. [normalize.css](http://necolas.github.io/normalize.css/) is also included. 

Each stage transition animates with a side-swipe. This was accomplished with the ngAnimate module and some CSS for the relevant `.ng-enter` and `.ng-leave` states. Additionally, focused fields will have a blue glow and fields which have been touched but are still invalid will have a red glow. 

## Cordova

Before this task, I had no previous experience with Cordova. As this was only a bonus objective, I didn't have time to make things perfect so my implementation is a bit of a hack. Instead of using the existing project structure, the original app is built and then copied into a fresh Cordova template (created with `cordova create`). I have provided the following scripts to semi-automate the process.

```
# Create a Cordova template at './cordova' and add Android as a platform
npm run cordova-setup

# Build the app, copy into the template and run on a connected Android device
npm run cordova-run-android
```

The Cordova generated app seems to work perfectly on my Nexus 5. 

## Time usage and plan

I received the task Friday morning. I was busy Friday but in the evening I refreshed my memory on Angular forms and installed Cordova. I spent all of Saturday on the task. 

Here is how I spent my time (numbers in brackets represent the number of Pomodoro sessions taken, one Pomodoro session is 25 minutes of focused work):

- Set up npm package, gulp build file, Sass preprocessor and index.html template (1)
- Implement basic three stage form with ng-switch (2)
- Add basic Sass styling (2)
- Adjust styling for mobile (1)
- Add form validation (1)
- Tweak styling (1)
- Post to RequestBin (1)
- Add slide animations (2)
- Clean up and comments (1)
- Bundle into Cordova Android app (2)
- Write README.md (2)

Total of 16 Pomodoros. I would say 12 Pomodoros is more representative of a full day's work for me. 

I'm very happy with the end result. The only thing I think it could still use would be a "back" button to access previous stages of the form. I've also noticed that date selection can be awkward in browsers which don't have a date picker interface (e.g. Firefox).

## License

This entire project is licensed under the [MIT License](http://opensource.org/licenses/MIT). Feel free to use it however you wish. 
