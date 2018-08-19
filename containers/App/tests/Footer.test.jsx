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

  it('should contain my github link', () => {
    expect(footer()
      .find('a')
      .first()
      .prop('href')).toContain('github.com/hdnha11');
  });
});
