# **REA group assignment**

Below are the few instructions and information in relation to the Rea group assignment.

## `Tools/Language Used:`
_Typescript,
Babel,
NPM,
Jest,
Webpack_

## `To Run the project`

_**npm run start**- To run the development server on local_

_**npm run build:dev**- To build package for the development environment_

_**npm run build:prod**- To build package for the preprod/prod environment_

_**npm run test**- To run the unit test cases_


### Ideation and complexities

The logic was pretty straightforward to bind the click event on dynamically generated button and keep mutating the two arrays based on events.

The main bottle-neck and loop-hole was to avoid recursive loops between event binding and rendering the template again. Hence, a flag inserted from event binding method.


### Improvements

Usage of css pre-processor

The unit test cases can be more extensive, and the pre-commit hook can be added to run the unit test cases before creating artifacts.

The whole application can be made  easier by using any framework or library but, I wanted to avoid inflating the application by adding a framework or library in the build artifact.


