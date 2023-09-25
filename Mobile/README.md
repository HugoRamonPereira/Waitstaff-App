## MOBILE VERSION OF THE WAITSTAFF APP

To build the mobile version of the app we used [React Native](https://reactnative.dev/) and we also used [Expo](https://expo.dev/).
We also used [Yarn](https://yarnpkg.com/) as our package manager.

The command to create the initial boilerplate of the application is:

```javasctipt
yarn create expo-app waitstaff expo-template-blank-typescript
```

In order to run our application in development mode we use the command:

```javasctipt
yarn start
```

The command above will execute expo start and we can use the mobile application in our phone, we just have to scan the QR code provided by Expo
when we run the command yarn start:

After scanning the QR vode we can see the app running live in the phone used and the Phone that scans the code must be using the same internet connection that we are using in the computer.

The only dependencies that we are gonna use throughout the project are: [Styled Components](), [React Native SVG]() and also [Expo Font]().

An Observation is that when we install Styled Components in React Native we need the types for Styled Components and also the types for Styled Components React Native:

```javasctipt
yarn add -D @types/styled-components @types/styled-components-react-native
```

and the React Native SVG is gonna be installed using Expo:

```javasctipt
yarn expo install react-native-svg
```
In order to use our custom fonts we will use a dependency called Expo-Fonts:

```javasctipt
yarn expo install expo-font
```

## API COMSUME USING AXIOS

To handle our requests to the backend we are using [Axios](https://axios-http.com/).

The requests to the api are being handled in a file saved in the utils folder named as api.ts.

In this file we abstracted the code that would be repeated across our application that means that we could remove all axios imports because it is being imported only once in the api.ts file.