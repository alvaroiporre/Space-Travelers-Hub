import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchMissions = createAsyncThunk('missions/fetchMissions', async () => {
  const response = await axios.get('https://api.spacexdata.com/v3/missions');
  return response.data;
});

const missionsSlice = createSlice({
  name: 'missions',
  initialState: {
    missions: [],
    selectedMission: null,
    status: 'idle',
    error: null,
  },
  reducers: {
    selectMission: (state, action) => {
      state.selectedMission = action.payload;
    },
    joinMission: (state, action) => {
      const id = action.payload;
      const newState = state.missions.map((mission) => {
        if (mission.id !== id) { return mission; }
        return { ...mission, reserved: true };
      });
      state.missions = newState;
    },
    leaveMission: (state, action) => {
      const id = action.payload;
      const newState = state.missions.map((mission) => {
        if (mission.id !== id) { return mission; }
        return { ...mission, reserved: false };
      });
      state.missions = newState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMissions.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMissions.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.missions = action.payload.map((mission) => ({
          id: mission.mission_id,
          name: mission.mission_name,
          description: mission.description,
        }));
      })
      .addCase(fetchMissions.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { selectMission, joinMission, leaveMission } = missionsSlice.actions;

export default missionsSlice.reducer;
