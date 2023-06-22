import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import missionsReducer, { fetchMissions, joinMission, leaveMission } from '../redux/missions/missionsSlice';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('MissionsSlice', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      missions: [],
      loading: 'idle',
    });
  });

  it('should fetch missions and update state correctly', async () => {
    await store.dispatch(fetchMissions());

    const actions = store.getActions();
    expect(actions[0].type).toEqual('missions/fetchMissions/pending');
    expect(actions[1].type).toEqual('missions/fetchMissions/rejected');
  });

  it('should mark a mission as reserved when joining', () => {
    const initialState = {
      missions: [
        {
          id: 1, name: 'Mission 1', description: 'Mission 1 description', reserved: false,
        },
      ],
      loading: 'idle',
    };

    const action = joinMission(1);
    const newState = missionsReducer(initialState, action);

    const expectedState = {
      missions: [
        {
          id: 1, name: 'Mission 1', description: 'Mission 1 description', reserved: true,
        },
      ],
      loading: 'idle',
    };

    expect(newState).toEqual(expectedState);
  });

  it('should mark a mission as not reserved when leaving', () => {
    const initialState = {
      missions: [
        {
          id: 1, name: 'Mission 1', description: 'Mission 1 description', reserved: true,
        },
      ],
      loading: 'idle',
    };

    const action = leaveMission(1);
    const newState = missionsReducer(initialState, action);

    const expectedState = {
      missions: [
        {
          id: 1, name: 'Mission 1', description: 'Mission 1 description', reserved: false,
        },
      ],
      loading: 'idle',
    };

    expect(newState).toEqual(expectedState);
  });
});
