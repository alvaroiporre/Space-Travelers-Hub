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
      <td className="mission-name">{mission.name}</td>
      <td className="mission-description">{mission.description}</td>
      <td className="mission-status">{mission.reserved ? (<p className="active-member">Active Member</p>) : <p className="not-member">NOT A MEMBER</p>}</td>
      <td className="mission-action">
        {
        mission.reserved
          ? <button type="button" className="leaveBtn" onClick={handleLeave}>Leave Mission</button>
          : <button type="button" className="joinBtn" onClick={handleJoin}>Join Mission</button>
      }
      </td>
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
