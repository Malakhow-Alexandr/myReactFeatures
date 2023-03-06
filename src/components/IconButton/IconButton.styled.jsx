import styled from '@emotion/styled';

export const StyledIconButton = styled.button`
  margin: 0;
  padding: 10px;
  border: none;
  border-radius: 50%;
  color: #fff;
  background-color: green;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    transition: fill 250ms ease;
  }
  &:hover svg {
    fill: blue;
  }
`;
