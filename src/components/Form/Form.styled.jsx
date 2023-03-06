import styled from '@emotion/styled';

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const IputStyled = styled.input`
  width: 200px;
  height: 30px;
  padding: 2px 5px;
  margin: 3px 0;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  background-color: #f8f8f8;
  font-size: 16px;
  font-weight: 400;
  color: #444;
  transition: border-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease-in-out;
  &:focus {
    outline: none;
    border-color: #5dade2;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
  }
  &:focus ~ span {
    color: #5dade2;
  }
`;

export const StyledFild = styled.label`
  font-family: 'Rubik', sans-serif;
  position: relative;
  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;
export const StyledLabel = styled.span`
  position: absolute;
  top: -18px;
  left: 0;
`;

export const RadioContainer = styled.div`
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;
export const RadioInput = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  &:checked + label::before {
    background-color: #3b9dff;
    border-color: green;
  }
  &:checked + label {
    color: green;
  }
`;
export const RadioLabel = styled.label`
  position: relative;
  font-size: 16px;
  padding-left: 10px;
  margin-right: 10px;
  line-height: 1.5;
  cursor: pointer;
  transition: background-color 250ms ease, color 250ms ease;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 10px;
    height: 10px;
    border-radius: 50%;
    border: 1px solid #ccc;
    background-color: #fff;
  }
`;
export const StyledFormButton = styled.button`
  width: 130px;
  height: 40px;
  color: #fff;
  border-radius: 5px;
  padding: 10px 25px;
  font-family: 'Lato', sans-serif;
  font-weight: 500;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
    7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
  outline: none;
  background: #b621fe;
  border: none;
  z-index: 1;

  &:after {
    position: absolute;
    content: '';
    width: 0;
    height: 100%;
    top: 0;
    right: 0;
    z-index: -1;
    background-color: #663dff;
    border-radius: 5px;
    box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
      7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
  }

  &:hover {
    color: #fff;
  }
  &:hover:after {
    left: 0;
    width: 100%;
  }
  &:active {
    top: 2px;
  }
  &:disabled {
    background-color: grey;
  }
  &:disabled:hover:after {
    display: none;
  }
  &:disabled:active {
    top: 0;
  }
`;
