import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { SideBarOptions } from './components/SideBarOptions.tsx';
import logo from './../../assets/logo.png';
import { CompanyName, SideBarDivider } from './styled.ts';

export const SideBar = () => {
  return (
    <Box>
      <AppBar position='fixed'></AppBar>
      <Box component='nav'>
        <Drawer variant='permanent' open>
          <img className='img' src={logo} alt='logo' />
          <CompanyName>Udemy Inter.school</CompanyName>
          <SideBarDivider />
          <SideBarOptions></SideBarOptions>
        </Drawer>
      </Box>
    </Box>
  );
};
