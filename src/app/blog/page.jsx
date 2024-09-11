import BlogCard from "@/components/atoms/BlogCard/BlogCard";
import { Box, Grid, Typography } from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Blog = () => {

  const sampleSlides = [
    {
      feature_image: 'https://bookpinks.com/wp-content/uploads/2024/08/Billionaires-Forbidden-Attraction.jpg',
      title: 'Billionaire’s Forbidden Attraction: A Second Chance Enemies to Lovers with Benefits Romance',
      url: 'https://example.com/slide1',
      tags: [{ name: 'Technology' }],
      date: "MAY 29, 2001",
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, officiis.'
    },
    {
      feature_image: 'https://bookpinks.com/wp-content/uploads/2024/09/Niergel-Chronicles.jpg',
      title: 'Niergel Chronicles – Last Hope: (Christian Fantasy Adventure)',
      url: 'https://example.com/slide2',
      tags: [{ name: 'Development' }],
      date: "MAY 29, 2001",
      desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et ea voluptatem saepe illo, tempore optio voluptates dicta deleniti eius distinctio.'
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
    <Box className="max-w-7xl mx-auto my-20">
      <Grid container spacing={2} >

        {sampleSlides.map((slide, index) => (
          <Grid item xs={12} sm={6} md={4}>
            <BlogCard slide={slide} index={index} />
          </Grid>
        ))}


      </Grid>

      <Box className='flex items-center justify-center md:justify-end group cursor-pointer'>
        <Box className='flex items-center'>
          <Box>
            <Typography className="text-xs font-raleway text-[#AAAAAA] font-medium text-end">Next</Typography>
            <Typography className="text-lg font-raleway text-[#505050] font-semibold">Page</Typography>
          </Box>
          <Box className='border p-4 ml-5 rounded-full group-hover:bg-black duration-150'>
            <ArrowForwardIosIcon className="group-hover:text-white" />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Blog;