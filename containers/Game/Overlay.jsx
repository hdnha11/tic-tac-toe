import styled from 'styled-components';

const Overlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: ${props => props.theme.overlayBgColor};
`;

export default Overlay;
