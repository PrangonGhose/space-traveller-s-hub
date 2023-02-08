// import React from 'react';
// import { useSelector } from 'react-redux';
// import RocketProfile from './RocketProfile';

// const MyProfile = () => {
//   const rockets = useSelector((state) => state.Rockets);
//   return (
//     <div>
//       <div>
//         <div>
//           <h1>My Missions</h1>
//         </div>
//         <div>
//           <h1>My rockets</h1>

//           {rockets.filter((item) => item.reserved === true).length === 0 ? (
//             <h2>No rockets reserved</h2>)
//             : (
//               <ul>
//                 {rockets.filter((item) => item.reserved === true).map((rocket) => {
//                   const {
//                     name, id,
//                   } = rocket;

//                   return (
//                     <RocketProfile
//                       key={id}
//                       name={name}
//                     />
//                   );
//                 })}
//               </ul>
//             )}

//         </div>
//       </div>
//     </div>

//   );
// };

// export default MyProfile;
