'use client'
import BookCard from "@/components/atoms/BookCard/BookCard";
import BasicMenu from "@/components/atoms/Dropdown/Dropdown";
import { Box, Container, Grid, Typography } from "@mui/material"
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from "react";

const FeaturedBooksPage = () => {

  const [age, setAge] = useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const books = [
    {
      image: 'https://bookpinks.com/wp-content/uploads/2024/08/Billionaires-Forbidden-Attraction.jpg',
      title: 'Niergel Chronicles – Last Hope',
      description: '(Christian Fantasy Adventure)',
      price: '1.99'
    },
    {
      image: 'https://bookpinks.com/wp-content/uploads/2024/07/One-FORBIDDEN-Touch.jpg',
      title: 'One FORBIDDEN Touch',
      description: 'An Enemies-To-Lovers Second Chance Workplace Romance',
      price: '2.99'
    },

    {
      image: 'https://bookpinks.com/wp-content/uploads/2024/08/Billionaires-Forbidden-Attraction.jpg',
      title: 'Billionaire’s Forbidden Attraction: A Second Chance Enemies to Lovers with Benefits Romance',
      description: '(Christian Fantasy Adventure)',
      price: '1.99'
    },
    {
      image: 'https://bookpinks.com/wp-content/uploads/2024/09/Niergel-Chronicles.jpg',
      title: 'Niergel Chronicles – Last Hope: (Christian Fantasy Adventure)',
      description: '(Christian Fantasy Adventure)',
      price: '1.99'
    },
    {
      image: 'https://bookpinks.com/wp-content/uploads/2024/07/One-FORBIDDEN-Touch.jpg',
      title: 'One FORBIDDEN Touch: An Enemies-To-Lovers Second Chance Workplace Romance',
      description: '(Christian Fantasy Adventure)',
      price: '1.99'
    },
    {
      image: 'https://bookpinks.com/wp-content/uploads/2024/09/FORBIDDEN-Love-Attractions.jpg',
      title: 'FORBIDDEN Love Attractions: A Steamy Billionaire Romance Collection',
      description: '(Christian Fantasy Adventure)',
      price: '1.99'
    },
    {
      image: 'https://bookpinks.com/wp-content/uploads/2024/09/The-Raven-Bleeds.jpg',
      title: 'The Raven Bleeds',
      description: '(Christian Fantasy Adventure)',
      price: '1.99'
    }
    // Add more book objects here...
  ];

  const optionsAre = ['Sort by Popularity', 'Sort by average rating', 'sort by latest', 'sort by price: low to high', 'sort by price: high to low']

  return (
    <Box className='mt-20 px-8'>
      <Typography className='text-center text-4xl text-[#444444] font-poppins font-semibold mb-16'>Featured Books</Typography>
      <Box className='flex items-center justify-end max-w-7xl mx-auto mb-10'>

        <Box sx={{ minWidth: 220 }} className='mr-6'>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Default Sorting</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Default Sorting"
              onChange={handleChange}
            >
              {optionsAre.map((option, index) => (
                <MenuItem key={index} value={10}>{option}</MenuItem>
              ))}

            </Select>
          </FormControl>
        </Box>


      </Box>
      <Grid container spacing={4} justifyContent={'center'} className="mb-20">
        {books.map((book, index) => (
          <Grid item xs={6} sm={6} md={3} lg={2.2} key={index}>
            <BookCard
              image={book.image}
              title={book.title}
              price={book.price}
            />
          </Grid>
        ))}
      </Grid>
      <Stack spacing={2} className="flex items-center justify-center mb-20">
        <Pagination count={10} />
      </Stack>
    </Box>
  )
}

export default FeaturedBooksPage