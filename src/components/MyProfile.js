import React from 'react';
import { useSelector } from 'react-redux';

const MyProfile = () => {
  const missions = useSelector((state) => state.missions.missions);
  return (
    <section className="my-profile-container">
      <article>
        <h2>My Rockets</h2>
      </article>
      <article>
        <h2>My Missions</h2>
        {
          missions
        && (
        <ul className="missions-reserved">
          {
            missions.map((mission) => (
              mission.reserved && <li key={mission.id}><b>{mission.name}</b></li>
            ))
          }
        </ul>
        )
        }
      </article>
    </section>
  );
};

export default MyProfile;
