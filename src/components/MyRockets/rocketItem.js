/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { ReserveRocket } from '../../redux/Rocket/Rocket';

const RocketItem = (props) => {
  const {
    id, name, description, flickrImage, reserved,
  } = props;

  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(ReserveRocket(id));
  };

  return (
    <div>
      <li className="rockets" id="flex">
        <img className="img" src={flickrImage} alt="rockets" width="280" height="250" />
        <div className="justifyRocket" id="flex">
          <h2>{name}</h2>
          <div id="flex">
            <div>
              <span className={reserved ? 'active1 d-grid align-content-center' : 'inactive'}>
                Reserved
              </span>
            </div>
            <p>{description}</p>
          </div>
          <button type="button" id={id} onClick={onClick} className={reserved ? 'reserve' : 'cancel'}>{reserved ? 'Cancel Reservation' : 'Reserve Rocket'}</button>
        </div>
      </li>
    </div>
  );
};

export default RocketItem;

RocketItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  reserved: PropTypes.bool,
  flickrImage: PropTypes.string,
};

RocketItem.defaultProps = {
  id: '',
  name: '',
  description: '',
  reserved: false,
  flickrImage: '',
};
