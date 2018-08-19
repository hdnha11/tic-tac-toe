import React from 'react';
import { shallow } from 'enzyme';
import Mark from '../index';

describe('<Mark />', () => {
  let props;
  let children;
  let renderedMark;

  const mark = () => {
    if (!renderedMark) {
      renderedMark = shallow(<Mark {...props}>{children}</Mark>);
    }

    return renderedMark;
  };

  beforeEach(() => {
    props = {
      type: undefined,
      size: undefined,
      color: undefined,
    };
    children = undefined;
    renderedMark = undefined;
  });

  it('should not render anything by default', () => {
    expect(mark().type()).toBe(null);
  });

  it('should render an <svg> tag if type was provided', () => {
    props.type = 'o';

    expect(mark().type()).toEqual('svg');
    expect(mark()
      .find('Mark__Path')
      .first()
      .prop('type')).toEqual('o');
  });

  it('should render with default size', () => {
    props.type = 'x';

    expect(mark()
      .find('svg')
      .first()
      .prop('width')).toEqual('48px');
    expect(mark()
      .find('svg')
      .first()
      .prop('height')).toEqual('48px');
  });

  it('should render with custom size', () => {
    props.type = 'x';
    props.size = '10px';

    expect(mark()
      .find('svg')
      .first()
      .prop('width')).toEqual(props.size);
    expect(mark()
      .find('svg')
      .first()
      .prop('height')).toEqual(props.size);
  });

  it('should render with custom color', () => {
    props.type = 'x';
    props.color = 'red';

    expect(mark()
      .find('Mark__Path')
      .first()
      .prop('color')).toEqual(props.color);
  });
});
