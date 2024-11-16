import * as React from 'react';

import './SplashPagination.scss';

export type SplashPaginationPropsType = {
  total: number;
  activePage: number;
  onButtonClick: (index: number) => void;
};

export const SplashPagination = ({
  total,
  activePage,
  onButtonClick,
}: SplashPaginationPropsType) => (
  <ul className="splash-pagination">
    {[...Array(total)].map((_, i) => (
      <li key={i} className="splash-pagination__item">
        <button
          onClick={() => onButtonClick(i)}
          className={`splash-pagination__button${i === activePage ? ' splash-pagination__button--active' : ''}`}
        />
      </li>
    ))}
  </ul>
);
