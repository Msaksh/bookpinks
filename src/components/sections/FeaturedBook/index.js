import BookCard from "@/components/atoms/BookCard/BookCard";
import { Box, Grid, Typography } from "@mui/material";


const FeaturedBook = () => {

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
      description: 'https://example.com/slide1',
      price: '1.99'
    },
    {
      image: 'https://bookpinks.com/wp-content/uploads/2024/09/Niergel-Chronicles.jpg',
      title: 'Niergel Chronicles – Last Hope: (Christian Fantasy Adventure)',
      description: 'https://example.com/slide2',
      price: '1.99'
    },
    {
      image: 'https://bookpinks.com/wp-content/uploads/2024/07/One-FORBIDDEN-Touch.jpg',
      title: 'One FORBIDDEN Touch: An Enemies-To-Lovers Second Chance Workplace Romance',
      description: 'https://example.com/slide3',
      price: '1.99'
    },
    {
      image: 'https://bookpinks.com/wp-content/uploads/2024/09/FORBIDDEN-Love-Attractions.jpg',
      title: 'FORBIDDEN Love Attractions: A Steamy Billionaire Romance Collection',
      description: 'https://example.com/slide4',
      price: '1.99'
    },
    {
      image: 'https://bookpinks.com/wp-content/uploads/2024/09/The-Raven-Bleeds.jpg',
      title: 'The Raven Bleeds',
      description: 'https://example.com/slide5',
      price: '1.99'
    }
    // Add more book objects here...
  ];

  return (
    <Box className='mt-20 px-2 md:px-8'>
      <Typography className='text-center text-4xl text-[#444444] font-poppins font-semibold mb-16'>Featured Books</Typography>
      <Grid container spacing={2}>
        {books.map((book, index) => (
          <Grid item xs={6} sm={6} md={3} lg={2} key={index} data-aos="zoom-in">
            <BookCard
              image={book.image}
              title={book.title}
              description={book.description}
              price={book.price}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default FeaturedBook;