import styled from '@emotion/styled';

export const TodoListStyled = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const TodoListStyledItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: left;
  gap: 10px;
  width: 150px;
  height: 40px;
  padding: 5px;
  border: 1px solid black;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const Discription = styled.p`
  font-size: 14px;
  padding: 0;
  margin: 0;
`;

export const Button = styled.button`
  width: 50px;
  height: 20px;
  font-size: 12px;
`;
