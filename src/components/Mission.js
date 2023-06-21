import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { joinMission, leaveMission } from '../redux/missions/missionsSlice';

const Mission = ({ mission }) => {
  const dispatch = useDispatch();
  const handleJoin = () => {
    dispatch(joinMission(mission.id));
  };

  const handleLeave = () => {
    dispatch(leaveMission(mission.id));
  };

  return (
    <>
      <h3 className="rocket-name">{mission.name}</h3>
      <p className="rocket-description">{mission.description}</p>
      <p>{mission.reserved ? 'Active Member' : 'NOT A MEMBER'}</p>
      {
        mission.reserved
          ? <button type="button" className="reserveBttn" onClick={handleLeave}>Leave Mission</button>
          : <button type="button" className="reserveBttn" onClick={handleJoin}>Join Mission</button>
      }
    </>
  );
};

Mission.propTypes = {
  mission: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    reserved: PropTypes.bool,
  }).isRequired,
};

export default Mission;
