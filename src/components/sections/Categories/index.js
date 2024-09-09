'use client'
import CardBig from "@/components/atoms/CardBig/CardBig";
import CardSmall from "@/components/atoms/CardSmall/CardSmall";
import { Box, Button, Grid, Typography } from "@mui/material";



const Categories = () => {
  return (
    <Box className='mb-24 px-8'>
      <Grid container spacing={4}>

        <Grid item xs={3}>
          <CardSmall bgColor1='#222222' bgColor2='#413E3E' text1={'Horror'} text2={'Mystries'} text3={'Suspense'} img={'books/Horror.png'} />
        </Grid>

        <Grid item xs={3}>
          <CardSmall bgColor1={'#fec62e'} bgColor2={'#fec62e'} text1={'Teen'} text2={'LGBTQ'} text3={'Young Adult'} img={'books/Teen.webp'} />
        </Grid>

        <Grid item xs={6}>
          <CardBig bgColor1={'#f42c37'} bgColor2={'#ff4d58'} text1={'Romance'} text2={'Erotica'} text3={'Women Fiction'} img={'books/Ramance-Book-2.png'} />
        </Grid>

        <Grid item xs={6}>
          <CardBig bgColor1={'#e5e5e6'} bgColor2={'#ececed'} text1={'Memoir'} text2={'Bio-Graphy'} text3={'Non-Fiction'} img={'books/Biography-Book.png'} />
        </Grid>

        <Grid item xs={3}>
          <CardSmall bgColor1={'#2dd06f'} bgColor2={'#2dd06f'} text1={'Action'} text2={'Adventure'} text3={'And Thrillers'} img={'books/Advenchar-3.png'} />
        </Grid>

        <Grid item xs={3}>
          <CardSmall bgColor1={'#1479fd'} bgColor2={'#1788ff'} text1={'Fantasy'} text2={'Horror'} text3={'Science Fiction'} img={'books/Book_Mockup_v021.png'} />
        </Grid>

      </Grid>

    </Box>
  )
}
export default Categories;