import React from 'react';
import { render } from '@testing-library/react';
// import 'jest-dom/extend-expect'; // add some helpful assertions

import Hi from '../index';

describe('<Hi />', () => {
  it.skip('Should render and match the snapshot', () => {
    expect(true).toMatchSnapshot();
  });
});
