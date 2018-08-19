import styled from 'styled-components';

const Cell = styled.td`
  border: 6px solid ${props => props.theme.borderColor};
  width: 64px;
  height: 64px;
  padding: 8px;
  text-align: center;
  vertical-align: middle;
  line-height: 0;
`;

export default Cell;
