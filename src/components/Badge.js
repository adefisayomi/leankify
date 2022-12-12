import * as React from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

export default function CustomizedBadge ({children, badgeContent, color, ...sx}) {
  return (
      <StyledBadge badgeContent={badgeContent} color={color} sx= {sx}>
        {children}
      </StyledBadge>
  );
}