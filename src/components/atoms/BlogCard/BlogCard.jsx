import { Box, Typography } from "@mui/material";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import ModeCommentIcon from '@mui/icons-material/ModeComment';

const BlogCard = ({ slide, index }) => {
  return (
    <Box>
      <Box className="" key={index}>
        <Box className="flex flex-col items-center bg-transparen p-4 rounded-xl group min-h-[500px]  ">
          <Box className='w-full h-40'>
            <img
              src={slide.feature_image}
              alt={slide.title}
              className=" object-cover rounded-lg w-full h-full"
            />
          </Box>
          <Box className=" bg-white shadow-lg w-4/5 p-7 -mt-20  group-hover:-mt-10 duration-300">
            <Box className='flex flex-col justify-start'>
              <Typography variant="h6" className=" text-start font-playfair line-clamp-2 ">
                {slide.title}
              </Typography>
              <Typography variant="p" className="text-start  font-playfair text-xs font-normal italic text-[#AAAAAA]">
                {slide.date}
              </Typography>
              <Typography variant="p" className="text-start  font-poppins text-base font-normal text-black">
                {slide.desc}
              </Typography>

            </Box>
            <Box className='flex items-center justify-between'>
              <Typography className="text-sm font-poppins text-[#AAAAAA] cursor-pointer">Read more <ArrowRightAltIcon /> </Typography>
              <Box className='flex items-center  cursor-pointer'>
                <ModeCommentIcon className="text-sm font-poppins text-[#AAAAAA]" />
                <Typography className="text-sm font-poppins text-[#AAAAAA] ml-1">0</Typography>
              </Box>
            </Box>

          </Box>
        </Box>
      </Box>
    </Box>
  )
}
export default BlogCard;