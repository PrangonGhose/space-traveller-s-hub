/* eslint-disable react/prop-types */
import React from 'react';

const DragonProfile = (props) => {
  const { dragons } = props;
  const dragonName = dragons.name;

  return (
    <tr>
      <td>{dragonName}</td>
    </tr>
  );
};

export default DragonProfile;
