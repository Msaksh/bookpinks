'use client'
import Carousel from "@/components/atoms/EmblaCarousel/Carousel";
import { Box, Typography } from "@mui/material";



const DiscountedBooks = () => {

  const sampleSlides = [
    {
      feature_image: 'https://bookpinks.com/wp-content/uploads/2024/08/Billionaires-Forbidden-Attraction.jpg',
      title: 'Billionaire’s Forbidden Attraction: A Second Chance Enemies to Lovers with Benefits Romance',
      url: 'https://example.com/slide1',
      tags: [{ name: 'Technology' }]
    },
    {
      feature_image: 'https://bookpinks.com/wp-content/uploads/2024/09/Niergel-Chronicles.jpg',
      title: 'Niergel Chronicles – Last Hope: (Christian Fantasy Adventure)',
      url: 'https://example.com/slide2',
      tags: [{ name: 'Development' }]
    },
    {
      feature_image: 'https://bookpinks.com/wp-content/uploads/2024/07/One-FORBIDDEN-Touch.jpg',
      title: 'One FORBIDDEN Touch: An Enemies-To-Lovers Second Chance Workplace Romance',
      url: 'https://example.com/slide3',
      tags: [{ name: 'ReactJS' }]
    },
    {
      feature_image: 'https://bookpinks.com/wp-content/uploads/2024/09/FORBIDDEN-Love-Attractions.jpg',
      title: 'FORBIDDEN Love Attractions: A Steamy Billionaire Romance Collection',
      url: 'https://example.com/slide4',
      tags: [{ name: 'UI/UX' }]
    },
    {
      feature_image: 'https://bookpinks.com/wp-content/uploads/2024/09/The-Raven-Bleeds.jpg',
      title: 'The Raven Bleeds',
      url: 'https://example.com/slide5',
      tags: [{ name: 'Design' }]
    }
    ,
    {
      feature_image: 'https://images.unsplash.com/photo-1434873740857-1bc5653afda8?q=80&w=1889&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Slide 5 Title: Advanced Carousel Techniques',
      url: 'https://example.com/slide5',
      tags: [{ name: 'Design' }]
    }
    ,
    {
      feature_image: 'https://images.unsplash.com/photo-1434873740857-1bc5653afda8?q=80&w=1889&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Slide 5 Title: Advanced Carousel Techniques',
      url: 'https://example.com/slide5',
      tags: [{ name: 'Design' }]
    }
    ,
    {
      feature_image: 'https://images.unsplash.com/photo-1434873740857-1bc5653afda8?q=80&w=1889&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Slide 5 Title: Advanced Carousel Techniques',
      url: 'https://example.com/slide5',
      tags: [{ name: 'Design' }]
    }
    ,
    {
      feature_image: 'https://images.unsplash.com/photo-1434873740857-1bc5653afda8?q=80&w=1889&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Slide 5 Title: Advanced Carousel Techniques',
      url: 'https://example.com/slide5',
      tags: [{ name: 'Design' }]
    }
    ,
    {
      feature_image: 'https://images.unsplash.com/photo-1434873740857-1bc5653afda8?q=80&w=1889&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Slide 5 Title: Advanced Carousel Techniques',
      url: 'https://example.com/slide5',
      tags: [{ name: 'Design' }]
    }
    ,
    {
      feature_image: 'https://images.unsplash.com/photo-1434873740857-1bc5653afda8?q=80&w=1889&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Slide 5 Title: Advanced Carousel Techniques',
      url: 'https://example.com/slide5',
      tags: [{ name: 'Design' }]
    }
    ,
    {
      feature_image: 'https://images.unsplash.com/photo-1434873740857-1bc5653afda8?q=80&w=1889&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Slide 5 Title: Advanced Carousel Techniques',
      url: 'https://example.com/slide5',
      tags: [{ name: 'Design' }]
    }
    ,
    {
      feature_image: 'https://images.unsplash.com/photo-1434873740857-1bc5653afda8?q=80&w=1889&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Slide 5 Title: Advanced Carousel Techniques Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, unde?',
      url: 'https://example.com/slide5',
      tags: [{ name: 'Design' }]
    }
  ];


  return (
    <Box className='min-h-[100vh] bg-black hover:bg-[#ffc527] duration-500 py-12'>
      <Box className='max-w-7xl mx-auto'>

        <Typography className="text-4xl text-white font-semibold font-poppins text-center mb-12">Free & Discounted Book</Typography>
        <Carousel slides={sampleSlides} />
      </Box>
    </Box>
  )
}

export default DiscountedBooks;