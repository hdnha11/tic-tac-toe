import styled from 'styled-components';
import Button from '../../components/Button';

const Footer = styled.footer`
  width: 100%;
  margin-top: 40px;
  display: flex;

  ${Button} {
    flex: 1 1 auto;
    color: ${props => props.theme.primaryColor};
  }
`;

export default Footer;
