import { applyMiddleware, configureStore } from '@reduxjs/toolkit';
import dragonReducer from './Dragon/Dragon';
import missionReducer from './mission/mission';
import RocketsReducer from './Rocket/Rocket';

const rootReducer = {
  mission: missionReducer,
  dragon: dragonReducer,
  Rockets: RocketsReducer,
};

const store = configureStore({ reducer: rootReducer }, applyMiddleware());

export default store;
