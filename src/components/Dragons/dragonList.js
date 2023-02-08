import React from 'react';
import { useSelector } from 'react-redux';
import DragonCard from './dragonCard';

const DragonList = () => {
  const dragons = useSelector((state) => state.dragon);

  return (
    <div className="container">
      <ul className="rocketlist" id="flex">
        {dragons.map((dragon) => {
          const {
            id, name, type, description, flickrImage, reserved,
          } = dragon;

          return (
            <DragonCard
              key={id}
              id={id}
              name={name}
              type={type}
              description={description}
              flickrImage={flickrImage}
              reserved={reserved}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default DragonList;
