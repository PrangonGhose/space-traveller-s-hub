import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import Mission from '../Mission';
import '@testing-library/jest-dom';
import store from '../../redux/configureStore';

const mockData = {
  missionId: 'randomID',
  missionName: 'randomName',
  description: 'randomDescription',
  member: false,
};

describe('Testing page deployment', () => {
  test('Mission components matches snapshot', () => {
    const tree = render(
      <Provider store={store}>
        <table>
          <tbody>
            <Mission props={mockData} />
          </tbody>
        </table>
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
