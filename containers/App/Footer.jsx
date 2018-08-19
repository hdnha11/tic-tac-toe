import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.footer`
  position: fixed;
  bottom: 15px;
  width: 100%;
  color: #f5f5f5;
  text-align: center;

  a {
    color: #ffffff;
    font-weight: 500;
  }
`;

const Icon = styled.i`
  color: #ff0000;
  font-size: 1rem;
  font-style: normal;
`;

const Footer = () => (
  <Wrapper>
    Made with <Icon>&#9829;</Icon> by&nbsp;
    <a href="//github.com/hdnha11" rel="noopener noreferrer" target="_blank">
      Nha Hoang
    </a>
  </Wrapper>
);

export default Footer;
