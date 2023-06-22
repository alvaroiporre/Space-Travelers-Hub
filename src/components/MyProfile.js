import React from 'react';
import { useSelector } from 'react-redux';

const MyProfile = () => {
  const missions = useSelector((state) => state.missions.missions);
  const rockets = useSelector((state) => state.rockets.rockets);

  const reservedMissions = missions.filter((mission) => mission.reserved);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved);

  return (
    <section className="my-profile-container">
      <article>
        <h2>My Missions</h2>
        {reservedMissions.length > 0 ? (
          <ul className="missions-reserved">
            {reservedMissions.map((mission) => (
              <li key={mission.id}><b>{mission.name}</b></li>
            ))}
          </ul>
        ) : (
          <p>No missions reserved</p>
        )}
      </article>
      <article>
        <h2>My Rockets</h2>
        {reservedRockets.length > 0 ? (
          <ul className="rockets-reserved">
            {reservedRockets.map((rocket) => (
              <li key={rocket.id}><b>{rocket.name}</b></li>
            ))}
          </ul>
        ) : (
          <p>No rockets reserved</p>
        )}
      </article>
    </section>
  );
};

export default MyProfile;
