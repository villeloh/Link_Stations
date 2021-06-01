# LinkStations - Automatic Power Calculator

( Bootstrapped with [Create React App](https://github.com/facebook/create-react-app) )

A simple app to calculate which Link Station provides the most power (if any) to a given point (x, y).

The equation that is used for the power calculation is the following:

power = (reach - distance from linkstation)^2\
if distance > reach, power = 0

## View the App

You can view the app at [PLACEHOLDER_ADDRESS](PLACEHOLDER_ADDRESS)

## Run the App locally

For local running, you will first need to install Node.js (latest version should be good; for creation, I used 14.17.0).

With Node installed, you can run the following commands in the project folder (using a terminal on Mac or Linux, or a shell like Git Bash on Windows):

## Available Commands

In the project folder, you can run:

### `npm start`

Runs the app locally in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
(NOTE: the tests are currently not implemented for this app)

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
The app will be ready for deployment.

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).