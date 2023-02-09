/* eslint-disable react/prop-types */
import React from 'react';

const MyProfileMissions = (props) => {
  const { missions } = props;

  return (
    <tr>
      <td>{missions}</td>
    </tr>
  );
};

export default MyProfileMissions;
