import React from 'react';
import { shallow } from 'enzyme';
import Cell from '../Cell';

describe('<Cell />', () => {
  let props;
  let children;
  let renderedCell;

  const cell = () => {
    if (!renderedCell) {
      renderedCell = shallow(<Cell {...props}>{children}</Cell>);
    }

    return renderedCell;
  };

  beforeEach(() => {
    props = {};
    children = undefined;
    renderedCell = undefined;
  });

  it('should render an <td> tag', () => {
    expect(cell().type()).toEqual('td');
  });

  it('should render its children', () => {
    children = 'something';

    expect(cell().contains(children)).toBe(true);
  });
});
