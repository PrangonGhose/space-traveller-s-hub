/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateMember } from '../redux/mission/mission';

const Mission = (props) => {
  const { mission } = props;
  const missionId = mission.mission_id;
  const missionName = mission.mission_name;
  const {
    description, member,
  } = mission;
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
