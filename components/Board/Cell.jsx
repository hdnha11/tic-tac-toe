import styled, { css } from 'styled-components';

const Cell = styled.td`
  border: 6px solid ${props => props.theme.borderColor};
  width: 64px;
  height: 64px;
  padding: 8px;
  text-align: center;
  vertical-align: middle;
  line-height: 0;

  ${props =>
    props.highlight &&
    css`
      opacity: 0.15;
    `};
`;

export default Cell;
