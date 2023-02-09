import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { updateMember } from '../redux/mission/mission';

const Mission = (props) => {
  const {
    missionId, missionName, description, member,
  } = props;
  const dispatch = useDispatch();
  const [state, setState] = useState({
    member,
    text: '',
    join: '',
  });

  useEffect(() => {
    if (!member) {
      setState({
        text: 'NOT A MEMBER',
        join: 'Join Mission',
      });
    } else {
      setState({
        text: 'ACTIVE MEMBER',
        join: 'Leave Mission',
      });
    }
  }, [member]);

  const handleClick = (id) => {
    dispatch(updateMember(id));
    setState({
      member: !state.member,
    });
  };

  return (
    <tr className="align-middle">
      <td><strong>{missionName}</strong></td>
      <td>{description}</td>
      <td><div className={member ? 'badge text-bg-primary' : 'badge text-bg-secondary'} style={{ display: 'flex', justifyContent: 'center' }}>{state.text}</div></td>
      <td><button type="button" className={member ? 'btn btn-outline-danger btn-sm' : 'btn btn-outline-primary btn-sm'} onClick={() => handleClick(missionId)}>{state.join}</button></td>
    </tr>
  );
};

export default Mission;

Mission.propTypes = {
  missionId: PropTypes.string,
  missionName: PropTypes.string,
  description: PropTypes.string,
  member: PropTypes.bool,
};
Mission.defaultProps = {
  missionId: '',
  missionName: '',
  description: '',
  member: false,
};
