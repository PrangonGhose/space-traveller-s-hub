import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { ROCKET_RESERVE, OBTAIN_DATA, GET_STORAGE } from '../constants';

const urlRockets = 'https://api.spacexdata.com/v4/rockets';

export const getApiRockets = createAsyncThunk(OBTAIN_DATA,
  () => axios.get(urlRockets).then((response) => {
    const tempData = localStorage.getItem('rockets') || null;
    let storageData;
    // Parsing only data if present in localStorage
    if (tempData) {
      storageData = JSON.parse(tempData);
    } else {
      storageData = [];
    }
    const rocketsArr = [];
    for (let i = 0; i < response.data.length; i += 1) {
      if (storageData.length !== 0) {
        for (let j = 0; j < storageData.length; j += 1) {
          if (storageData[j].id === response.data[i].id) {
            const obj = {
              id: response.data[i].id,
              name: response.data[i].name,
              description: response.data[i].description,
              flickrImage: response.data[i].flickr_images[0],
              reserved: storageData[j].reserved,
            };
            rocketsArr.push(obj);
            break;
          }
        }
      } else {
        const obj = {
          id: response.data[i].id,
          name: response.data[i].name,
          description: response.data[i].description,
          flickrImage: response.data[i].flickr_images[0],
          reserved: false,
        };
        rocketsArr.push(obj);
      }
    }
    if (!tempData) {
      const temp = JSON.stringify(rocketsArr);
      localStorage.setItem('rockets', temp);
    }

    return rocketsArr;
  }));

export const ReserveRocket = (id) => {
  let tempData = localStorage.getItem('rockets');
  const storageData = JSON.parse(tempData);
  for (let i = 0; i < storageData.length; i += 1) {
    if (storageData[i].id === id) {
      storageData[i].reserved = !storageData[i].reserved;
    }
  }
  tempData = JSON.stringify(storageData);
  localStorage.setItem('rockets', tempData);
  return {
    type: ROCKET_RESERVE,
    payload: id,
  };
};

export const getLocalStorage = () => {
  const tempData = localStorage.getItem('rockets') || null;
  let storageData;
  // Parsing only data if present in localStorage
  if (tempData) {
    storageData = JSON.parse(tempData);
  } else {
    storageData = [];
  }
  return {
    type: GET_STORAGE,
    payload: storageData,
  };
};

const rocketsReducer = (state = getLocalStorage().payload, action) => {
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
    case GET_STORAGE:
      return action.payload;
    default:
      return state;
  }
};

export default rocketsReducer;
