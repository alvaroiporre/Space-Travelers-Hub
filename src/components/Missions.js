import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissions, selectMission } from '../redux/missions/missionsSlice';

const Missions = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions.missions);
  const status = useSelector((state) => state.missions.status);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchMissions());
    }
  }, [dispatch, status]);

  useEffect(() => {
    if (missions !== undefined) {
      dispatch(selectMission(missions[0]));
    }
  }, [dispatch, missions]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Failed to load mission data</div>;
  }

  return (
    <section className="rocket-container">
      <ul className="rocket-list flex">
        {
        missions !== undefined
          ? missions.map((mission) => (
            <li key={mission.id}>
              <div className="rocket-textBox flex">
                <h3 className="rocket-name">{mission.name}</h3>
                <p className="rocket-description">{mission.description}</p>
                <button type="button" className="reserveBttn">Reserve Mission</button>
              </div>
            </li>
          )) : <div>Loading...</div>
}
      </ul>
    </section>
  );
};

export default Missions;
