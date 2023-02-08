import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getApiRockets } from '../../redux/Rocket/Rocket';
import RocketItem from './rocketItem';

const RocketsList = () => {
  const rockets = useSelector((state) => state.Rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getApiRockets());
  }, [dispatch]);

  return (
    <div className="container p-3">
      <ul className="listRockets" id="flex">
        {rockets.map((rocket) => {
          const {
            id, name, description, flickrImage, reserved,
          } = rocket;

          return (
            <RocketItem
              key={id}
              id={id}
              name={name}
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

export default RocketsList;
