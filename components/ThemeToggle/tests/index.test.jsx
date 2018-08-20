import React from 'react';
import { mount } from 'enzyme';
import ThemeToggle from '../index';

describe('<ThemeToggle />', () => {
  let props;
  let children;
  let renderedThemeToggle;

  const themeToggle = () => {
    if (!renderedThemeToggle) {
      renderedThemeToggle = mount(<ThemeToggle {...props}>{children}</ThemeToggle>);
    }

    return renderedThemeToggle;
  };

  beforeEach(() => {
    props = {};
    children = undefined;
    renderedThemeToggle = undefined;
  });

  it('should render an checkbox <input>', () => {
    expect(themeToggle().find('input').length).toEqual(1);
  });

  it('should render an CheckMark', () => {
    expect(themeToggle().find('ThemeToggle__CheckMark').length).toEqual(1);
  });
});
