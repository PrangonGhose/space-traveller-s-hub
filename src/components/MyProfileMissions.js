/* eslint-disable react/prop-types */
import React from 'react';

const MyProfileMissions = (props) => {
  const { missions } = props;
  const missionName = missions.mission_name;

  return (
    <tr>
      <td>{missionName}</td>
    </tr>
  );
};

export default MyProfileMissions;
