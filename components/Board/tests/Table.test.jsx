import React from 'react';
import { shallow } from 'enzyme';
import Table from '../Table';

describe('<Table />', () => {
  let props;
  let children;
  let renderedTable;

  const table = () => {
    if (!renderedTable) {
      renderedTable = shallow(<Table {...props}>{children}</Table>);
    }

    return renderedTable;
  };

  beforeEach(() => {
    props = {};
    children = undefined;
    renderedTable = undefined;
  });

  it('should render an <table> tag', () => {
    expect(table().type()).toEqual('table');
  });

  it('should render its children', () => {
    children = (
      <tbody>
        <tr>
          <td>something</td>
        </tr>
      </tbody>
    );

    expect(table().contains(children)).toBe(true);
  });
});
