'use client'
import { Box, Typography, Link } from "@mui/material";

const CardSmall = ({ bgColor1, bgColor2, text1, text2, text3, img }) => {
  // Function to generate the background style
  const getBackgroundStyle = () => {
    if (bgColor1 && bgColor2) {
      // If both colors are provided, create a gradient
      return {
        background: `linear-gradient(to bottom right, ${bgColor1}, ${bgColor2})`
      };
    } else if (bgColor2) {
      // If only bgColor2 is provided, use it as a solid background
      return {
        backgroundColor: bgColor2
      };
    }
    // Default background if no colors are provided
    return {};
  };

  return (
    <Box
      className="rounded-2xl pt-32 px-7 pb-12 relative transition-all duration-300 ease-in-out
                 hover:shadow-lg hover:shadow-white/25 hover:-translate-y-1"
      style={getBackgroundStyle()}
    >
      <Typography className="text-white text-base font-semibold mb-3">{text1}</Typography>
      <Typography className="text-white font-raleway text-2xl font-semibold mb-4">{text2}</Typography>
      <Typography className="text-[36px] leading-9 text-[#ffffff5e] font-tahoma font-black mb-6 tracking-tighter">{text3}</Typography>
      <Link href='#' className="no-underline">
        <Typography className="text-xs text-white font-raleway font-medium uppercase bg-red-500 w-fit py-3 px-6 no-underline rounded-full mb-4">Browse</Typography>
      </Link>
      <Box className='absolute left-36 top-14 '>
        <img src={img} className="w-40" width={100} height={100} alt="Book" />
      </Box>
    </Box>
  )
}

export default CardSmall;