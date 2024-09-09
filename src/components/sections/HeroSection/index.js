import { Box, Button, TextField, Typography } from "@mui/material";
import Link from "next/link";

const HeroSection = () => {
  return (
    <Box className='px-8'>
      <Box className="bg-gradient-to-r from-from-grey to-to-grey py-48 rounded-3xl relative mb-12 ">
        <Box className='absolute w-[490px] left-1/2 -translate-x-1/2 top-1/2 -translate-y-2/3'>
          <img src="/Book-Pinks2-min.png" className="transition-transform duration-300 ease-in-out hover:scale-110" />
        </Box>
        <Box className='ms-32'>
          <Typography className="text-3xl font-medium font-poppins text-black mb-4">Best</Typography>
          <Typography className="text-7xl font-poppins font-bold text-black">Deals on</Typography>
          <Typography className="text-white text-[12vw] font-black font-montserrat tracking-tighter leading-none">BOOKPINKS!!</Typography>
          <Box className='flex items-center justify-between mr-36'>
            <Box>
              <Box className='border rounded-full border-gray-400 bg-white px-6 min-w-[25vw] py-1'>
                <TextField id="standard-basic" placeholder="Enter Email" label="" variant="standard" />
                <Button className="bg-red-500 text-white rounded-full font-semibold px-4 ms-10">
                  SUBSCRIBE
                </Button>
              </Box>
            </Box>
            <Box className='mt-10'>
              <Typography className="text-sm font-semibold text-[#3F3E3E] mb-5 text-end">We only work exclusively for writers.</Typography>
              <Typography className="text-[#595858] text-xs text-right max-w-[285px] tracking-widest leading-5">BookPinks aspires to be the primary choice <br /> of every storyteller in their publishing and  <br />
                <Link href="https://bookpinks.com/special-plan/">
                  <span className="text-[#1bb0ce]"> marketing demands </span> {''}
                </Link>
                while retaining.
              </Typography>
            </Box>
          </Box>
        </Box>

      </Box>
    </Box>
  )
}

export default HeroSection;