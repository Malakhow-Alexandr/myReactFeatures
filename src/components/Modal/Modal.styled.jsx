import styled from '@emotion/styled';

export const Backdrop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);

  transition: opacity 200ms ease-in-out, visibility 200ms ease-in-out;
`;

export const ModalStyled = styled.div`
  padding: 24px;
  border-radius: 4px;
  max-width: 640px;
  width: 80%;
  min-height: 320px;
  background-color: #fff;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;
