import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import PinterestIcon from '@mui/icons-material/Pinterest';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <Box className="px-8 pt-12 shadow-[0_-10px_10px_#e7e7e7]">
      <Grid container spacing={2} className="ml-0 mt-0 mb-10">
        <Grid xs={12} md={7} className="">
          <Grid container spacing={2} className=" mt-0 ml-0">
            <Grid xs={12} md={4} className="mb-5">
              <Box className='mb-10'>
                <img src="/logo/book-pinks-high-logo-min.webp" className="w-52 h-full" width={100} height={100} alt="" />
              </Box>
              <Typography className='font-poppins text-sm text-[#38393a] mb-10'>Info@bookpinks.com              </Typography>
              <Box className='flex items-center gap-2 mt-32'>
                <Box className='w-6 h-6 rounded-full bg-[#37528d] flex items-center justify-center cursor-pointer hover:bg-[#3c5998]'>
                  <FacebookIcon className="text-white w-4 h-4" />
                </Box>
                <Box className='w-6 h-6 rounded-full bg-[#1a92dc] flex items-center justify-center cursor-pointer hover:bg-[#00c7ff]'>
                  <TwitterIcon className="text-white w-4 h-4" />
                </Box>
                <Box className='w-6 h-6 rounded-full bg-[#b6081b] flex items-center justify-center cursor-pointer hover:bg-[#ff0014]'>
                  <PinterestIcon className="text-white w-4 h-4" />
                </Box>
                <Box className='w-6 h-6 rounded-full bg-[#aaaaaa] flex items-center justify-center cursor-pointer hover:bg-[#00ff50]'>
                  <InstagramIcon className="text-white w-4 h-4" />
                </Box>
              </Box>
            </Grid>
            <Grid xs={12} md={4} className="mb-7">
              <Typography className="text-xl font-poppins font-semibold text-[#38393A] mb-6 px-2">Pages</Typography>
              <Box className='w-10 h-[3px] bg-primary-pink mb-5 ml-2'></Box>
              <Box className='flex flex-col justify-start'>
                <Typography className="text-[15px] font-poppins text-[#38393A] uppercase p-2 cursor-pointer hover:italic hover:text-primary-pink hover:font-medium">Home Page</Typography>
                <Typography className="text-[15px] font-poppins text-[#38393A] uppercase p-2 cursor-pointer hover:italic hover:text-primary-pink hover:font-medium">About Us</Typography>
                <Typography className="text-[15px] font-poppins text-[#38393A] uppercase p-2 cursor-pointer hover:italic hover:text-primary-pink hover:font-medium">Service</Typography>
                <Typography className="text-[15px] font-poppins text-[#38393A] uppercase p-2 cursor-pointer hover:italic hover:text-primary-pink hover:font-medium">Contact Us</Typography>
              </Box>
            </Grid>
            <Grid xs={12} md={4} className="mb-7">
              <Typography className="text-xl font-poppins font-semibold text-[#38393A] mb-6 px-2">Readers</Typography>
              <Box className='w-10 h-[3px] bg-primary-pink mb-5 ml-2'></Box>
              <Box className='flex flex-col justify-start'>
                <Typography className="text-[15px] font-poppins text-[#38393A] uppercase p-2 cursor-pointer hover:italic hover:text-primary-pink hover:font-medium">Featured Book</Typography>
                <Typography className="text-[15px] font-poppins text-[#38393A] uppercase p-2 cursor-pointer hover:italic hover:text-primary-pink hover:font-medium">Free Book</Typography>
                <Typography className="text-[15px] font-poppins text-[#38393A] uppercase p-2 cursor-pointer hover:italic hover:text-primary-pink hover:font-medium">All Books</Typography>
                <Typography className="text-[15px] font-poppins text-[#38393A] uppercase p-2 cursor-pointer hover:italic hover:text-primary-pink hover:font-medium">Blog</Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid xs={12} md={5}>
          <Typography className="text-xl font-poppins font-semibold text-[#38393A] mb-6 px-2">Subscribe To Our Email</Typography>
          <Box className='w-10 h-[3px] bg-primary-pink mb-5 ml-2'></Box>
          <Box className='flex flex-col justify-start'>
            <Typography className="text-[15px] font-poppins text-[#38393A] p-2">For Latest News & Updates</Typography>
            <Box className='mb-10'>
              <Box className='border rounded-full border-gray-400 bg-slate-100 px-6 max-w-[386px] py-1'>
                <TextField id="standard-basic" placeholder="Enter Email" label="" variant="standard" />
                <Button className="bg-red-500 text-white rounded-full font-semibold px-4 ms-0 md:ms-10">
                  SUBSCRIBE
                </Button>
              </Box>
            </Box>

            <Box className='flex items-center justify-start gap-5'>
              <img className="mr-5" src="https://bookpinks.com/wp-content/uploads/2023/09/Paypal-100x100.png" width={30} height={30} alt="" />
              <img className="mr-5" src="https://bookpinks.com/wp-content/uploads/2023/09/mastercard-100x100.png" width={30} height={30} alt="" />
              <img className="mr-5" src="https://bookpinks.com/wp-content/uploads/2023/09/Visa-100x100.png" width={30} height={30} alt="" />
              <img className="mr-5" src="https://bookpinks.com/wp-content/uploads/2023/09/Experr-100x100.png" width={30} height={30} alt="" />
            </Box>
          </Box>
        </Grid>

      </Grid>

      <hr className="my-7" />
      <Typography className="text-center font-medium text-[#444444] text-[13px] font-raleway mb-10">© 2024 BookPinks. All rights reserved.</Typography>
    </Box>
  )
}

export default Footer;