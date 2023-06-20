import { configureStore } from '@reduxjs/toolkit';
import rocketsReducer from './rockets/rocketsSlice';
import missionsReducer from './missions/missionsSlice';

export default configureStore({
  reducer: {
    rockets: rocketsReducer,
    missions: missionsReducer,
  },
});
