import { ListItemButton, ListItemText } from '@mui/material';
import { SidebarExtraOptions, SidebarOptions } from '../../../core';
import type { SidebarOptionsType } from '../../../core';
import { Link } from 'react-router-dom';
import * as Styled from './styled.ts';

export const SideBarOptions = () => {
  return (
    <div>
      <Styled.SideBarOptions>
        {SidebarOptions.map((item: SidebarOptionsType) => (
          <Styled.SideBarItems key={item.text} disablePadding>
            <ListItemButton component={Link} to={item.navigate} selected={location.pathname === item.navigate}>
              <img src={item.image} alt='icon' style={{ height: '16px', width: '16px', marginRight: '14px' }} />
              <ListItemText
                primary={item.text}
                slotProps={{
                  primary: {
                    sx: {
                      fontFamily: 'Kumbh Sans',
                      fontSize: '14px',
                      fontWeight: 600,
                      height: '17px',
                    },
                  },
                }}
              />
            </ListItemButton>
          </Styled.SideBarItems>
        ))}
      </Styled.SideBarOptions>

      <Styled.SideBarExtraOptions>
        {SidebarExtraOptions.map((item) => (
          <Styled.SideBarItems key={item.text} disablePadding>
            <ListItemButton component={Link} to={item.navigate} selected={location.pathname === item.navigate}>
              <img src={item.image} alt='icon' style={{ height: '16px', width: '16px', marginRight: '14px' }} />
              <ListItemText
                primary={item.text}
                slotProps={{
                  primary: {
                    sx: {
                      fontFamily: 'Kumbh Sans',
                      fontSize: '14px',
                      fontWeight: 600,
                      height: '17px',
                    },
                  },
                }}
              />

              <Styled.SideBarBadge badgeContent='NEW' />
            </ListItemButton>
          </Styled.SideBarItems>
        ))}
      </Styled.SideBarExtraOptions>
    </div>
  );
};
