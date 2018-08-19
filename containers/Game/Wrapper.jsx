import styled from 'styled-components';

const Wrapper = styled.section`
  max-width: ${props => props.theme.maxContentWidth}px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 20px;

  @media (max-width: ${props => props.theme.xxs}px) {
    padding: 40px 10px;
  }
`;

export default Wrapper;

