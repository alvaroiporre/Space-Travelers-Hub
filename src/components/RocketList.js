import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { reserveRocket, cancelRocketReservation } from '../redux/rockets/rocketsSlice';

const RocketList = ({
  img, id, name, description, reserved,
}) => {
  const dispatch = useDispatch();

  const handleCancelReservation = () => {
    dispatch(cancelRocketReservation(id));
  };

  const handleReserveRocket = () => {
    dispatch(reserveRocket(id));
  };

  return (
    <li>
      <img src={img} className="rocket-image" alt={name} />
      <div className="rocket-details">
        <h3 className="rocket-name">{name}</h3>
        {reserved ? (
          <>
            <p className="rocket-description">
              <span className="reserved-label">Reserved</span>
              {description}
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
            <p className="rocket-description">{description}</p>
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
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};

export default RocketList;
