import React from 'react';
import styled from 'styled-components';

const CheckBox = styled.input.attrs({ type: 'checkbox' })`
  position: absolute;
  opacity: 0;
  cursor: pointer;
`;

const CheckMark = styled.span`
  display: inline-block;
  border: 1px solid #fefefe;
  border-radius: 40px;
  padding: 10px 20px;
  color: #fefefe;

  &::before {
    content: 'Dark Theme';
  }
`;

const Label = styled.label`
  display: inline-block;
  position: relative;
  text-align: center;
  user-select: none;
  cursor: pointer;

  ${CheckBox}:checked ~ ${CheckMark} {
    &::before {
      content: 'Light Theme';
    }
  }
`;

const ThemeToggle = ({ ...rest }) => (
  <Label>
    <CheckBox {...rest} />
    <CheckMark />
  </Label>
);

export default ThemeToggle;
