import React, { FC } from 'react';
import styles from './LogoWithText.module.scss';
import Image from 'next/image';
import { ILogoWithText } from '@/app/_types/types';
const LogoWithText:FC<ILogoWithText> = ({text}) => {
  console.log(styles)
  return (
    <div className="wrapper">
      <div className={styles['logo-with-text']}>
        <Image
          src='/images/logo.png'
          alt='logo'
          width={158}
          height={46}
          />
        <p className={styles['logo-with-text__text']}>{text}</p>
      </div>
    </div>
  );
};

export default LogoWithText;