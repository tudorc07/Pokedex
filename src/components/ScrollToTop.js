import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { scrollToTopStyles } from './scrollToTopStyles';
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';

const ScrollToTop = () => {
  const [isButtonVisible, setIsButtonVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      window.scrollY > 1200
        ? setIsButtonVisible(true)
        : setIsButtonVisible(false);
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    isButtonVisible && (
      <Link smooth={true} to="header" css={scrollToTopStyles}>
        Top
      </Link>
    )
  );
};

export default ScrollToTop;
