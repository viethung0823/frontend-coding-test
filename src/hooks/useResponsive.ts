import { useState, useEffect } from 'react';

const useResponsive = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 540);
        };

        handleResize(); // Check initial screen size
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return { isMobile };
};

export default useResponsive;
