import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import DragonProfile from '../DragonProfile';
import '@testing-library/jest-dom';
import store from '../../redux/configureStore';

const mockData = {
  dragons: 'MockRocket',
};

describe('Testing page deployment', () => {
  test('Mission components matches snapshot', () => {
    const tree = render(
      <Provider store={store}>
        <table>
          <tbody>
            <DragonProfile props={mockData} />
          </tbody>
        </table>
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});