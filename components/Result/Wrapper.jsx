import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 252px;
  color: ${props => props.theme.resultTextColor};
  font-size: 2.125rem;
  font-weight: 700;
`;

export default Wrapper;
