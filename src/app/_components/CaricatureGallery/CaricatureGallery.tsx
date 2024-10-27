'use client';
import React from 'react';
import styles from './CaricatureGallery.module.scss';
import CaricaturesSlider from '../CaricaturesSlider/CaricaturesSlider';
import ReduxProvider from '@/app/_providers/ReduxProvider';

const CaricatureGallery = () => {
  return (
    <section className={styles['caricature-gallery']}>
      <h2 id='galleryTitle'>Галерея карикатур</h2>
      <ReduxProvider >
        <CaricaturesSlider labelId='galleryTitle'/>
      </ReduxProvider>
    </section>
  );
};

export default CaricatureGallery;