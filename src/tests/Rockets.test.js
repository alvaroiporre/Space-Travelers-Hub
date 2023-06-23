import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Rockets from '../components/Rockets';
import '@testing-library/jest-dom/extend-expect';

const mockStore = configureStore([]);

describe('Rockets component', () => {
  it('renders loading state correctly', async () => {
    const initialState = {
      rockets: {
        rockets: [],
        status: 'loading',
      },
    };
    const store = mockStore(initialState);

    const { getByText } = render(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );

    await waitFor(() => {
      const loadingElement = getByText('Loading...');
      expect(loadingElement).toBeInTheDocument();
    });
  });

  it('renders failed state correctly', async () => {
    const initialState = {
      rockets: {
        rockets: [],
        status: 'failed',
      },
    };
    const store = mockStore(initialState);

    const { getByText } = render(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );

    await waitFor(() => {
      const failedElement = getByText('Failed to load rocket data');
      expect(failedElement).toBeInTheDocument();
    });
  });

  it('renders rocket list correctly', async () => {
    const rocketsData = [
      {
        id: '1',
        img: 'rocket1.jpg',
        name: 'Rocket 1',
        description: 'Description of Rocket 1',
        reserved: false,
      },
      {
        id: '2',
        img: 'rocket2.jpg',
        name: 'Rocket 2',
        description: 'Description of Rocket 2',
        reserved: true,
      },
    ];
    const initialState = {
      rockets: {
        rockets: rocketsData,
        status: 'succeeded',
      },
    };
    const store = mockStore(initialState);

    const { getByText } = render(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );

    await waitFor(() => {
      const rocket1Element = getByText('Rocket 1');
      const rocket2Element = getByText('Rocket 2');

      expect(rocket1Element).toBeInTheDocument();
      expect(rocket2Element).toBeInTheDocument();
    });
  });
});
