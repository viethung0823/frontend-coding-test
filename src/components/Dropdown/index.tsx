'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components';

interface DropdownProps {
    title: string;
    options: string[];
}

const Dropdown: React.FC<DropdownProps> = ({ title, options }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        // setIsOpen(!isOpen);
        // out of scope
    };

    return (
        <div className="dropdown">
            <Button
                type="transparent"
                styleType="fill"
                onClick={toggleDropdown}
                radius="square"
                size="md"
                iconEnd={
                    <Image src={'/svg/chevron-down.svg'} alt="chevron" fill />
                }
            >
                {title}
            </Button>
            {isOpen && (
                <ul className="dropdown-menu">
                    {options.map((option, index) => (
                        <li key={index} className="dropdown-item">
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Dropdown;
