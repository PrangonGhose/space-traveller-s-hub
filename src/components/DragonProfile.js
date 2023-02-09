/* eslint-disable react/prop-types */
import React from 'react';

const DragonProfile = (props) => {
  const { dragons } = props;

  return (
    <tr>
      <td>{dragons}</td>
    </tr>
  );
};

export default DragonProfile;
