import React from 'react';
import styles from './SubscribeImage.module.scss';
import Image from 'next/image';
import formImg from '../../assets/images/image.png'

const formImage = {
  title: 'Комета из каменного века максимально приблизилась к Земле',
  description: 'Последними это небесное тело видели неандертальцы',
}

const SubscribeImage = () => {
  return (
    <div className={styles['subscribe-image']}>
      <Image
        src={formImg}
        alt={formImage.title}
        width={460}
        height={480}
      />
      <div className={styles['subscribe-image__info']}>
        <div className={styles['subscribe-image__info-inner']}>
          <h3 className={styles['subscribe-image__title']}>{formImage.title}</h3>
          <p className={styles['subscribe-image__description']}>{formImage.description}</p>
        </div>
      </div>
    </div>
  );
};

export default SubscribeImage;