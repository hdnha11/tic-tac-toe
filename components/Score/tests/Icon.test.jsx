import React from 'react';
import { shallow } from 'enzyme';
import Icon from '../Icon';

describe('<Icon />', () => {
  let props;
  let children;
  let renderedIcon;

  const icon = () => {
    if (!renderedIcon) {
      renderedIcon = shallow(<Icon {...props}>{children}</Icon>);
    }

    return renderedIcon;
  };

  beforeEach(() => {
    props = {};
    children = undefined;
    renderedIcon = undefined;
  });

  it('should render an <div> tag', () => {
    expect(icon().type()).toEqual('div');
  });

  it('should render its children', () => {
    children = 'something';

    expect(icon().contains(children)).toBe(true);
  });
});
