import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import DragonList from '../Dragons/dragonList';
import '@testing-library/jest-dom';
import store from '../../redux/configureStore';

describe('Testing page deployment', () => {
  test('Mission components matches snapshot', () => {
    const tree = render(
      <Provider store={store}>
        <DragonList />
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
