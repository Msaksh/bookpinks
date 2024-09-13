import { Box, Typography } from "@mui/material";

const TestimonialCard = ({ details }) => {
  return (
    <Box className="h-full">
      <Box className="border rounded-md border-black shadow-[0px_0px_10px_#d1d1d1] px-8 py-10 h-full flex flex-col">
        <Box className="w-11/12 mx-auto flex-1">
          <i className="fa-solid fa-quote-left text-[#5b5b5b] text-xl"></i>
          <Typography className="text-center">{details.says}</Typography>
          <Box className="w-7 h-[1px] bg-[#aaaaaa] mt-5"></Box>
          <Box className="w-fit flex flex-col items-center my-5">
            <Typography className="text-base font-raleway font-semibold text-[#444444]">{details.name}</Typography>
            <Typography className="text-sm font-raleway font-semibold text-[#BBBBBB]">{details.designation}</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default TestimonialCard;
