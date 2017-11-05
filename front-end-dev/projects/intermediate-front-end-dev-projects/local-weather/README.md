# Local Weather App

This is the app we’ve all done a million times. Scaffolded a simple Express backend using express-generator, and a React frontend with create-react-app. Inside package.json under client, you’ll see the proxy key. That key must match the server, which is specified using PORT=3001 inside package.json under the server directory.

Backend -> Frontend connection based on this excellent blogpost from [Dave Ceddia](https://daveceddia.com/create-react-app-express-backend/).

#### To run:

```
$ cd client
$ yarn start
```

[Original Assignment & User Story Requirements](https://www.freecodecamp.org/challenges/show-the-local-weather)


#### User Stories:
1. I can see the weather in my current location.
2. I can see a different icon or background image depending on the weather.
3. I can push a button to toggle between Fahrenheit & Celcius.

#### Own Requirements:
1. Use React 16 and Redux.
2. Use axios to make API call.
3. Return API call within action.payload, using (Redux Thunk?) to manage asynchronous call.


