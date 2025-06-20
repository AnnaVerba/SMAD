import { Divider, List, ListItem, ListItemButton, ListItemText, Toolbar } from '@mui/material';
import { SidebarExtraOptions, SidebarOptions } from '../../../core/constansts/sidebar-options';

export const SideBarOptions = () => (
  <div>
    <Toolbar />
    <Divider sx={{ background: '#BDBDBD', marginTop: '170px', width: '280px', border: '0,5px' }} />
    <List
      sx={{
        width: '192px',
        height: '279px',
        top: '11px',
        marginLeft: '25px',
      }}
    >
      {SidebarOptions.map((item: { text: string; image: string }) => (
        <ListItem key={item.text} disablePadding sx={{ height: '40px', marginBottom: '8px' }}>
          <ListItemButton
            sx={{
              borderRadius: '4px',
              '&.Mui-selected:hover': {
                backgroundColor: 'blue',
                color: 'blue',
              },
              '&.Mui-selected': {
                backgroundColor: 'blue',
              },
            }}
          >
            <img src={item.image} alt='icon ' style={{ height: '16px', width: '16px', marginRight: '14px' }} />
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
          <ListItemButton    sx={{
            borderRadius: '4px',
            '&.Mui-selected:hover': {
              backgroundColor: 'blue',
              color: 'blue',
            },
            '&.Mui-selected': {
              backgroundColor: 'blue',
            },
          }}>
            <img src={item.image} alt='icon' style={{ height: '16px', width: '16px', marginRight: '14px' }} />
            <ListItemText primary={item.text}  slotProps={{
              primary: {
                sx: {
                  fontFamily: 'Kumbh Sans',
                  fontSize: '14px',
                  fontWeight: 600,
                  height: '17px',
                },
              },
            }}/>
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  </div>
);
