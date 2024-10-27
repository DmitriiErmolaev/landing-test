import React, { FC, KeyboardEventHandler, TouchEventHandler, useLayoutEffect, useRef, useState, WheelEventHandler } from 'react';
import styles from './CaricaturesSlider.module.scss';
import CaricatureCard from './CaricatureCard/CaricatureCard';
import SliderButton from './SliderButton/SliderButton';
import useCaricatures from '@/app/_hooks/useCaricatures';
import { ICaricaturesSlider } from '@/app/_types/types';

const CaricaturesSlider:FC<ICaricaturesSlider> = ({labelId}) => {
  const [ firstImageIndex, setFirstImageIndex ] = useState(0);
  const listRef = useRef<HTMLUListElement | null>(null);
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const touchStartPoint = useRef<number | null>(null)
  const [ secondCardOffset, setSecondCardOffset ] = useState(0);
  const caricatures = useCaricatures();

  const switchRight = () => {
    console.log('switchRight')
    if(caricatures.length && firstImageIndex !== caricatures.length-1) {
      setFirstImageIndex(prev => ++prev);
    }
  }

  const switchLeft = () => {
    console.log('switchLeft')
    if(caricatures.length && firstImageIndex > 0) {
      setFirstImageIndex(prev => --prev);
    }
  }

  const handleWheel:WheelEventHandler<HTMLDivElement> = (e) => {
    if (e.shiftKey) {
      if (e.deltaY > 0) {
        switchRight();
      } else {
        switchLeft();
      }
    }
  };

  const handleTouchStart: TouchEventHandler<HTMLDivElement> = (e) => {
    touchStartPoint.current = e.touches[0].clientX;
  };

  const handleTouchEnd:TouchEventHandler<HTMLDivElement> = (e) => {
    if(touchStartPoint.current) {
      const touchEndX = e.changedTouches[0].clientX;
      if (touchStartPoint.current - touchEndX > 50) {
        switchRight();
      } else if (touchEndX - touchStartPoint.current > 50) {
        switchLeft();
      }
    }
  };

  const handleKeyDown: KeyboardEventHandler<HTMLDivElement> = (e) => {
    console.dir(e)
    if(e.code === "ArrowRight") {
      switchRight()
    }
    if(e.code === 'ArrowLeft') {
      switchLeft()
    }
  }

  useLayoutEffect(() => {
    if(listRef.current && listRef.current.children.length) {
      const secondElement = listRef.current.children[1] as HTMLElement;
      setSecondCardOffset( secondElement.offsetLeft);
    }
  }, [caricatures])

  return (
    <div
      ref={sliderRef}
      className={styles.slider}
      onWheel={handleWheel}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role='region'
      aria-labelledby={labelId}
    >
      <ul
        ref={listRef}
        className={styles['slider-list']}
        style={{
          transform:`translateX(${-secondCardOffset*firstImageIndex}px)`
        }}
        aria-live='polite'
      >
        {caricatures.map((caricature, index) =>  (
          <CaricatureCard
            key={caricature.id}
            title={caricature.title}
            description={caricature.description}
            index={index}
            url={caricature.url}
            ariaHidden={index !== firstImageIndex}
          />
        ))}
      </ul>
      <div className={styles['slider-buttons']}>
        <SliderButton direction='left' switchImage={switchLeft}/>
        <SliderButton direction='right' switchImage={switchRight}/>
      </div>
    </div>
  );
};

export default CaricaturesSlider;