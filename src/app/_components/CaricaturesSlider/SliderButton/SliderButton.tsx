import React, { FC   } from 'react';
import styles from './SliderButton.module.scss';
import arrowLeft from '../../../assets/images/left.png';
import arrowRight from '../../../assets/images/right.png';
import { ISliderButton } from '@/app/_types/types';
import Image from 'next/image';

const SliderButton:FC<ISliderButton> = ({direction, switchImage}) => {

  const handleClick = () => {
    switchImage()
  }

  return (
    <button className={`${styles['slider-button']} focusable`} onClick={handleClick} >
      <Image
        src={direction ==='left' ? arrowLeft : arrowRight}
        alt={`arrow-${direction} button`}
      />
    </button>
  );
};

export default SliderButton;