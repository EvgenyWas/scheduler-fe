import { combineReducers, configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({});

export const setupStore = () => configureStore({ reducer: rootReducer });

export type TRootState = ReturnType<typeof rootReducer>;
export type TAppStore = ReturnType<typeof setupStore>;
export type TAppDispatch = TAppStore["dispatch"];
