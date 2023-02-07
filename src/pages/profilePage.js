import { useSelector } from 'react-redux';
import MyProfileMissions from '../components/MyProfileMissions';

const ProfilePage = () => {
  // Logics for filtering and displaying joined missions

  const missionList = useSelector((state) => state.mission);
  const myMissions = missionList.filter((mission) => mission.member === true);

  let tableRow = [];

  if (myMissions.length !== 0) {
    tableRow = myMissions.map((mission) => (
      <MyProfileMissions key={mission.mission_id} missions={mission} />
    ));
  } else {
    tableRow = <tr><td>You do not have any missions</td></tr>;
  }

  return (
    <div className="container-fluid">
      <div className="mission-list">
        <h2>My Missions</h2>
        <table className="table table-bordered table-hover">
          <tbody>
            {tableRow}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProfilePage;
