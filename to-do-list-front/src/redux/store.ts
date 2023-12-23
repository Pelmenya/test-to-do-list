import logger from 'redux-logger';
import { configureStore } from '@reduxjs/toolkit';
import { toDoListApi } from '../api/to-do-list.ts/to-do-list';





const isDev = process.env.NODE_ENV !== 'production';
const middlewares = isDev && typeof window === 'object' ? [logger] : [];

export const store = configureStore({
    reducer: {
        [toDoListApi.reducerPath]: toDoListApi.reducer,
    },
    middleware: (gDM) => gDM().concat([
        ...middlewares, 
        toDoListApi.middleware
    ]),
    devTools: true,
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch