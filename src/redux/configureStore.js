import { applyMiddleware, configureStore } from '@reduxjs/toolkit';
import missionReducer from './mission/mission';

const rootReducer = {
  mission: missionReducer,
};

const store = configureStore({ reducer: rootReducer }, applyMiddleware());

export default store;
