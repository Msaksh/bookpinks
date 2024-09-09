import { Box, Typography, Grid } from "@mui/material";
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import PinterestIcon from '@mui/icons-material/Pinterest';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const BestAuthor = () => {
  return (
    <Box className='px-8 mt-20'>
      <Box className='bg-from-grey flex items-center py-24 px-5 rounded-3xl'>

        <Box sx={{ flexGrow: 1 }} className='max-w-[1200px]  mx-auto' >
          <Grid container spacing={2}>

            <Grid item xs={12} sm={3} className="flex flex-col items-center md:items-start mb-10 ">
              <Box>
                <Typography className="text-[38px] font-poppins font-semibold leading-none">BEST <br /> AUTHOR
                </Typography>
              </Box>
              <Box className="w-60 h-60 bg-white p-[3px] rounded-full hover:shadow-[0_0px_10px_rgba(0,0,0,0.3)] my-10 ">
                <img src="https://bookpinks.com/wp-content/uploads/2024/02/Kya-lane-3-jpg.webp" className="w-full h-full rounded-full" width={100} height={100} alt="image" />
              </Box>
              <Box className='flex items-center gap-2'>
                <Box className='w-11 h-11 rounded-full bg-[#37528d] flex items-center justify-center cursor-pointer hover:bg-[#3c5998]'>
                  <FacebookIcon className="text-white" />
                </Box>
                <Box className='w-11 h-11 rounded-full bg-[#1a92dc] flex items-center justify-center cursor-pointer hover:bg-[#00c7ff]'>
                  <TwitterIcon className="text-white" />
                </Box>
                <Box className='w-11 h-11 rounded-full bg-[#b6081b] flex items-center justify-center cursor-pointer hover:bg-[#ff0014]'>
                  <PinterestIcon className="text-white" />
                </Box>
                <Box className='w-11 h-11 rounded-full bg-[#23ca62] flex items-center justify-center cursor-pointer hover:bg-[#00ff50]'>
                  <WhatsAppIcon className="text-white" />
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography className="text-[25px] font-raleway font-semibold mb-5">Kya Lane
              </Typography>
              <Typography className="text-xs font-raleway italic font-semibold mb-5">Kya Lane is a contemporary romance author that focuses on “Bad Boy Alphas” with all hearts of gold. From hot athletes to grumpy billionaires, bikers, or single daddies, you will meet your next swoon worthy book boyfriend who is always challenged by a sassy, independent heroine.</Typography>
              <Typography className="text-base font-raleway font-medium text-[#444444] mb-5">Inspired by being a true hopeless romantic, she believes in the sweetest of meet-cutes and happily ever afters. She resides in Southern California happily married to her bad boy biker of 30+ years, and together they are navigating into the next chapter of their lives; the empty nesting from their four children. She has found a passion in creating binge worthy and sizzling entertainment for her readers hoping they can indulge and escape from the daily grind. When she’s not publishing, she spends most of her time with her furry co-worker and fave, Jaxx, her Cavapoo baby.</Typography>
              <Typography className="text-base font-raleway font-medium text-[#444444] mb-5">Thank you for joining me on this publishing extravaganza. Get ready for the juiciest escapes and the coolest entertainment – it’s going to be a blast!

              </Typography>
            </Grid>
            <Grid item xs={12} sm={5} className="flex flex-col items-center">
              <Typography className="text-[25px] font-raleway font-semibold mb-5">Related Book
              </Typography>
              <Box className='w-60 h-[411px]'>
                <img src="https://bookpinks.com/wp-content/uploads/2024/02/Kya-lane3-300x500.webp" />
              </Box>
              <Typography className=" w-60 text-center font-playfair">Playing Forbidden Games: An Enemies to Lovers Sports Romance Collection</Typography>
            </Grid>

          </Grid>
        </Box>


        {/* <Box>
         
        </Box>
        <Box></Box>
        <Box></Box> */}
      </Box>
    </Box>
  )
}

export default BestAuthor;