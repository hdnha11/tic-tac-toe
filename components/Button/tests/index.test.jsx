import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import Button from '../index';

describe('<Button />', () => {
  let props;
  let children;
  let renderedButton;

  const button = () => {
    if (!renderedButton) {
      renderedButton = shallow(<Button {...props}>{children}</Button>);
    }

    return renderedButton;
  };

  beforeEach(() => {
    props = {
      big: undefined,
      onClick: undefined,
    };
    children = undefined;
    renderedButton = undefined;
  });

  it('should render an <button> tag', () => {
    expect(button().type()).toEqual('button');
  });

  it('should render its children', () => {
    children = 'Text';

    expect(button().contains(children)).toBe(true);
  });

  it('should render default button by default', () => {
    const tree = renderer.create(button().get(0)).toJSON();

    expect(tree).toHaveStyleRule('padding', '10px 20px');
    expect(tree).toHaveStyleRule('cursor', 'default');
  });

  it('should render big button if big prop was passed', () => {
    props.big = true;
    const tree = renderer.create(button().get(0)).toJSON();

    expect(tree).toHaveStyleRule('padding', '15px 20px');
  });

  it('should render with pointer cursor if onClick prop was passed', () => {
    props.onClick = jest.fn();
    const tree = renderer.create(button().get(0)).toJSON();

    expect(tree).toHaveStyleRule('cursor', 'pointer');
  });
});
