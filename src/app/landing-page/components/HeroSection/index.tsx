'use client';

import { Button } from '@/components';
import useResponsive from '@/hooks/useResponsive';

export default function HeroSection() {
    const { isMobile } = useResponsive();

    return (
        <div id="hero-section" className={isMobile ? 'container' : ''}>
            <div className="hero-section-content d-flex align-center flex-col align-start justify-center">
                <h1 className="hero-section-content-title">
                    Unlock Your <br /> Modeling Potential
                </h1>
                <p
                    className={`${isMobile ? 'm-t-4' : 'm-t-12'} hero-section-content-description`}
                >
                    Discover endless opportunities, connect with top agencies,
                    and showcase your talent
                </p>
                <Button
                    type={'primary'}
                    size={isMobile ? 'md' : 'lg'}
                    styleType={'fill'}
                    radius={'square'}
                    classNames={`${isMobile ? 'm-t-4' : 'm-t-12'}`}
                >
                    Apply Now
                </Button>
            </div>
        </div>
    );
}
