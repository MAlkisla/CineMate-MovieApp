import React, { useState } from 'react'
import { AppBar, IconButton, Toolbar, Drawer, Button, Avatar, useMediaQuery } from '@mui/material';
import { Menu, AccountCircle, Brightness4, Brightness7, ViewSidebar } from '@mui/icons-material';
import { Link } from 'react-router-dom'
import { useTheme } from '@mui/material/styles';

import { Search, Sidebar } from '..'
import useStyles from './styles';

const NavBar = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const classes = useStyles();
  const isMobile = useMediaQuery('(max-width:600px)');
  const theme = useTheme();
  const isAuthenticated = true;
  return (
    <>
      <AppBar position='fixed'>
        <Toolbar className={classes.toolbar}>
          {isMobile && (
            <IconButton
              className={classes.menuButton}
              color='inherit'
              edge='start'
              onClick={() => setMobileOpen((prevMobileOpen) => !prevMobileOpen)}
              style={{ outline: 'none' }}
            >
              <Menu />
            </IconButton>)}
          <IconButton
            color='inherit'
            sx={{ ml: 1 }} o
            nClick={() => { }}>
            {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
          {!isMobile && <Search />}
          <div>
            {!isAuthenticated ? (
              <Button color='inherit' onClick={() => { }}>
                Login &nbsp; <AccountCircle />
              </Button>
            ) : (
              <Button color='inherit'
                component={Link}
                to={`/profile/:id`}
                className={classes.linkButton}
                onClick={() => { }}
              >
                {!isMobile && <>My Movies &nbsp; </>}
                <Avatar
                  style={{ width: 30, height: 30 }}
                  alt='Profile'
                  src='https://i.pinimg.com/736x/fc/04/73/fc047347b17f7df7ff288d78c8c281cf.jpg'
                />
              </Button>
            )}
          </div>
          {isMobile && <Search />}
        </Toolbar>
      </AppBar>
      <div>
        <nav className={classes.drawer}>
          {isMobile ? (
            <Drawer
              variant='temporary'
              anchor='right'
              open={mobileOpen}
              onClose={() => setMobileOpen((prevMobileOpen) => !prevMobileOpen)}
              classes={{ paper: classes.drawerPaper }}
              ModalProps={{ keepMounted: true }}
            >
              <Sidebar setMobileOpen={setMobileOpen} />
            </Drawer>
          ) : (
            <Drawer
              classes={{ paper: classes.drawerPaper }}
              variant='permanent'
              open >
              <Sidebar setMobileOpen={setMobileOpen} />
            </Drawer>
          )}
        </nav>
      </div>
    </>
  )
}

export default NavBar