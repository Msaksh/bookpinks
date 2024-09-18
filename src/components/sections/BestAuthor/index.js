
'use client'
import { Box, Typography, Grid } from "@mui/material";
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import PinterestIcon from '@mui/icons-material/Pinterest';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Author from "@/components/atoms/Author/Author";

const BestAuthor = () => {

  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };


  return (
    <Box className='px-4 md:px-8 mt-20'>

      <div className="slider-container">
        <Slider {...settings}>
          <div>
            <Author />
          </div>
          <div>
            <Author />
          </div>
          <div>
            <Author />
          </div>
          <div>
            <Author />
          </div>

        </Slider>
      </div>

    </Box>
  )
}

export default BestAuthor;