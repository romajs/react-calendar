import './Credits.scss';

import React from 'react';

const Link = ({ href, newWindow = false, children }) => {
  const props = { href };
  if (newWindow) {
    props.target = '_blank';
    props.rel = 'noreferrer';
  }
  return <a {...props}>{children}</a>;
};

export const Credits = () => (
  <div className="credits">
    <p>
      <Link href="https://www.iconfinder.com/icons/299096/calendar_clock_icon" newWindow>
        Icons
      </Link>{' '}
      by{' '}
      <Link href="https://www.iconfinder.com/paomedia" newWindow>
        Paomedia
      </Link>{' '}
      /&nbsp;
      <Link href="https://creativecommons.org/licenses/by/3.0/" newWindow>
        CC BY 3.0
      </Link>
    </p>
  </div>
);
