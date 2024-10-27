import React, { FC } from 'react';
import styles from './caricatureCard.module.scss';
import { ICaricatureCard } from '@/app/_types/types';
import Image from 'next/image';
// import Image from 'next/image';
const CaricatureCard:FC<ICaricatureCard> = ({index, url,  title, description, ariaHidden}) => {

  const cardClassName = index % 2 === 0 ? `${styles['caricature-card']} ${styles['caricature-card_even']}` : `${styles['caricature-card']} ${styles['caricature-card_odd']}`
  return (
    <li
      className={cardClassName}
      aria-hidden={ariaHidden}
    >
      <article className={styles['caricature-card__inner']}>
        <span className={styles['caricature-card__chip']}>
          Карикатура
        </span>
        <Image
          src={url}
          alt={title}
          width={416}
          height={260}
        />
        <h3 className={styles['caricature-card__title']}>
          {title}
        </h3>
        <p className={styles['caricature-card__description']}>
          {description}
        </p>
      </article>
    </li>
  );
};

export default CaricatureCard;