import TestimonialCard from "@/components/atoms/TestimonialCard/TestimonialCard";
import { Box, Typography, Grid } from "@mui/material";

const Testimonials = () => {

  const Testimonials = [
    {
      id: 1,
      says: "The entire project was executed with professionalism and completed punctually. I'm genuinely delighted with the final outcome, and I'm optimistic about attracting equally enthusiastic readers for my next book. Expressing my gratitude.",
      name: "Ken Ross",
      designation: "Author"
    },
    {
      id: 2,
      says: "I'm incredibly satisfied with this service, wearing both my author and reader hats. It not only allows me to explore new authors, but I've also reaped the rewards of their promotional efforts for my own books.",
      name: "Eden Summers",
      designation: "Author"
    },
    {
      id: 1,
      says: "Following the self-publishing of my initial book, I sought out Book Pinks for assistance with my second work. Their exceptional professional services made the entire journey an absolute delight.",
      name: "Toby Neal",
      designation: "Author"
    },
  ]

  return (
    <Box className="py-24 max-w-[1200px] mx-auto p-7">
      <Typography className="md:text-[33px] font-caudex font-semibold text-center mb-20">
        Testimonial
      </Typography>

      <Grid container spacing={8}>
        {Testimonials.map((item, index) => (
          <Grid data-aos="zoom-out" item xs={12} sm={6} md={4} key={index} sx={{ display: 'flex', flexDirection: 'column' }}>
            <TestimonialCard details={item} />
          </Grid>
        ))}


      </Grid>
    </Box>
  )
}

export default Testimonials;