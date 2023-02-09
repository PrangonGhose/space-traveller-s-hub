import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Mission from '../components/Mission';
import { getMissionData } from '../redux/mission/mission';

const MissionPage = () => {
  const missionList = useSelector((state) => state.mission);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMissionData());
  }, [dispatch]);

  return (
    <div className="container-fluid">
      <table className="table table-striped table-bordered table-hover">
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {
            missionList.map((mission) => (
              <Mission
                key={mission.mission_id}
                missionId={mission.mission_id}
                missionName={mission.mission_name}
                description={mission.description}
                member={mission.member}
              />
            ))
          }
        </tbody>
      </table>
    </div>
  );
};

export default MissionPage;
