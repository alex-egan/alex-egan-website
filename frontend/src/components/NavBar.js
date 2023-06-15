import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/Inbox';
import MailIcon from '@mui/icons-material/Mail';

export default function NavBar() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
    });
    
    const toggleSideBar = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
    }
    
    setState({ ...state, [anchor]: open });
    };
    
    const list = (anchor) => (
    <Box
        sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
        role="presentation"
        onClick={toggleSideBar(anchor, false)}
        onKeyDown={toggleSideBar(anchor, false)}
    >
      <List>
      {['Home','Resume','Lake Powell Data'].map((text, index) => (
          <ListItem key={text} disablePadding>
          <ListItemButton>
              <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} onClick={() => window.location.replace(text.toLowerCase().split(' ').join('-'))} />
          </ListItemButton>
          </ListItem>
      ))}
      </List>
      <Divider />
  </Box>
  );

  return (
    <div class="navigation">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" style={{backgroundColor: "#323B4C"}}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={toggleSideBar('left', true)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Alex Egan
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
      <Drawer
        anchor={'left'}
        open={state['left']}
        onClose={toggleSideBar('left', false)}
      >
          {list('left')}
      </Drawer>
    </div>
  );
}