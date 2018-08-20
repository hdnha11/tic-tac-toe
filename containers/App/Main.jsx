import styled from 'styled-components';

const Main = styled.main`
  width: 100vw;
  height: 100vh;
  background-color: ${props => props.theme.primaryColor};
  text-align: center;
  overflow: hidden;
`;

export default Main;
