import styled from '@emotion/styled';

export const ColorPickerContainer = styled.div`
  width: 300px;
  border: 1px solid black;
  padding: 10px 5px;
  margin-bottom: 60px;
`;

export const ClorPickerTitle = styled.h2`
  margin: 0;
  padding: 0;
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 10px;
`;

export const ColorsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 5px;
`;

export const Colors = styled.button`
  width: 30px;
  height: 30px;
  cursor: pointer;
  border: none;
  outline: none;
  box-shadow: 1px 2px 2px 0 rgb(0 0 0 / 0.5);
  transition: transform 250ms ease, box-shadow 250ms ease, outline 250ms ease;
`;

export const ColorsNew = styled.button`
  width: 30px;
  height: 30px;
  cursor: pointer;
  border: none;
  outline: none;
  box-shadow: 1px 2px 2px 0 rgb(0 0 0 / 0.5);
  transition: transform 250ms ease, box-shadow 250ms ease, outline 250ms ease;

  &:active {
    box-shadow: 2px 5px 2px 0 rgb(0 0 0 / 0.5);
    transform: scale(1.2);
  }
`;

export const Description = styled.p`
  font-size: 16px;
`;
