import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissions, selectMission } from '../redux/missions/missionsSlice';

const Missions = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions.missions);
  const status = useSelector((state) => state.rockets.status);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchMissions());
    }
  }, [dispatch, status]);

  useEffect(() => {
    if (missions.length > 0) {
      dispatch(selectMission(missions[0]));
    }
  }, [dispatch, missions]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Failed to load rocket data</div>;
  }

  return (
    <section className="rocket-container">
      <ul className="rocket-list flex">
        {missions.map((mission) => (
          <li key={mission.id}>
            <div className="rocket-textBox flex">
              <h3 className="rocket-name">{mission.name}</h3>
              <p className="rocket-description">{mission.description}</p>
              <button type="button" className="reserveBttn">Reserve Mission</button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Missions;
