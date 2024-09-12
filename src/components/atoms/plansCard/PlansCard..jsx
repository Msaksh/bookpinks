'use client'
import { Box } from "@mui/material";

const PlansCard = ({ plan }) => {
  return (
    <Box className="bg-[url('https://bookpinks.com/wp-content/uploads/2023/09/Aauef-jpg.webp')] h-full bg-cover shadow-lg rounded-lg p-1 w-full">
      <Box className={` rounded-t-lg py-4 text-center`} style={{ backgroundColor: plan.bg }}>
        <h2 className="text-xl font-bold text-white">{plan.title}</h2>
        <p className="text-sm text-white">{plan.promotion}</p>
      </Box>
      <Box className="flex items-center justify-center mt-4">
        <p className="text-[#FFB1B1] font-raleway line-through text-3xl font-semibold">${plan.originalPrice}</p>
        <p className="text-[55px] font-bold mx-2 font-raleway">${plan.discountedPrice}</p>
        <p className="text-red-500 text-sm font-raleway">{plan.discount}</p>
      </Box>
      <Box className='w-10/12 mx-auto'>
        <ul className="mt-6 space-y-2 text-center">
          {plan.features.map((feature, idx) => (
            <li
              key={idx}
              className={`flex items-center gap-4 justify-center text-black border-b-2 py-4`}
            >
              {feature.included ? (
                <i className="fa fa-circle-check " />
              ) : (
                <i className="fa fa-xmark" />
              )}
              <span className='text-sm font-semibold'>{feature.name}</span>
            </li>

          ))}
        </ul>
      </Box>
      <Box className='flex items-center justify-center pb-10'>
        <button className="bg-[#F50673] hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-full mt-6 w-fit mx-auto">
          {plan.buttonLabel}
        </button>
      </Box>
    </Box>

  )
}

export default PlansCard;