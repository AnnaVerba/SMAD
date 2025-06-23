import { Badge, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { SidebarExtraOptions, SidebarOptions } from '../../../core/constansts/sidebar-options';
import type { SidebarOptionsType } from '../../../core/type/sidebar-options.ts';
import { Link } from 'react-router-dom';

export const SideBarOptions = () => {
  return (
    <div>
      <List
        sx={{
          width: '192px',
          height: '279px',
          top: '15px',
          marginLeft: '25px',
        }}
      >
        {SidebarOptions.map((item: SidebarOptionsType) => (
          <ListItem key={item.text} disablePadding sx={{ height: '40px', marginBottom: '8px' }}>
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
          </ListItem>
        ))}
      </List>

      <List
        sx={{
          width: '192px',
          top: '100px',
          marginLeft: '25px',
        }}
      >
        {SidebarExtraOptions.map((item) => (
          <ListItem key={item.text} disablePadding sx={{ height: '40px', marginBottom: '8px' }}>
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

              <Badge
                badgeContent='NEW'
                //Todo check is styles accurate
                sx={{
                  marginRight: '10px',
                  marginLeft: '10px',
                  '& .MuiBadge-badge': {
                    marginBottom: '1px',
                    marginTop: '3px',
                    marginRight: '10px',
                    marginLeft: '10px',
                  },
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
};
