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
        text: 'YOU ARE A MEMBER',
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
    <tr>
      <td>{missionName}</td>
      <td>{description}</td>
      <td>{state.text}</td>
      <td><button type="button" className="mission-button" onClick={() => handleClick(missionId)}>{state.join}</button></td>
    </tr>
  );
};

export default Mission;
