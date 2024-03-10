# Submitted By Gil Hsu

Presented to Click on March 11, 2024

# Click Prototyping

Welcome to the Click Prototyping front-end development project.

This skeleton use the [Expo](https://docs.expo.dev/) framework to streamline React Native development and testing.

## Node

You will need [Node.js](https://nodejs.org/en/download/) installed on your machine. Node v14.18.1 was used to create this skeleton. See [Known Errors](#known_errors) for more details.

## Expo

You may need to install the Expo client globally to start the server correctly,

`npm install -g expo-cli`

## Development

The `/project` directory contains the main client component to build upon.

Install dependencies:
`npm install`

To run mobile application:
`npm start`

To run in web:
`npm run web`

## Typescript

This project is setup for Typescript, but if you are not comfortable with Typescript you can still develop in Javascript. Just create `.js` and `.jsx` files as you normally would.

## Final thoughts

Please ignore any git-related files or artifiacts, you do not need to push your code to a remote repository. You can simply re-zip the directory and send it back when you are finished.

Finally, do not hesitate to reach out with any questions or clarifications. Good luck!

<!----><a name="known_errors"></a>

## Known Errors

Node v14.18.1 is the only version of node tested that worked. v12.22.0, v16.0.0, and v18.1.0 were also tested, but the Expo development server encountered an error on launch.

The error encountered when running `npm start` with v12.22.0, v16.0.0, and v18.1.0 was:

> Missing package "metro/src/lib/attachWebsocketServer"

The machine used for testing was a Apple Macbook Pro running OS Monterey v12.4

[nvm](https://github.com/nvm-sh/nvm) can be a useful package to easily switch between node versions.
