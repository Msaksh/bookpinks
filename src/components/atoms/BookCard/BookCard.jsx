import React from 'react';
import { Button } from '@mui/material';

const BookCard = ({ image, title, description, price }) => {
  return (
    <div className="flex flex-col items-center p-2 bg-white rounded-lg hover:shadow-[0_0_10px_#aaaaaa] shadow-[0_0_10px_#d7d7d7] h-full">
      <img src={image} alt={title} className="w-full h-auto min-h-9 object-cover rounded-md" />
      <div className="mt-4 text-center w-full">
        <h3 className="text-lg font-medium text-gray-800 font-playfair">{title}</h3>
        {description && <p className="mt-2 text-gray-600 text-[10px] md:text-lg">{description}</p>}
        <p className="mt-2 text-xl font-medium font-playfair text-[#f98c08]">${price}</p>
      </div>
      <Button
        variant="contained"
        color="error"
        className="mt-4"
        sx={{ borderRadius: '20px' }}
      >
        Amazon
      </Button>
    </div>
  );
};

export default BookCard;
