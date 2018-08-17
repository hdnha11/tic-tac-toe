import styled from 'styled-components';
import Button from '../Button';

const Wrapper = styled.div`
  display: flex;

  ${Button} {
    display: flex;
    flex: 1 1 auto;
    text-align: left;
  }

  ${Button}:first-child {
    margin-right: 5px;
  }

  ${Button} + ${Button} {
    margin-left: 5px;
  }
`;

export default Wrapper;
