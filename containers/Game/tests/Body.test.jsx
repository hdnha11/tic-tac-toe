import React from 'react';
import { shallow } from 'enzyme';
import Body from '../Body';

describe('<Body />', () => {
  let props;
  let children;
  let renderedBody;

  const body = () => {
    if (!renderedBody) {
      renderedBody = shallow(<Body {...props}>{children}</Body>);
    }

    return renderedBody;
  };

  beforeEach(() => {
    props = {};
    children = undefined;
    renderedBody = undefined;
  });

  it('should render an <section> tag', () => {
    expect(body().type()).toEqual('section');
  });

  it('should render its children', () => {
    children = 'something';

    expect(body().contains(children)).toBe(true);
  });
});
