import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissions, selectMission } from '../redux/missions/missionsSlice';
import Mission from './Mission';

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
    <section className="missions-container">
      <ul className="table">
        {
        missions !== undefined
          ? missions.map((mission) => (
            <li key={mission.id} className="row-mission">
              <Mission mission={mission} />
            </li>
          )) : <p>Loading...</p>
}
      </ul>
    </section>
  );
};

export default Missions;
