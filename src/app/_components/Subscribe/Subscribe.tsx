import React from 'react';
import styles from './Subscribe.module.scss';
import SubscribeImage from '../SubscribeImage.tsx/SubscribeImage';
import SubscribeForm from '../SubscribeForm/SubscribeForm';

const Subscribe = () => {
  return (
    <section className={styles['subscribe']}>
      <div className={styles['subscribe-inner']}>
        <SubscribeImage />
        <SubscribeForm />
      </div>
    </section>
  );
};

export default Subscribe;