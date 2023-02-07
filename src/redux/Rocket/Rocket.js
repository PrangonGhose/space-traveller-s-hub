import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const OBTAIN_DATA = 'OBTAIN_DATA';
const ROCKET_RESERVE = 'ROCKET_RESERVE';
const urlRockets = 'https://api.spacexdata.com/v4/rockets';

const rocketsReducer = (state = [], action) => {
  switch (action.type) {
    case `${OBTAIN_DATA}/fulfilled`:
      return action.payload;
    case ROCKET_RESERVE:
      return state.map((rocket) => {
        if (rocket.id === action.payload) {
          return {
            ...rocket,
            reserved: !rocket.reserved,
          };
        }
        return rocket;
      });
    default:
      return state;
  }
};

export const getApiRockets = createAsyncThunk(OBTAIN_DATA,
  () => axios.get(urlRockets).then((response) => {
    const rocketsArr = (response.data).map((rocket) => (
      {
        id: rocket.id,
        name: rocket.name,
        description: rocket.description,
        flickrImage: rocket.flickr_images[0],
        reserved: false,
      }
    ));

    return rocketsArr;
  }));

export const ReserveRocket = (id) => (
  {
    type: ROCKET_RESERVE,
    payload: id,
  }
);

export default rocketsReducer;
