import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Display } from './components/Display'
import { render } from '@testing-library/react';

/*
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
*/

test('renders without crashing', () => {
  render(<App />);
});

test('The Title Rendered', () => {
  const { getByTestId } = render(<App />);
  getByTestId(/main-title/i);
});

test('The map out box is here', () => {
  const { getByTestId } = render(<App />);
  getByTestId(/boxforapidate/i);
});

/*
test('Names are maped to app', () => {
  render(<App />);
  const { getByTestId } = render(<Display />);
  getByTestId(/names-are-here/i);
});
*/
//CAN NOT BE DONE AS A UNIT TEST IS AN INGRATION TEST DUE TO FETCH
