
import { useState, useEffect } from 'react';

const useResize = () => {
  const [isWidth, setIsWidth] = useState(false);

  useEffect(() => {
    const handleResize = (event: any) => {
			const width = event.target.innerWidth >= 1200
      setIsWidth(width);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return {
    isWidth
  };
};

export default useResize