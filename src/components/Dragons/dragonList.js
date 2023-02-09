import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getDragonApi } from '../../redux/Dragon/Dragon';
import DragonCard from './dragonCard';

const DragonList = () => {
  const dragons = useSelector((state) => state.dragon);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDragonApi());
  }, [dispatch]);

  return (
    <div className="container">
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
    </div>
  );
};

export default DragonList;
