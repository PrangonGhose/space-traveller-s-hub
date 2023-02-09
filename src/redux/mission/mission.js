import { createAsyncThunk } from '@reduxjs/toolkit';
import { GET_MISSION, GET_STORAGE, UPDATE_MEMBER } from '../constants';

export const getMissionData = createAsyncThunk(GET_MISSION, async () => {
  const url = 'https://api.spacexdata.com/v3/missions';
  const response = await fetch(url);
  const data = await response.json();
  const tempData = localStorage.getItem('joins') || null;
  let storageData;
  // Parsing only data if present in localStorage
  if (tempData) {
    storageData = JSON.parse(tempData);
  } else {
    storageData = [];
  }
  const missionArray = [];
  for (let i = 0; i < data.length; i += 1) {
    if (storageData.length !== 0) {
      for (let j = 0; j < storageData.length; j += 1) {
        if (storageData[j].mission_id === data[i].mission_id) {
          const obj = {
            mission_id: data[i].mission_id,
            mission_name: data[i].mission_name,
            description: data[i].description,
            member: storageData[j].member,
          };
          missionArray.push(obj);
          break;
        }
      }
    } else {
      const obj = {
        mission_id: data[i].mission_id,
        mission_name: data[i].mission_name,
        description: data[i].description,
        member: false,
      };
      missionArray.push(obj);
    }
  }
  // Avoiding data to localStorage on reload
  if (!tempData) {
    const temp = JSON.stringify(missionArray);
    localStorage.setItem('joins', temp);
  }
  return missionArray;
});

export const updateMember = (id) => {
  let tempData = localStorage.getItem('joins');
  const storageData = JSON.parse(tempData);
  for (let i = 0; i < storageData.length; i += 1) {
    if (storageData[i].mission_id === id) {
      storageData[i].member = !storageData[i].member;
    }
  }
  tempData = JSON.stringify(storageData);
  localStorage.setItem('joins', tempData);
  return {
    type: UPDATE_MEMBER,
    payload: storageData,
  };
};

export const getLocalStorage = () => {
  const tempData = localStorage.getItem('joins') || null;
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

const missionReducer = (state = getLocalStorage().payload, action) => {
  switch (action.type) {
    case `${GET_MISSION}/fulfilled`:
      return action.payload;
    case UPDATE_MEMBER:
      return action.payload;
    case GET_STORAGE:
      return action.payload;
    default:
      return state;
  }
};

export default missionReducer;
