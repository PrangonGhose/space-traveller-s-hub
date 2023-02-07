/* eslint-disable */
import React from 'react';

const MyProfileMissions = (props) => {
  const { missions } = props;
  const { mission_name } = missions;

  return (
    <tr>
      <td>{mission_name}</td>
    </tr>
  )
}

export default MyProfileMissions;
