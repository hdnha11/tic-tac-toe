import React from 'react';
import { shallow } from 'enzyme';
import Result from '../index';
import Wrapper from '../Wrapper';
import Mark from '../../Mark';

describe('<Result />', () => {
  let props;
  let children;
  let renderedResult;

  const result = () => {
    if (!renderedResult) {
      renderedResult = shallow(<Result {...props}>{children}</Result>);
    }

    return renderedResult;
  };

  beforeEach(() => {
    props = {
      winner: undefined,
      draw: undefined,
    };
    children = undefined;
    renderedResult = undefined;
  });

  it('should render an <Wrapper> component', () => {
    expect(result().type()).toEqual(Wrapper);
  });

  it('should render draw result', () => {
    props.draw = true;

    expect(result().find(Mark).length).toEqual(2);
    expect(result()
      .find(Mark)
      .at(0)
      .prop('type')).toEqual('x');
    expect(result()
      .find(Mark)
      .at(1)
      .prop('type')).toEqual('o');
    expect(result().contains('DRAW!')).toBe(true);
  });

  it('should render x winner', () => {
    props.winner = 1;

    expect(result().find(Mark).length).toEqual(1);
    expect(result()
      .find(Mark)
      .first()
      .prop('type')).toEqual('x');
    expect(result().contains('WINNER!')).toBe(true);
  });

  it('should render o winner', () => {
    props.winner = 2;

    expect(result().find(Mark).length).toEqual(1);
    expect(result()
      .find(Mark)
      .first()
      .prop('type')).toEqual('o');
    expect(result().contains('WINNER!')).toBe(true);
  });
});
