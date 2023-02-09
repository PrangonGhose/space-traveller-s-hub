import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import RocketProfile from '../RocketProfile';
import '@testing-library/jest-dom';
import store from '../../redux/configureStore';

const mockData = {
  name: 'MockRocket',
};

describe('Testing page deployment', () => {
  test('Mission components matches snapshot', () => {
    const tree = render(
      <Provider store={store}>
        <table>
          <tbody>
            <RocketProfile props={mockData} />
          </tbody>
        </table>
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});