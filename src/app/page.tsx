import React from 'react';
import styles from './page.module.scss';
import CaricatureGallery from './_components/CaricatureGallery/CaricatureGallery';
import Divider from './_components/Divider/Divider';
import Subscribe from './_components/Subscribe/Subscribe';

const LandingMain = () => {
  return (
    <main className={styles.main}>
      <div className="wrapper">
        <CaricatureGallery />
        <Divider />
        <Subscribe />
      </div>
    </main>
  );
};

export default LandingMain;
