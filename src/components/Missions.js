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

      {
        missions !== undefined
          ? (
            <table className="table">
              <tr className="white-row">
                <th>Mission</th>
                <th>Description</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
              {missions.map((mission, i) => (
                <tr key={mission.id} className={i % 2 === 0 ? 'gray-row' : 'white-row'}>
                  <Mission mission={mission} />
                </tr>
              ))}
            </table>
          ) : <p>Loading...</p>
      }

    </section>
  );
};

export default Missions;
