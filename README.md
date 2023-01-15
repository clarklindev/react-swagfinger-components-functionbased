# Getting Started with Create React App and Redux

#### test url

https://swagfinger-portfolio-react-components-functionbased.vercel.app/

---

#### Project JS

- functional components
- uses hooks
- styled-components
- simplified components (built by developer for developers)

#### CRA

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

- React 18
- new simplified redux using the ReduxToolkit

#### [styled components](https://styled-components.com/)

- has support for theming

#### [styled components modifiers](https://www.npmjs.com/package/styled-components-modifiers)

- has support for style modifiers

# React+ReduxToolkit

- https://redux-toolkit.js.org/introduction/getting-started

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

## Redux Fundamentals, Part 8: Modern Redux with Redux Toolkit

https://redux.js.org/tutorials/fundamentals/part-8-modern-redux

## Typography

https://type-scale.com/

## Component properties

- using configure={} allows stabilizes the properties a component can take in and creates familiarity on structure
- 'configure' we place all properties/functions we want pass to the component in the configure object
- 'data' (can be from async call) should pass to data property.
- 'savedData' is data that we store for this component which is handled outside of the component in state

## updates

2023-01-15

- fixed theme in App.js for dark mode (default) / default mode
- Accordion - rework to decouple Accordion children using render props
- Button
  - moved modifiers outside to its own file (easier to reference)
  - <Icon> children given size (not only to svg)
  - with icon - labelDirection
- Card - added dropshadow example (modifiers="dropshadow")
  - modifiers={Array.isArray(modifiers) ? [...modifiers] : modifiers}
- Input - styling reads from theme
  - child components imported inherit dimensions
- Radio - moved RadioGroup data outside of configure obj
  - data initialized inside useEffect()
- Snackbar - conform to jsx camelCase
- Typography - moved Header sizes into theme
- removed default Counter redux code
- themes moved to utils/themes
