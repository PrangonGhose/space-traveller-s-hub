import { applyMiddleware, configureStore } from '@reduxjs/toolkit';
import dragonReducer from './Dragon/Dragon';
import missionReducer from './mission/mission';
import rocketsReducer from './Rocket/Rocket';

const rootReducer = {
  mission: missionReducer,
  dragon: dragonReducer,
  rockets: rocketsReducer,
};

const store = configureStore({ reducer: rootReducer }, applyMiddleware());

export default store;
