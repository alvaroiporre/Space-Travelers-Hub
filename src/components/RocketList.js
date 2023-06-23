import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { reserveRocket, cancelRocketReservation } from '../redux/rockets/rocketsSlice';

const RocketList = ({ rocket }) => {
  const dispatch = useDispatch();

  const handleCancelReservation = () => {
    dispatch(cancelRocketReservation(rocket.id));
  };

  const handleReserveRocket = () => {
    dispatch(reserveRocket(rocket.id));
  };

  return (
    <li>
      <img src={rocket.img} className="rocket-image" alt={rocket.name} />
      <div className="rocket-details">
        <h3 className="rocket-name">{rocket.name}</h3>
        {rocket.reserved ? (
          <>
            <p className="rocket-description">
              <span className="reserved-label">Reserved</span>
              {rocket.description}
            </p>
            <button
              type="button"
              className="cancel-reservation-btn"
              onClick={handleCancelReservation}
            >
              Cancel Reservation
            </button>
          </>
        ) : (
          <>
            <p className="rocket-description">{rocket.description}</p>
            <button
              type="button"
              className="reserve-rocket-btn"
              onClick={handleReserveRocket}
            >
              Reserve Rocket
            </button>
          </>
        )}
      </div>
    </li>
  );
};

RocketList.propTypes = {
  rocket: PropTypes.shape({
    id: PropTypes.string,
    img: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    reserved: PropTypes.bool,
  }).isRequired,
};

export default RocketList;
