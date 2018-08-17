import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import Mark from '../Mark';
import Wrapper from './Wrapper';
import Icon from './Icon';

const Score = ({ score, turn }) => (
  <Wrapper>
    <Button highlight={turn === 1}>
      <Icon>
        <Mark type="x" color="#000000" size="16px" />
      </Icon>
      <span>{score[1]}</span>
    </Button>

    <Button highlight={turn === 2}>
      <Icon>
        <Mark type="o" color="#000000" size="16px" />
      </Icon>
      <span>{score[2]}</span>
    </Button>
  </Wrapper>
);

Score.propTypes = {
  score: PropTypes.object.isRequired,
  turn: PropTypes.number.isRequired,
};

export default Score;
