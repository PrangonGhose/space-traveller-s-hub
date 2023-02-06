import { createAsyncThunk } from '@reduxjs/toolkit';
import { GET_MISSION } from '../constants';

export const getMissionData = createAsyncThunk(GET_MISSION, async () => {
  const url = 'https://api.spacexdata.com/v3/missions';
  const response = await fetch(url);
  const data = await response.json();
  const missionArray = data.map((mission) => (
    {
      mission_name: mission.mission_name,
      mission_id: mission.mission_id,
      description: mission.description
    }
  )
  )
  return missionArray;
})

const missionReducer = (state = [], action) => {
  switch (action.type) {
    case `${GET_MISSION}/fulfilled`:
      return [
        ...state,
        action.payload,
      ]
    default:
      return state;
  }
}

export default missionReducer;
