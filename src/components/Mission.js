import React from 'react';
import PropTypes from 'prop-types';

const Mission = ({ mission }) => (
  <>
    <h3 className="rocket-name">{mission.name}</h3>
    <p className="rocket-description">{mission.description}</p>
    <p>NOT A MEMBER</p>
    <button type="button" className="reserveBttn">Reserve Mission</button>
  </>
);

Mission.propTypes = {
  mission: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default Mission;
