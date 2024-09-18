'use client'
import { Box, Button, TextField, Typography } from "@mui/material";
import Link from "next/link";
import { styled } from '@mui/system';

const CustomTextField = styled(TextField)({
  '& .MuiInput-underline:before': {
    borderBottom: 'none',
  },
  '& .MuiInput-underline:after': {
    borderBottom: 'none',
  },
  '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
    borderBottom: 'none',
  },
});

const HeroSection = () => {
  return (
    <Box className='px-2 pt-4 md:px-8'>
      <Box className="bg-gradient-to-r from-from-grey to-to-grey py-8 h-[374px] md:h-full md:py-48 rounded-3xl relative mb-12 overflow-hidden ">
        <Box className='absolute w-[300px] md:w-[490px] left-2/3 md:left-[55%] -translate-x-1/2 top-[84%] md:top-1/2 -translate-y-2/3 md:z-10'>
          <img src="/Book-Pinks2-min.png" className="transition-transform duration-300 ease-in-out hover:scale-110" />
        </Box>
        <Box className='ms-7 md:ms-32' data-aos='fade-up'>
          <Typography className="md:text-3xl font-medium font-poppins text-black mb-10">Best</Typography>
          <Typography className="text-xl md:text-[5rem] font-poppins font-bold text-black mb-10">Deals on</Typography>
          <Typography className="text-white text-[12vw] font-black font-montserrat tracking-normal leading-none">BOOKPINKS!!</Typography>

        </Box>
        <Box className='flex items-center justify-between mr-0 md:mr-36 max-w-[1200px] lg:mx-auto'>
          <Box className='mt-20 '>
            <Box className='border rounded-full border-gray-400 bg-white px-6 flex w-5/6 relative md:static min-w-[400px] py-1 max-w-[400px]'>
              <CustomTextField
                id="standard-basic"
                placeholder="Enter Email"
                label=""
                variant="standard"
              />
              <Button className="bg-red-500 text-white rounded-full font-semibold px-4 md:ms-10">
                SUBSCRIBE
              </Button>
            </Box>
          </Box>
          <Box className='hidden md:block mt-10'>
            <Typography className="text-sm font-semibold text-[#3F3E3E]  mb-5 text-end">We only work exclusively for writers.</Typography>
            <Typography className="text-[#595858] text-xs text-right max-w-[285px] font-roboto_slab tracking-normal leading-5">BookPinks aspires to be the primary choice <br /> of every storyteller in their publishing and  <br />
              <Link href="https://bookpinks.com/special-plan/">
                <span className="text-[#1bb0ce]"> marketing demands </span> {''}
              </Link>
              while retaining.
            </Typography>
          </Box>
        </Box>

      </Box>
    </Box>
  )
}

export default HeroSection;