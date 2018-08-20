import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
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
    props = {
      highlight: undefined,
    };
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

  it('should handle highlight prop', () => {
    props.highlight = true;
    const tree = renderer.create(cell().get(0)).toJSON();

    expect(tree).toHaveStyleRule('opacity', '0.15');
  });
});
