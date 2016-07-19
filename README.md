# Checkout Demo

This project is a demo application to exercise some common angular patterns


## Getting Started

To get you started you can simply clone the repository and install the dependencies:

### Clone Repo

Clone the repository using [git][git]:

```
git clone https://github.com/jpero09/checkout-demo.git
cd checkout-demo
```

### Install Dependencies

We have two kinds of dependencies in this project: tools and angular framework code.  The tools help
us manage and test the application.

* We get the tools we depend upon via `npm`, the [node package manager][npm].
* We get the angular code via `bower`, a [client-side code package manager][bower].

We have preconfigured `npm` to automatically run `bower` so we can simply do:

```
npm install
```

Behind the scenes this will also call `bower install`.  You should find that you have two new
folders in your project.

* `node_modules` - contains the npm packages for the tools we need
* `client/app/bower_components` - contains the angular framework files

*Note that the `bower_components` folder would normally be installed in the root folder but
this repo changes this location through the `.bowerrc` file.  Putting it in the client folder makes
it easier to serve the files by a webserver.*

### Run the Application

We have preconfigured the project with an `express` web server.  The simplest way to start
this server is:

```
npm start
```

Now browse to the app at `http://localhost:3000`.



## Directory Layout

```
client/
  app/                    --> all of the source files for the application
    app.css               --> default stylesheet
    components/           --> all app specific modules
    layout/               --> all app layout pieces
    view1/                --> the view1 view template and logic
      view1.html            --> the partial template
      view1.js              --> the controller logic
      view1_test.js         --> tests of the controller
    view2/                --> the view2 view template and logic
      view2.html            --> the partial template
      view2.js              --> the controller logic
      view2_test.js         --> tests of the controller
    app.js                --> main application module
    app.routes.js         --> Angular routes
server
  views
    index.html            --> app layout file (the main html template file of the app)
  server.js
karma.conf.js         --> config file for running unit tests with Karma
e2e-tests/            --> end-to-end tests
  protractor-conf.js    --> Protractor config file
  scenarios.js          --> end-to-end scenarios to be run by Protractor
```

## Testing

There are two kinds of tests in the application: Unit tests and end-to-end tests.

### Running Unit Tests

These are written in [Jasmine][jasmine], which are run with the [Karma Test Runner][karma].

* the configuration is found at `karma.conf.js`
* the unit tests are found next to the code they are testing and are named as `..._test.js`.

The easiest way to run the unit tests is to use the supplied npm script:

```
npm test
```

This script will start the Karma test runner to execute the unit tests. Moreover, Karma will sit and
watch the source and test files for changes and then re-run the tests whenever any of them change.
This is the recommended strategy; if your unit tests are being run every time you save a file then
you receive instant feedback on any changes that break the expected code functionality.

You can also ask Karma to do a single run of the tests and then exit.  This is useful if you want to
check that a particular version of the code is operating as expected.  The project contains a
predefined script to do this:

```
npm run test-single-run
```


### End to end testing

The app has end-to-end tests, again written in [Jasmine][jasmine]. These tests
are run with the [Protractor][protractor] End-to-End test runner.  It uses native events and has
special features for Angular applications.

* the configuration is found at `e2e-tests/protractor-conf.js`
* the end-to-end tests are found in `e2e-tests/scenarios.js`

Protractor simulates interaction with our web app and verifies that the application responds
correctly. Therefore, our web server needs to be serving up the application, so that Protractor
can interact with it.

```
npm start
```

In addition, since Protractor is built upon WebDriver we need to install this.  The project comes with a predefined script to do this:

```
npm run update-webdriver
```

This will download and install the latest version of the stand-alone WebDriver tool.

Once you have ensured that the development web server hosting our application is up and running
and WebDriver is updated, you can run the end-to-end tests using the supplied npm script:

```
npm run protractor
```

This script will execute the end-to-end tests against the application being hosted on the
development server.


## Updating Angular

You can update the tool dependencies by running:

```
npm update
```

This will find the latest versions that match the version ranges specified in the `package.json` file.

You can update the Angular dependencies by running:

```
bower update
```

This will find the latest versions that match the version ranges specified in the `bower.json` file.

## References

This project was heavily influenced by several existing projects and guidelines:
  - [John Papa's Angular 1 Guidelines](https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md)
  - [angular-seed app](https://github.com/angular/angular-seed)
  - [zza-node-mongo app](https://github.com/johnpapa/ng-demos/tree/master/zza-node-mongo)

[git]: http://git-scm.com/
[bower]: http://bower.io
[npm]: https://www.npmjs.org/
[node]: http://nodejs.org
[protractor]: https://github.com/angular/protractor
[jasmine]: http://jasmine.github.io
[karma]: http://karma-runner.github.io
