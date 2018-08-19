import React from 'react';
import { shallow } from 'enzyme';
import Score from '../index';
import Wrapper from '../Wrapper';
import Button from '../../Button';

describe('<Score />', () => {
  let props;
  let children;
  let renderedScore;

  const score = () => {
    if (!renderedScore) {
      renderedScore = shallow(<Score {...props}>{children}</Score>);
    }

    return renderedScore;
  };

  beforeEach(() => {
    props = {
      score: {},
      turn: 1,
    };
    children = undefined;
    renderedScore = undefined;
  });

  it('should render an <Wrapper> component', () => {
    expect(score().type()).toEqual(Wrapper);
  });

  it('should render scores correctly', () => {
    props.score = {
      1: 10,
      2: 8,
    };

    expect(score()
      .find({ type: 'x' })
      .parents(Button)
      .contains(10)).toBe(true);
    expect(score()
      .find({ type: 'o' })
      .parents(Button)
      .contains(8)).toBe(true);
  });

  it('should highlight x turn', () => {
    props.turn = 1;

    expect(score()
      .find({ type: 'x' })
      .parents(Button)
      .first()
      .prop('highlight')).toBe(true);
  });

  it('should highlight o turn', () => {
    props.turn = 2;

    expect(score()
      .find({ type: 'o' })
      .parents(Button)
      .first()
      .prop('highlight')).toBe(true);
  });
});
