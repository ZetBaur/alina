import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counter-slice';
// import { apiSlice } from '../features/dogs/dogs-api-slice';
import headerSlice from '../features/header/header.slice';

export const store = configureStore({
  reducer: {
    headerSlice,
    // counter: counterReducer,
    // [headerSlice.reducerPath]: headerSlice.reducer,
  },
  //   middleware: (getDefaultMiddleware) => {
  //     return getDefaultMiddleware().concat(apiSlice.middleware);
  //   },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

//minin
// import { configureStore } from '@reduxjs/toolkit';
// import { githubApi } from './github/github.api';
// import { setupListeners } from '@reduxjs/toolkit/query';
// import { githubReducer } from './github/github.slice';

// export const store = configureStore({
//   reducer: {
//     [githubApi.reducerPath]: githubApi.reducer,
//     github: githubReducer,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(githubApi.middleware),
// });

// setupListeners(store.dispatch);

// export type RootState = ReturnType<typeof store.getState>;
