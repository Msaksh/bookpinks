import SectionDivider from "@/components/atoms/SectionDivider/SectionDivider";
import BestAuthor from "@/components/sections/BestAuthor";
import Blogs from "@/components/sections/Blogs/Blogs";
import Brands from "@/components/sections/Brands/Brands";
import Categories from "@/components/sections/Categories";
import DiscountedBooks from "@/components/sections/DiscountedBooks";
import FeaturedBook from "@/components/sections/FeaturedBook";
import HeroSection from "@/components/sections/HeroSection";
import { Box, Container } from "@mui/material";
import Image from "next/image";

export default function Home() {
  return (
    <Box className=' py-4'>
      <HeroSection />
      <Categories />
      <DiscountedBooks />
      <SectionDivider />
      <FeaturedBook />
      <BestAuthor />
      <Blogs />
      <Brands />
    </Box>
  );
}
