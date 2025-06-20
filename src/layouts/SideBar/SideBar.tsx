import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { SideBarOptions } from './components/SideBarOptions.tsx';
import {Typography} from "@mui/material";

export const SideBar = () => {
  return (
    <Box>
      <AppBar position='fixed'></AppBar>
      <Box component='nav'>
        <Drawer variant='permanent' open>
           <Typography>Udemy Inter.school</Typography>
          <SideBarOptions></SideBarOptions>
        </Drawer>
      </Box>
    </Box>
  );
};
