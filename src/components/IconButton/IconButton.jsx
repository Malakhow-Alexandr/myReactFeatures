import React from 'react';
import { StyledIconButton } from './IconButton.styled';

export const IconButton = ({ children, onClick, ...allyProps }) => {
  return (
    <StyledIconButton type="button" onClick={onClick} {...allyProps}>
      {children}
    </StyledIconButton>
  );
};
IconButton.defaultProps = {
  onClick: () => null,
  children: null,
};
