import Carousel from "@/components/atoms/EmblaCarousel/Carousel";
import Carousel2 from "@/components/atoms/EmblaCarousel2/Carousel2";
import { Box, Typography } from "@mui/material";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const Blogs = () => {

  const sampleSlides = [
    {
      feature_image: 'https://bookpinks.com/wp-content/uploads/2024/08/Billionaires-Forbidden-Attraction.jpg',
      title: 'Billionaire’s Forbidden Attraction: A Second Chance Enemies to Lovers with Benefits Romance',
      url: 'https://example.com/slide1',
      tags: [{ name: 'Technology' }],
      date: "MAY 29, 2001"
    },
    {
      feature_image: 'https://bookpinks.com/wp-content/uploads/2024/09/Niergel-Chronicles.jpg',
      title: 'Niergel Chronicles – Last Hope: (Christian Fantasy Adventure)',
      url: 'https://example.com/slide2',
      tags: [{ name: 'Development' }],
      date: "MAY 29, 2001"
    },
    {
      feature_image: 'https://bookpinks.com/wp-content/uploads/2024/09/The-Raven-Bleeds.jpg',
      title: 'One FORBIDDEN Touch: An Enemies-To-Lovers Second Chance Workplace Romance',
      url: 'https://example.com/slide3',
      tags: [{ name: 'ReactJS' }],
      date: "MAY 29, 2001"
    },
    {
      feature_image: 'https://bookpinks.com/wp-content/uploads/2024/09/FORBIDDEN-Love-Attractions.jpg',
      title: 'FORBIDDEN Love Attractions: A Steamy Billionaire Romance Collection',
      url: 'https://example.com/slide4',
      tags: [{ name: 'UI/UX' }],
      date: "MAY 29, 2001"
    },
    {
      feature_image: 'https://bookpinks.com/wp-content/uploads/2024/09/The-Raven-Bleeds.jpg',
      title: 'The Raven Bleeds',
      url: 'https://example.com/slide5',
      tags: [{ name: 'Design' }],
      date: "MAY 29, 2001"
    }
    ,
    {
      feature_image: 'https://images.unsplash.com/photo-1434873740857-1bc5653afda8?q=80&w=1889&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Slide 5 Title: Advanced Carousel Techniques',
      url: 'https://example.com/slide5',
      tags: [{ name: 'Design' }],
      date: "MAY 29, 2001"
    }
  ];

  return (
    <Box className='max-w-7xl mx-auto my-28'>
      <Typography className='text-xl md:text-[38px] font-poppins font-semibold text-[#444444] text-center md:mb-12'>New Blogs</Typography>
      <Carousel2 slides={sampleSlides} />
      <Box className='flex items-center justify-end'>
        <Box className='flex items-center gap-3 cursor-pointer w-fit group'>
          <Typography className="">More Blogs</Typography>
          <ArrowRightAltIcon className="group-hover:text-yellow-500" />
        </Box>

      </Box>
    </Box>
  )
}

export default Blogs;