"use client";
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Image from 'next/image';
import Link from 'next/link';




function Header() {
  const pages = [
    { name: 'HOME', route: '/' },
    { name: 'FEATURED BOOK', route: '/featured-books' },
    { name: 'FREE BOOK', route: '/free-book' },
    { name: 'ALL BOOKS', route: '/all-books' },
    { name: 'BLOG', route: '/blog' },
  ];

  const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="sticky" className='bg-white p-2'>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box className='bg-green-30 p-4 w-64'>
            <img src="/logo/book-pinks-high-logo-min.webp" alt="hello" className='w-40' />
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map(({ name, route }) => (
                <MenuItem onClick={handleCloseNavMenu}>
                  <Link href={route} className='text-black'>{name}</Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} className='bg-red-30 gap-5'>


            {pages.map(({ name, route }) => (
              <Link href={route} className='text-black'>{name}</Link>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Link href='/service'>
              <Typography className='text-text-pink border border-text-pink rounded p-2 px-4 cursor-pointer font-[arial] font-semibold text-xs'>
                FOR AUTHORS
              </Typography>
            </Link>

          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
