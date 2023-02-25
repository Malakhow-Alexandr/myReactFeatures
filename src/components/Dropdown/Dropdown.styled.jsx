import styled from '@emotion/styled';

export const DropdownContainer = styled.div`
  position: relative;
  padding: 10px 10px;
  width: 400px;
  display: flex;
  align-items: center;
  border: 1px solid black;
  margin-bottom: 60px;
`;

export const DropdownMenu = styled.div`
  position: absolute;
  top: 50px;
  width: 399px;
  font-size: 25px;
  overflow: hidden;
  background-color: teal;
`;

export const DropdownButton = styled.button`
  width: 70px;
  height: 30px;
  border: none;
  border-radius: 10px;
  background-color: skyblue;
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
