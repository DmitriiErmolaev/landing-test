import React from 'react';
import styles from './Head.module.scss';
import LogoWithText from '../LogoWithText/LogoWithText';

const LandingHead = () => {
  console.log(styles)
  return (
    <header className={styles.head}>
      <LogoWithText text={'Тестовое задание ИД Московский Комсомолец'}/>
      {/* <div className={styles.head__inner}>
        <Image
          src='/images/logo.png'
          alt='logo'
          width={158}
          height={46}
        />
        <p className={styles.head__title}>Тестовое задание ИД Московский Комсомолец</p>
      </div> */}
    </header>
  );
};

export default LandingHead;