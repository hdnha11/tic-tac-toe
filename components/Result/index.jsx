import React from 'react';
import PropTypes from 'prop-types';
import Mark from '../Mark';
import Wrapper from './Wrapper';
import Players from './Players';

const Result = ({ winner, draw }) => (
  <Wrapper>
    <Players>
      {(winner === 1 || draw) && <Mark type="x" size="80px" />}
      {(winner === 2 || draw) && <Mark type="o" size="80px" />}
    </Players>

    {draw && <span>DRAW!</span>}
    {!draw && <span>WINNER!</span>}
  </Wrapper>
);

Result.propTypes = {
  winner: PropTypes.number,
  draw: PropTypes.bool,
};

Result.defaultProps = {
  winner: 0,
  draw: false,
};

export default Result;
