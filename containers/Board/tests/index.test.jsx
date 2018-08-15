import React from 'react';
import { mount } from 'enzyme';
import { BoardContainer } from '../index';
import Board from '../../../components/Board';

describe('<BoardContainer />', () => {
  let props;
  let children;
  let renderedBoardContainer;

  const boardContainer = () => {
    if (!renderedBoardContainer) {
      renderedBoardContainer = mount(<BoardContainer {...props}>{children}</BoardContainer>);
    }

    return renderedBoardContainer;
  };

  beforeEach(() => {
    props = {
      rows: undefined,
      move: jest.fn(),
    };
    children = undefined;
    renderedBoardContainer = undefined;
  });

  it('should render an Board component', () => {
    expect(boardContainer().find(Board).length).toEqual(1);
  });
});
