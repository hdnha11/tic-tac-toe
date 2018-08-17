import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const icons = {
  x:
    'M24,28.0355339 L5.05456352,46.9809704 L0.81192283,42.7383297 L19.7573593,23.7928932 L1.01902961,5.05456352 L5.2616703,0.81192283 L24,19.5502525 L43.2383297,0.31192283 L47.4809704,4.55456352 L28.2426407,23.7928932 L47.6880772,43.2383297 L43.4454365,47.4809704 L24,28.0355339 Z',
  o:
    'M24,48 C10.745166,48 0,37.254834 0,24 C0,10.745166 10.745166,0 24,0 C37.254834,0 48,10.745166 48,24 C48,37.254834 37.254834,48 24,48 Z M24,42 C33.9411255,42 42,33.9411255 42,24 C42,14.0588745 33.9411255,6 24,6 C14.0588745,6 6,14.0588745 6,24 C6,33.9411255 14.0588745,42 24,42 Z',
};

const Path = styled.path`
  fill: ${props => props.color || (props.type === 'x' ? '#545454' : '#f2ebd3')};
`;

const Mark = ({ type, size, color }) => {
  if (!icons[type]) {
    return null;
  }

  return (
    <svg width={size} height={size} viewBox="0 0 48 48">
      <Path type={type} color={color} d={icons[type]} />
    </svg>
  );
};

Mark.propTypes = {
  type: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string,
};

Mark.defaultProps = {
  type: '',
  size: '48px',
  color: '',
};

export default Mark;
