# Coffee Shop

### Powered by SYSCO Consultores Sistemas

Developed by Marco Mesén - [www.marcomesen.com](https://marcomesen.com)

## Start proyect

1. run `yarn install`
2. run `yarn start`
3. create `api.json` file in `src > constants > api.json`
(Look `api.example.json` to get details about the file)
## Tech

- [ReactNative]
- [Expo]
- [Function Components]
- [Hooks]
- [React-Navigation] - Manage the App navigation
- [RN-image-slider-box] - For Image Slider
- Theme was built without any UI Framework

## Architecture

The project was developed thinking in Flux, that doesn't use Redux, but has the some similar things as actions, reducer (useReducer), global state (useContext)

```
-src
---actions           ~ All actions to be dispatcher
---app               ~ Entry point for app and routing
---components        ~ Components for app
---constants         ~ For keep standard
---context           ~ Some Contexts to manage the app
---reducer           ~ Manage the state with useReduce for each context
---screens           ~ Sreens for APP
-----Login           ~ Login
-----Home            ~ Mainly Screen
-----Product         ~ Screen to view products and add them to the cart
-----Cart            ~ Manage the app cart
-----Profile         ~ Shows the orders
---utils             ~ Some utils functions as format number
```

## DEMO

![Demo APP Coffee Shop](./demo/demo_coffeeapp.gif)]

## Assets - Copyrigth

[Vector de Fondo creado por coolvector - www.freepik.es](https://www.freepik.es/vectores/fondo)
