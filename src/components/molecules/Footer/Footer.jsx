'use client'

import React from 'react';
import { Box, Button, Grid, TextField, Typography, Container, IconButton } from "@mui/material";
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import PinterestIcon from '@mui/icons-material/Pinterest';
import InstagramIcon from '@mui/icons-material/Instagram';
import { styled } from '@mui/system';

const CustomTextField = styled(TextField)({
  '& .MuiInputBase-root': {
    color: 'white',
    '&::before': {
      borderBottomColor: 'rgba(255, 255, 255, 0.5)',
    },
    '&:hover:not(.Mui-disabled):before': {
      borderBottomColor: 'white',
    },
    '&::after': {
      borderBottomColor: 'white',
    },
  },
  '& .MuiInputLabel-root': {
    color: 'rgba(255, 255, 255, 0.7)',
  },
});

const Footer = () => {
  return (
    <Box className="bg-gradient-to-r from-primary-pink to-purple-900 text-white pt-16 pb-8">
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Box className='mb-6 bg-white p-4 rounded-lg inline-block'>
              <img src="/logo/book-pinks-high-logo-min.webp" className="w-40 h-auto" alt="BookPinks Logo" />
            </Box>
            <Typography variant="body2" className='mb-6'>
              Discover your next favorite read with BookPinks. We're passionate about connecting readers with amazing stories.
            </Typography>
            <Typography variant="body2" className='mb-6'>
              Info@bookpinks.com
            </Typography>
            <Box className='flex space-x-2'>
              {[FacebookIcon, TwitterIcon, PinterestIcon, InstagramIcon].map((Icon, index) => (
                <IconButton key={index} className='text-white hover:bg-white hover:text-primary-pink transition-colors'>
                  <Icon />
                </IconButton>
              ))}
            </Box>
          </Grid>

          <Grid item xs={12} md={2}>
            <Typography variant="h6" className="font-semibold mb-4">Quick Links</Typography>
            {['Home', 'About Us', 'Services', 'Contact Us'].map((item) => (
              <Typography key={item} variant="body2" className="mb-2 hover:text-gray-200 cursor-pointer transition-colors">
                {item}
              </Typography>
            ))}
          </Grid>

          <Grid item xs={12} md={2}>
            <Typography variant="h6" className="font-semibold mb-4">Readers' Corner</Typography>
            {['Featured Books', 'Free Books', 'All Books', 'Blog'].map((item) => (
              <Typography key={item} variant="body2" className="mb-2 hover:text-gray-200 cursor-pointer transition-colors">
                {item}
              </Typography>
            ))}
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h6" className="font-semibold mb-4">Stay Updated</Typography>
            <Typography variant="body2" className="mb-4">
              Subscribe to our newsletter for the latest news and updates.
            </Typography>
            <Box className='flex'>
              <CustomTextField
                variant="standard"
                placeholder="Enter your email"
                fullWidth
                className="mr-2"
              />
              <Button variant="contained" className="bg-white text-primary-pink hover:bg-gray-100">
                Subscribe
              </Button>
            </Box>
          </Grid>
        </Grid>

        <Box className='mt-12 pt-6 border-t border-white/20'>
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item>
              <Typography variant="body2">
                © 2024 BookPinks. All rights reserved.
              </Typography>
            </Grid>
            <Grid item>
              <Box className='flex space-x-4'>
                {['Paypal', 'Mastercard', 'Visa', 'Express'].map((item) => (
                  <img
                    key={item}
                    src={`https://bookpinks.com/wp-content/uploads/2023/09/${item}-100x100.png`}
                    alt={`${item} logo`}
                    className="w-8 h-8"
                  />
                ))}
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;