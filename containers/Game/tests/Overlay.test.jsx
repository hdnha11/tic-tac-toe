import React from 'react';
import { shallow } from 'enzyme';
import Overlay from '../Overlay';

describe('<Overlay />', () => {
  let props;
  let children;
  let renderedOverlay;

  const overlay = () => {
    if (!renderedOverlay) {
      renderedOverlay = shallow(<Overlay {...props}>{children}</Overlay>);
    }

    return renderedOverlay;
  };

  beforeEach(() => {
    props = {};
    children = undefined;
    renderedOverlay = undefined;
  });

  it('should render an <div> tag', () => {
    expect(overlay().type()).toEqual('div');
  });

  it('should render its children', () => {
    children = 'something';

    expect(overlay().contains(children)).toBe(true);
  });
});
