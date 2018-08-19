import styled from 'styled-components';

const Button = styled.button`
  margin: 0;
  padding: ${props => (props.big ? '15px' : '10px')} 20px;
  color: rgba(0, 0, 0, 0.54);
  background-color: ${props => props.theme.buttonBgColor};
  font-size: 1rem;
  font-weight: 500;
  min-width: 88px;
  outline: none;
  text-align: center;
  user-select: none;
  white-space: nowrap;
  border: 0;
  border-radius: 2px;
  border-bottom: 2px solid
    ${props => (props.highlight ? props.theme.highlightColor : 'transparent')};
  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.16);
  text-transform: uppercase;
  transition: all 0.25s;
  cursor: ${props => (props.onClick ? 'pointer' : 'default')};
`;

export default Button;
