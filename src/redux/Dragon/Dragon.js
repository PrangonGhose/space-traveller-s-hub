import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const GET_DATA = 'GET_DATA';
const RESERVE_DRAGON = 'RESERVE_DRAGON';
const dragonUrl = 'https://api.spacexdata.com/v4/dragons';

const getDragonApi = createAsyncThunk(GET_DATA,
  () => axios.get(dragonUrl).then((resp) => {
    const dragonData = (resp.data).map((dragon) => (
      {
        id: dragon.id,
        name: dragon.name,
        type: dragon.type,
        description: dragon.description,
        flickrImage: dragon.flickr_image,
        reserved: false,
      }
    ));
    return dragonData;
  }));

const reserveDragon = (id) => (
  {
    type: RESERVE_DRAGON,
    payload: id,
  }
);

const dragonReducer = (state = [], action) => {
  switch (action.type) {
    case `${GET_DATA}/fulfilled`:
      return action.payload;
    case RESERVE_DRAGON:
      return state.map((dragon) => {
        if (dragon.id === action.payload) {
          return {
            ...dragon, reserved: !dragon.reserved,
          };
        } return dragon;
      });
    default:
      return state;
  }
};

export { getDragonApi, reserveDragon };
export default dragonReducer;
