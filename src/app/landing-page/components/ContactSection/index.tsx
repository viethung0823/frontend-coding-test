'use client';

import { Button } from '@/components';
import useResponsive from '@/hooks/useResponsive';

export default function ContactSection() {
    const { isMobile } = useResponsive();

    return (
        <div
            id="contact-section"
            className={`${isMobile ? 'p-v-10' : 'p-v-40'} container`}
        >
            <div className="contact-section-content d-flex flex-col align-center p-14">
                <h2 className="title-section">Looking for Models? </h2>
                <p className={`${isMobile ? 'm-t-2' : 'm-t-4'} `}>
                    {' '}
                    Find the Perfect Model for Your Brand
                </p>
                <Button
                    type={'default'}
                    size={isMobile ? 'md' : 'lg'}
                    styleType={'fill'}
                    radius={'square'}
                    classNames={`${isMobile ? 'm-t-10' : 'm-t-14'} `}
                >
                    Contact Our Team
                </Button>
            </div>
        </div>
    );
}
