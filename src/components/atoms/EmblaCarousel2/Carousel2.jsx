'use client';
import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Box, Button, Typography } from '@mui/material';

const Carousel2 = ({ slides }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on('select', onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  return (
    <div className="new-embla">
      {/* <button onClick={scrollPrev} disabled={!prevBtnEnabled} className="new-embla__button new-embla__button--prev">
        <ArrowBackIosIcon />
      </button> */}
      <div className="new-embla__viewport" ref={emblaRef}>
        <div className="new-embla__container">
          {slides.map((slide, index) => (
            <div className="new-embla__slide" key={index}>
              <div className="new-embla__slide__inner group  relative h-[300px]">
                <div className='w-full h-40'>
                  <img
                    src={slide.feature_image}
                    alt={slide.title}
                    className="new-embla__slide__img w-full h-full"
                  />
                </div>
                <div className="new-embla__slide__content bg-gray-100 w-4/5 p-7 absolute top-2/3 -translate-y-2/3 group-hover:-translate-y-20 transition-transform duration-400 ">
                  <Box className='flex flex-col justify-start'>
                    <Typography variant="p" className="text-start  font-playfair text-xs font-normal italic text-[#AAAAAA]">
                      {slide.date}
                    </Typography>
                    <Typography variant="h6" className=" text-start new-embla__slide__title font-playfair line-clamp-2 ">
                      {slide.title}
                    </Typography>
                  </Box>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <button onClick={scrollNext} disabled={!nextBtnEnabled} className="new-embla__button new-embla__button--next">
        <ArrowForwardIosIcon />
      </button> */}
      <div className="new-embla__dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`new-embla__dot ${selectedIndex === index ? 'new-embla__dot--active' : ''}`}
            onClick={() => emblaApi && emblaApi.scrollTo(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel2;
