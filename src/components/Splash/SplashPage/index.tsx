import * as React from 'react';
import Image from 'next/legacy/image';

import './SplashPage.scss';

export type SplashPagePropsType = {
  activePage: number;
  title: string;
  description: string;
  buttonText: string;
  onButtonClick: () => void;
  imageSrc: string;
  imageAlt: string;
};

export const SplashPage = ({
  activePage,
  title,
  description,
  buttonText,
  onButtonClick,
  imageSrc,
  imageAlt,
}: SplashPagePropsType) => (
  <li
    style={{ transform: `translate(calc(${activePage} * -100%), 0)` }}
    className="splash-page"
  >
    <div className="splash-page__image">
      <Image
        src={imageSrc}
        blurDataURL={imageSrc}
        alt={imageAlt}
        priority
        layout="fill"
        objectFit="cover"
        placeholder="blur"
      />
    </div>
    <h1 className="splash-page__title">{title}</h1>
    <p className="splash-page__description">{description}</p>
    <button className="splash-page__button" onClick={onButtonClick}>
      {buttonText}
    </button>
  </li>
);
