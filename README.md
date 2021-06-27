# Trending Movies / TV Shows
### React Coding Challenge
Please read through this document before you start


#### General Requirements
Use React to build a “Trending Movies and TV Shows” single page app. It should use existing free movie database API from themoviedb.org.
Route for trending: GET /trending/{media_type}/{time_window}
Route for TV GET /tv/{tv_id}
Route for Movie GET /movie/{movie_id}
The website in general should look like this. It doesn’t have to be pixel perfect. The movies in the list are not fixed, it should display whatever trending movies you get from the movie database API you use.
Share your private project files with us on git project hosting sites like GitHub. You can use any npm packages
Ideally, you should not spend more than 5 hours on this project
Features
Must have:
Displaying a list of trending TV shows
Displaying a list of trending Movies
For each movie or tv show, display the poster, title, user rating, genres.
Click on the poster or the title will navigate user to the movie/show’s IMDB page
Each movie or tv show should have a “Watch Trailer” link that will navigate user to youtube that search for that title’s trailer
Nice to have:
Write all components as react functional components and use React Hooks if you know React Hooks API.
For each tv show, you can add a link to the TV Network that the show is playing. Example: Altered Carbon is playing on Netflix. So the link Playing On: Neflix will nagavite user to https://www.netflix.com/title/80097140
Responsive css styling for mobile user (you can decide how the UI should look like for mobile user)
What we are looking for in this coding challenge
Know how to build a basic React application
Able to learn tools and APIs quickly from reading documentations
Know how to write easy to understand and easy to change code
Able to do clean commits and make meaningful commit messages. (you should make frequent commits that shows how you progress in this project)


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
