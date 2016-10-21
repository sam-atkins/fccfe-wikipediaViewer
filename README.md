# FreeCodeCamp: Wikipedia Viewer

## Info
**Info on the challenge**

This is a Free Code Camp intermediate front-end challenge. The project must fulfil the below user stories.

**User Stories**

-  I can search Wikipedia entries in a search box and see the resulting Wikipedia entries
-  I can click a button to see a random Wikipedia entry

Further info on the challenge is [here](https://www.freecodecamp.com/challenges/build-a-wikipedia-viewer).


## Status
*Complete*


## Built with:
- HTML
- CSS
- Bootstrap
- Javascript
- jQuery (for the AJAX call only)
- Yeoman to scaffold the project
- Gulp to automate tasks

Source code is located in the [app](https://github.com/cubiio/fccfe-wikipediaViewer/tree/master/app) folder.

## Demo

The demo can be found [here](http://fccwikipediaviewer.surge.sh/), hosted on [surge.sh](https://surge.sh/).

Getting the site live and updating the site is really straightforward:

```
// change directory to the project 
cd wikipediaViewer 

// run gulp to build the site to dist
gulp build

// changed directory to dist
cd dist

// run surge to publish (assumes surge is installed globally) 
surge
```

Alternatively, run `gulp deploy` (making sure there is a build in the `.dist/` folder) with reference to [this](https://github.com/surge-sh/gulp-surge) to use Surge with Gulp.

