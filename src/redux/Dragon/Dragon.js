import { createAsyncThunk } from '@reduxjs/toolkit';
import { GET_DATA, RESERVE_DRAGON, GET_STORAGE } from '../constants';

const dragonUrl = 'https://api.spacexdata.com/v4/dragons';

const getDragonApi = createAsyncThunk(GET_DATA,
  () => fetch(dragonUrl).then((resp) => {
    const tempData = localStorage.getItem('dragons') || null;
    let storageData;
    if (tempData) {
      storageData = JSON.parse(tempData);
    } else {
      storageData = [];
    }
    const dragonsArr = [];
    for (let i = 0; i < resp.data.length; i += 1) {
      if (storageData.length !== 0) {
        for (let j = 0; j < storageData.length; j += 1) {
          if (storageData[j].id === resp.data[i].id) {
            const obj = {
              id: resp.data[i].id,
              name: resp.data[i].name,
              type: resp.data[i].type,
              description: resp.data[i].description,
              flickrImage: resp.data[i].flickr_images[0],
              reserved: storageData[j].reserved,
            };
            dragonsArr.push(obj);
            break;
          }
        }
      } else {
        const obj = {
          id: resp.data[i].id,
          name: resp.data[i].name,
          type: resp.data[i].type,
          description: resp.data[i].description,
          flickrImage: resp.data[i].flickr_images[0],
          reserved: false,
        };
        dragonsArr.push(obj);
      }
    }
    if (!tempData) {
      const temp = JSON.stringify(dragonsArr);
      localStorage.setItem('dragons', temp);
    }

    return dragonsArr;
  }));

const reserveDragon = (id) => {
  let tempData = localStorage.getItem('dragons');
  const storageData = JSON.parse(tempData);
  for (let i = 0; i < storageData.length; i += 1) {
    if (storageData[i].id === id) {
      storageData[i].reserved = !storageData[i].reserved;
    }
  }
  tempData = JSON.stringify(storageData);
  localStorage.setItem('dragons', tempData);
  return {
    type: RESERVE_DRAGON,
    payload: id,
  };
};

export const getLocalStorage = () => {
  const tempData = localStorage.getItem('dragons') || null;
  let storageData;
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

const dragonReducer = (state = getLocalStorage().payload, action) => {
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
    case GET_STORAGE:
      return action.payload;
    default:
      return state;
  }
};

export { getDragonApi, reserveDragon };
export default dragonReducer;
