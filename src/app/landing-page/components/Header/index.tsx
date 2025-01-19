'use client';

import Image from 'next/image';
import { Dropdown, Button } from '@/components';
import useResponsive from '@/hooks/useResponsive';

interface NavItem {
    title: string;
    dropdownItems: string[];
}

interface HeaderProps {
    navItems: NavItem[];
    desktopCTA: React.ReactNode;
}

export default function Header({ navItems, desktopCTA }: HeaderProps) {
    const { isMobile } = useResponsive();

    return (
        <header className="container p-v-4 d-flex align-center">
            {isMobile && (
                <Button type="icon" styleType="fill" radius="square" size="md">
                    <Image src={'/svg/chevron-left.svg'} alt="chevron" fill />
                </Button>
            )}
            <div className="header-logo">
                <Image
                    src={'/svg/brand-logo.svg'}
                    alt="logo"
                    width={106}
                    height={28}
                />
            </div>
            <nav className="header-nav">
                {!isMobile ? (
                    <ul className="nav-list d-flex align-center g-4">
                        {navItems.map((item, index) => (
                            <li key={index} className="nav-item">
                                {item.dropdownItems.length > 0 ? (
                                    <Dropdown
                                        title={item.title}
                                        options={item.dropdownItems}
                                    />
                                ) : (
                                    <a className="p-h-8 nav-item-link">
                                        {item.title}
                                    </a>
                                )}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <></>
                )}
            </nav>
            {isMobile ? (
                <Button type="icon" styleType="fill" radius="square" size="md">
                    <Image src={'/svg/menu.svg'} alt="menu" fill />
                </Button>
            ) : (
                desktopCTA
            )}
        </header>
    );
}
