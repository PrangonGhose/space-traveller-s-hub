/* eslint-disable react/prop-types */
import React from 'react';

const RocketProfile = (props) => {
  const { rockets } = props;
  const rocketName = rockets.name;

  return (
    <tr>
      <td>{rocketName}</td>
    </tr>
  );
};

export default RocketProfile;
