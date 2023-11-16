import { Email, Notifications, Pets } from '@mui/icons-material';
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Menu,
  MenuItem,
  Toolbar,
  Typography
} from '@mui/material';
import { useMenu } from './hooks';

export const Navbar = () => {
  const { isOpen, toggleMenu } = useMenu();
  return (
    <AppBar position="sticky">
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h6" sx={{ display: { xs: 'none', sm: 'block' } }}>
          Marcus Dev
        </Typography>
        <Pets sx={{ display: { xs: 'block', sm: 'none' } }} />
        <Box
          bgcolor="white"
          sx={{ padding: '0 10px', borderRadius: '5px', width: '40%' }}
        >
          <InputBase placeholder="Search..." />
        </Box>
        <Box
          sx={{
            display: { xs: 'none', sm: 'flex' },
            gap: '20px',
            alignItems: 'center'
          }}
        >
          <Badge badgeContent={4} color="error">
            <Email />
          </Badge>
          <Badge badgeContent={2} color="error">
            <Notifications />
          </Badge>
          <Avatar
            src="https://images.pexels.com/photos/18294455/pexels-photo-18294455/free-photo-of-australia-oceania-retroiluminado-iluminado-por-tras.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
            sx={{ width: 30, height: 30 }}
            onClick={toggleMenu}
          />
        </Box>
        <Box
          sx={{
            display: { xs: 'flex', sm: 'none' },
            gap: '10px',
            alignItems: 'center'
          }}
          onClick={toggleMenu}
        >
          <Avatar
            src="https://images.pexels.com/photos/18294455/pexels-photo-18294455/free-photo-of-australia-oceania-retroiluminado-iluminado-por-tras.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
            sx={{ width: 30, height: 30 }}
          />
          <Typography>Marcus</Typography>
        </Box>
      </Toolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={isOpen}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        onClose={toggleMenu}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left'
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};
