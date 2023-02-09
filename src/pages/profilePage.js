import { useSelector } from 'react-redux';
import RocketProfile from '../components/RocketProfile';
import MyProfileMissions from '../components/MyProfileMissions';
import DragonProfile from '../components/DragonProfile';

const ProfilePage = () => {
  // Logics for filtering and displaying reserved rockets

  const rocketList = useSelector((state) => state.Rockets);
  const myRockets = rocketList.filter((rocket) => rocket.reserved === true);

  let rocketTable = [];

  if (myRockets.length !== 0) {
    rocketTable = myRockets.map((rocket) => (
      <RocketProfile key={rocket.id} rockets={rocket.name} />
    ));
  } else {
    rocketTable = <tr><td>You do not have any rockets</td></tr>;
  }

  // Logics for filtering and displaying joined missions

  const missionList = useSelector((state) => state.mission);
  const myMissions = missionList.filter((mission) => mission.member === true);

  let tableRow = [];

  if (myMissions.length !== 0) {
    tableRow = myMissions.map((mission) => (
      <MyProfileMissions key={mission.mission_id} missions={mission.mission_name} />
    ));
  } else {
    tableRow = <tr><td>You do not have any missions</td></tr>;
  }

  // Logics for filtering and displaying reserved dragons

  const dragonList = useSelector((state) => state.dragon);
  const myDragons = dragonList.filter((dragon) => dragon.reserved === true);

  let dragonTable = [];

  if (myDragons.length !== 0) {
    dragonTable = myDragons.map((dragon) => (
      <DragonProfile key={dragon.id} dragons={dragon.name} />
    ));
  } else {
    dragonTable = <tr><td>You do not have any dragons</td></tr>;
  }

  return (
    <div className="container-fluid">
      <div className="rocket-list">
        <h2>My Rockets</h2>
        <table className="table table-bordered table-hover">
          <tbody>
            {rocketTable}
          </tbody>
        </table>
      </div>
      <div className="mission-list">
        <h2>My Missions</h2>
        <table className="table table-bordered table-hover">
          <tbody>
            {tableRow}
          </tbody>
        </table>
      </div>
      <div className="dragon-list">
        <h2>My Dragons</h2>
        <table className="table table-bordered table-hover">
          <tbody>
            {dragonTable}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProfilePage;
