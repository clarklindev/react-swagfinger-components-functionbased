# Getting Started with Create React App and Redux

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

#### Project JS

- uses hooks
- non class-based functions
- simplified components (built by developer for developers)
- uses Polished package to normalize css

#### CRA

- React 18
- new simplified redux using the ReduxToolkit

#### [styled components](https://styled-components.com/)

- has support for theming

#### [styled components modifiers](https://www.npmjs.com/package/styled-components-modifiers)

- has support for style modifiers

# React+ReduxToolkit

- https://redux-toolkit.js.org/introduction/getting-started

UPDATES:
2022-11-25

## add to existing project

```console
npm install @reduxjs/toolkit
```

## install as CRA project template

```console
 <!-- Redux + Plain JS template -->

npx create-react-app my-app --template redux

 <!-- Redux + TypeScript template -->

npx create-react-app my-app --template redux-typescript
```

## redux toolkit APIs

- configureStore()
- createReducer()
- createAction()
- createSlice()
- createAsyncThunk()
- createEntityAdapter()
- createSelector()

## RTK Query

- an optional addon within the @reduxjs/toolkit package
- used for data fetching and caching - eliminating the need to hand-write data fetching & caching logic yourself.

```js
import { createApi } from '@reduxjs/toolkit/query';

/* React-specific entry point that automatically generates
   hooks corresponding to the defined endpoints */
import { createApi } from '@reduxjs/toolkit/query/react';
```

### RTK Query API

- createApi()
- fetchBaseQuery()
- <ApiProvider />
- setupListeners()

---

## Redux Fundamentals, Part 8: Modern Redux with Redux Toolkit

https://redux.js.org/tutorials/fundamentals/part-8-modern-redux

## Button

#### pros

- uses styled components
- what if you used tailwind?

#### cons

- needs refinement
- required feature: there is no icon+button variation
- when icons are stacked next to each other, outline does not form part of the dimensions (box)
- sometimes a blinking carot for text appears in the button text
