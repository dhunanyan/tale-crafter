'use client';
import * as React from 'react';

import { SplashPagination } from './SplashPagination';
import { SplashPage, type SplashPagePropsType } from './SplashPage';

import './Splash.scss';

const PAGES_DATA: Omit<SplashPagePropsType, 'onButtonClick' | 'activePage'>[] =
  [
    {
      title: 'Tale Crafter',
      description:
        'Sit amet consectetur, adipisicing elit. Harum, repellendus optio voluptatem asperiores velit quo unde aspernatur architecto veniam perspiciatis!',
      buttonText: 'Next',
      imageSrc: '/images/screen1.png',
      imageAlt: 'Tale Crafter',
    },
    {
      title: 'Craft your stories',
      description:
        'Doloremque quisquam excepturi iusto assumenda distinctio fugit dolorum atque debitis, minima ea eveniet sunt dolor deserunt autem. Recusandae sapiente a distinctio repellat ipsam veniam in quaerat sequi voluptas error excepturi autem officiis.',
      buttonText: 'Next',
      imageSrc: '/images/screen2.png',
      imageAlt: 'Craft your stories',
    },
    {
      title: 'Personalised characters',
      description:
        'Quibusdam obcaecati officia, perspiciatis cum sed pariatur iste minus repellendus. Omnis doloribus rerum reprehenderit, provident minima consequatur quisquam officiis cum itaque minus saepe quod quidem aliquid incidunt.',
      buttonText: 'Next',
      imageSrc: '/images/screen3.png',
      imageAlt: 'Personalised characters',
    },
    {
      title: 'Get started!',
      description:
        'Maxime blanditiis illo voluptatum quibusdam facere in. Perferendis magnam earum fugiat expedita ducimus aliquam atque maiores tempora repellendus, tempore autem aperiam delectus, ratione nulla ab facilis eaque et minus. Earum mollitia soluta aperiam.',
      buttonText: 'Sign up',
      imageSrc: '/images/screen4.png',
      imageAlt: 'Get started!',
    },
  ];

export const Splash = () => {
  const [activePage, setActivePage] = React.useState<number>(0);

  const handleButtonClick = () => {
    setActivePage((prev) => prev + 1);
  };

  const handlePageClick = (index: number) => {
    setActivePage(index);
  };

  return (
    <div className="splash">
      <img src="/images/background-stars.png" alt="Stars" />
      <div className="splash__container">
        <ul className="splash__pages">
          {PAGES_DATA.map((page, index) => (
            <SplashPage
              key={index}
              {...page}
              activePage={activePage}
              onButtonClick={handleButtonClick}
            />
          ))}
        </ul>
        <SplashPagination
          total={PAGES_DATA.length}
          activePage={activePage}
          onButtonClick={handlePageClick}
        />
      </div>
    </div>
  );
};
