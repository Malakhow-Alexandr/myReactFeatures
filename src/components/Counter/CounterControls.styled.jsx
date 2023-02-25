import styled from '@emotion/styled';

export const CounterButton = styled.button`
  width: 70px;
  height: 30px;
  border: none;
  background-color: skyblue;
  border-radius: 10px;
  cursor: pointer;
  outline: none;
  box-shadow: 1px 2px 2px 0 rgb(0 0 0 / 0.5);
  &:active {
    box-shadow: 2px 5px 2px 0 rgb(0 0 0 / 0.5);
  }
  &:not(:last-child) {
    margin-right: 5px;
  }
`;
