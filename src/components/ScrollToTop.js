import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';

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
      <Link
        smooth={true}
        to="header"
        className="fixed bottom-4 right-4 md:right-24 bg-black text-whiteSecondary w-10 md:w-40 p-2 rounded-xl flex justify-center items-center capitalize cursor-pointer"
      >
        Top
      </Link>
    )
  );
};

export default ScrollToTop;
