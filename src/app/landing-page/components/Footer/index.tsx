'use client';

import Image from 'next/image';
import { Button } from '@/components';
import useResponsive from '@/hooks/useResponsive';

const socialIcon = (
    <div className="d-flex align-center g-8">
        <Image
            src={'/svg/instagram.svg'}
            alt={'instagram'}
            width={24}
            height={24}
        />
        <Image
            src={'/svg/youtube.svg'}
            alt={'youtube'}
            width={24}
            height={24}
        />
        <Image src={'/svg/tiktok.svg'} alt={'tiktok'} width={24} height={24} />
    </div>
);

export default function Footer() {
    const { isMobile } = useResponsive();

    return (
        <footer className={`${isMobile ? 'p-v-20' : ''}`}>
            <div
                className={`container footer-nav d-flex justify-between ${!isMobile ? 'p-v-20' : 'flex-col g-12 flex-wrap'}`}
            >
                <ul>
                    <li className="footer-brand-logo">
                        <Image
                            src={'/svg/brand-logo.svg'}
                            alt="logo"
                            fill
                            className="pos-relative"
                        />
                    </li>
                    <li className="llc-text m-t-8">WELTENTERS FZ LLC</li>
                    <li className="footer-nav-link">
                        <a href="#">Contact Us</a>
                    </li>
                    <li className="footer-nav-link">
                        <a href="#">Privacy Policy</a>
                    </li>
                </ul>
                <ul>
                    <li className="footer-nav-title">For Models</li>
                    <li className="footer-nav-link">
                        <a href="#">Apply Now</a>
                    </li>
                    <li className="footer-nav-link">
                        <a href="#">FAQs</a>
                    </li>
                </ul>
                <ul>
                    <li className="footer-nav-title">For Clients</li>
                    <li className="footer-nav-link">
                        <a href="#">Hire a Model</a>
                    </li>
                    <li className="footer-nav-link">
                        <a href="#">Success Stories</a>
                    </li>
                </ul>
                {isMobile ? (
                    <></>
                ) : (
                    <ul>
                        <li className="footer-nav-title">Social</li>
                        <li className="m-t-8">{socialIcon}</li>
                    </ul>
                )}
            </div>
            {isMobile ? (
                <div className="d-flex align-center container justify-between m-t-12">
                    {socialIcon}
                    <Button
                        type={'transparent'}
                        size={'sm'}
                        styleType={'fill'}
                        radius={'square'}
                        iconEnd={
                            <Image
                                src={'/svg/chevron-down.svg'}
                                alt={'chevron-down'}
                                fill
                            />
                        }
                    >
                        English
                    </Button>
                </div>
            ) : (
                <div className="copyright-row w-100">
                    <div className="d-flex align-center justify-between p-v-8 container">
                        <div
                            className={`d-flex align-center g-4 ${isMobile ? 'flex-col' : ''}`}
                        >
                            <Image
                                src={'/svg/brand-icon.svg'}
                                alt={'brand icon'}
                                width={isMobile ? 52 : 36}
                                height={isMobile ? 52 : 36}
                            />
                            <p>Copyright © 2024 - All rights reserved</p>
                        </div>
                        <Button
                            type={'default'}
                            size={'sm'}
                            styleType={'outline'}
                            radius={'square'}
                            iconEnd={
                                <Image
                                    src={'/svg/chevron-down.svg'}
                                    alt={'chevron-down'}
                                    fill
                                />
                            }
                        >
                            English
                        </Button>
                    </div>
                </div>
            )}
        </footer>
    );
}
