import React from 'react';
import { shallow } from 'enzyme';
import Footer from '../Footer';

describe('<Footer />', () => {
  let props;
  let children;
  let renderedFooter;

  const footer = () => {
    if (!renderedFooter) {
      renderedFooter = shallow(<Footer {...props}>{children}</Footer>);
    }

    return renderedFooter;
  };

  beforeEach(() => {
    props = {};
    children = undefined;
    renderedFooter = undefined;
  });

  it('should render an <footer> tag', () => {
    expect(footer().type()).toEqual('footer');
  });

  it('should render its children', () => {
    children = 'something';

    expect(footer().contains(children)).toBe(true);
  });
});
