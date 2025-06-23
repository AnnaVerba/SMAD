import { Badge, List, ListItem, styled } from '@mui/material';

export const SideBarBadge = styled(Badge)({
  marginRight: '10px',
  marginLeft: '10px',
  '& .MuiBadge-badge': {
    marginBottom: '1px',
    marginTop: '3px',
    marginRight: '10px',
    marginLeft: '10px',
  },
});

export const SideBarOptions = styled(List)({ width: '192px', height: '279px', top: '15px', marginLeft: '25px' });
export const SideBarExtraOptions = styled(List)({ width: '192px', top: '100px', marginLeft: '25px' });

export const SideBarItems = styled(ListItem)({
  height: '40px',
  marginBottom: '8px',
});
