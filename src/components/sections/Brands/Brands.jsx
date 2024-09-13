import { Box, Grid } from "@mui/material";
const Brands = () => {
  return (
    <Box className="bg-[#DCDCDC] p-10 min-h-36 flex items-center justify-center ">
      <Grid container spacing={8}>
        <Grid item xs={12} md={3} data-aos="fade-left" className="flex items-center justify-center">
          <img className="h-7" src="https://bookpinks.com/wp-content/uploads/2023/10/Barnes-Noble-Logo-4.png" alt="" />
        </Grid>
        <Grid item xs={12} md={3} data-aos="fade-left" className="flex items-center justify-center">
          <img className="h-10" src="	https://bookpinks.com/wp-content/uploads/2023/10/Amazon-logo-2.png" alt="" />
        </Grid>
        <Grid item xs={12} md={3} data-aos="fade-left" className="flex items-center justify-center">
          <img className="h-12" src="https://bookpinks.com/wp-content/uploads/2023/10/1920x1080-275-2756630_ibooks-logo-png-2.png" alt="" />
        </Grid>
        <Grid item xs={12} md={3} data-aos="fade-left" className="flex items-center justify-center">
          <img className="h-10" src="https://bookpinks.com/wp-content/uploads/2023/10/Kobo_logo.png" alt="" />
        </Grid>
      </Grid>
    </Box >
  )
}

export default Brands;