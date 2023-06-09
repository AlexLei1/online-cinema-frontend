import { useState, useEffect } from 'react';
const SCROLL_UP = 'up';
const SCROLL_DOWN = 'down';
const SCROLL_TOP = 'top';

export const useScrollDirection = () => {
  const [scrollDir, setScrollDir] = useState(SCROLL_TOP);
	
	let lastScrollY = window.pageYOffset;

  const updateScrollDir = () => {
		const scrollY = window.pageYOffset;
		setScrollDir(scrollY === 0 ? SCROLL_TOP : (scrollY > lastScrollY ) ? SCROLL_DOWN : SCROLL_UP);
		lastScrollY = scrollY > 0 ? scrollY : 0;
	};

	const onScroll = () => {
		window.requestAnimationFrame(updateScrollDir);
	};

  useEffect(() => {
    window.addEventListener('scroll', onScroll) 
    return () => window.removeEventListener('scroll', onScroll);
  });

  return scrollDir;
};