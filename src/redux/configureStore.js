import { applyMiddleware, configureStore } from '@reduxjs/toolkit';
import dragonReducer from './Dragon/Dragon';
import missionReducer from './mission/mission';

const rootReducer = {
  mission: missionReducer,
  dragon: dragonReducer,
};

const store = configureStore({ reducer: rootReducer }, applyMiddleware());

export default store;
