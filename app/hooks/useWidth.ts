import { useState, useEffect } from 'react';

const useWidth = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
		const handleResize = () => setWidth(window.innerWidth)
		handleResize()
		window.addEventListener('resize', handleResize)
		return () => window.removeEventListener('resize', handleResize)

  }, [])
	return {
		width
	}
};

export default useWidth