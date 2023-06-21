import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets, selectRocket } from '../redux/rockets/rocketsSlice';
import RocketList from './RocketList';

const Rockets = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets.rockets);
  const status = useSelector((state) => state.rockets.status);

  useEffect(() => {
    const fetchData = async () => {
      if (status === 'idle') {
        await dispatch(fetchRockets());
      }
    };

    fetchData();
  }, [dispatch, status]);

  useEffect(() => {
    if (rockets.length > 0) {
      dispatch(selectRocket(rockets[0]));
    }
  }, [dispatch, rockets]);

  let content;

  if (status === 'loading') {
    content = <div>Loading...</div>;
  } else if (status === 'failed') {
    content = <div>Failed to load rocket data</div>;
  } else {
    content = (
      <section className="rockets-section">
        <ul className="rockets-list">
          {rockets.map((rocket) => (
            <RocketList
              key={rocket.id}
              id={rocket.id}
              img={rocket.img}
              name={rocket.name}
              description={rocket.description}
              reserved={rocket.reserved}
            />
          ))}
        </ul>
      </section>
    );
  }

  return content;
};

export default Rockets;
