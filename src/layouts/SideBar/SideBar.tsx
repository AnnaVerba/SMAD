import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { SideBarOptions } from './components/SideBarOptions.tsx';
import { Divider, Typography } from '@mui/material';
import logo from './../../assets/logo.png';

export const SideBar = () => {
  return (
    <Box>
      <AppBar position='fixed'></AppBar>
      <Box component='nav'>
        <Drawer variant='permanent' open>
          <img className='img' src={logo} alt='logo' />
          <Typography sx={{ marginTop: '20px', height: '40px' }}>Udemy Inter.school</Typography>
          <Divider sx={{ background: '#BDBDBD', marginTop: '27px', width: '240px', border: '0,5px' }} />
          <SideBarOptions></SideBarOptions>
        </Drawer>
      </Box>
    </Box>
  );
};
