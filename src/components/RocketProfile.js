/* eslint-disable react/prop-types */
import React from 'react';

const RocketProfile = (props) => {
  const { rockets } = props;

  return (
    <tr>
      <td>{rockets}</td>
    </tr>
  );
};

export default RocketProfile;
