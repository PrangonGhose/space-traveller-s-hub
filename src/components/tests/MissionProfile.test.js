import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import MyProfileMissions from '../MyProfileMissions';
import '@testing-library/jest-dom';
import store from '../../redux/configureStore';

const mockData = {
  mission_name: 'MockRocket',
};

describe('Testing page deployment', () => {
  test('Mission components matches snapshot', () => {
    const tree = render(
      <Provider store={store}>
        <table>
          <tbody>
            <MyProfileMissions props={mockData} />
          </tbody>
        </table>
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});