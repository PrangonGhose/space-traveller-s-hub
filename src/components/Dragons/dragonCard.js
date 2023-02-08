import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { reserveDragon } from '../../redux/Dragon/Dragon';

const DragonCard = (props) => {
  const {
    id, name, type, description, flickrImage, reserved,
  } = props;

  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(reserveDragon(id));
  };

  return (
    <div>
      <li>
        <img src={flickrImage} alt="Dragon 1" width="250" height="250" />
        <div>
          <h2>{name}</h2>
          <h3>
            Type:
            {type}
          </h3>
          <div>
            <span className={reserved ? 'active' : 'inactive'}>
              reserved
            </span>
            <p>{description}</p>
          </div>
          <button type="button" id={id} onClick={onClick} className={reserved ? 'reserve' : 'cancel'}>{reserved ? 'Cancel Reservation' : 'Reserve Rocket'}</button>
        </div>
      </li>
    </div>
  );
};

export default DragonCard;

DragonCard.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
  flickrImage: PropTypes.string.isRequired,
};
