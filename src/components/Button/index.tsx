import React from 'react';

interface ButtonProps {
    type: 'primary' | 'default' | 'transparent' | 'icon';
    size: 'xs' | 'sm' | 'md' | 'lg';
    styleType: 'fill' | 'outline';
    radius: 'square' | 'circle';
    isDisabled?: boolean;
    classNames?: string; // Make classNames optional
    iconStart?: React.ReactNode;
    iconEnd?: React.ReactNode;
    onClick?: () => void;
    children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
    type,
    size,
    styleType,
    radius,
    isDisabled = false,
    classNames = '', // Default to an empty string
    iconStart,
    iconEnd,
    onClick,
    children,
}) => {
    return (
        <button
            className={`btn btn-${type} btn-${size} btn-${styleType} btn-${radius} ${classNames}`}
            onClick={onClick}
            disabled={isDisabled}
        >
            {iconStart && <span className="btn-icon">{iconStart}</span>}
            {type === 'icon' ? (
                <span className="btn-icon">{children}</span>
            ) : (
                children
            )}
            {iconEnd && <span className="btn-icon">{iconEnd}</span>}
        </button>
    );
};

export default Button;
