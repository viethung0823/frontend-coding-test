'use client';

import useResponsive from '@/hooks/useResponsive';
import Image from 'next/image';

const whyItems = [
    'Access global opportunities',
    'Join a supportive and professional team',
    'Get featured in high-profile events and campaigns',
];

export default function WhySection() {
    const { isMobile } = useResponsive();

    return (
        <div id="why-section" className={`${isMobile ? 'm-v-10' : ''}`}>
            <div className="why-section-content d-flex align-center flex-col align-start justify-center g-12">
                <h2 className="why-section-content-title">Why Choose</h2>
                <div className="why-section-content-brand-logo">
                    <Image
                        src={'/svg/brand-logo.svg'}
                        alt="logo"
                        fill
                        className="pos-relative"
                    />
                </div>
                <ul className="d-flex flex-col g-6">
                    {whyItems.map((item, index) => (
                        <li key={index} className="d-flex align-center g-5">
                            <Image
                                src={'/svg/checkbox.svg'}
                                alt="checkbox"
                                width={isMobile ? 16 : 24}
                                height={isMobile ? 16 : 24}
                            />
                            <p className="why-section-content-item">{item}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
