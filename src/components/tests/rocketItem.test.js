import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import RocketItem from '../MyRockets/rocketItem';
import '@testing-library/jest-dom';
import store from '../../redux/configureStore';

const mockData = {
  id: '1234',
  name: 'MockRocket',
  description: 'MockDescription',
  flickrImage: 'MockURL',
  reserved: false,
};

describe('Testing page deployment', () => {
  test('Mission components matches snapshot', () => {
    const tree = render(
      <Provider store={store}>
        <RocketItem props={mockData} />
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
