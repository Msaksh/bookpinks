'use client';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Button, Typography } from '@mui/material';

const Carousel = ({ slides }) => {
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
    <div className="embla">
      <button onClick={scrollPrev} disabled={!prevBtnEnabled} className="embla__button embla__button--prev">
        <ArrowBackIosIcon />
      </button>
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide, index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__inner">
                <div className=' w-48 h-72'>
                  <img
                    src={slide.feature_image}
                    alt={slide.title}
                    className="embla__slide__img "
                  />
                </div>

                <div className="embla__slide__content bg-white w-40 p-2 rounded-sm">
                  <Typography variant="body1" className="embla__slide__title font-playfair">
                    {slide.title}
                  </Typography>
                  <Button
                    variant="contained"
                    color="error"
                    href={slide.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="embla__slide__button"
                  >
                    Amazon
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button onClick={scrollNext} disabled={!nextBtnEnabled} className="embla__button embla__button--next">
        <ArrowForwardIosIcon />
      </button>
    </div>
  );
};

export default Carousel;
