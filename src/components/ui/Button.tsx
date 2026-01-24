import React from 'react';
import { clsx } from 'clsx';
import styles from './Button.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    fullWidth?: boolean;
    isLoading?: boolean;
    leftIcon?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({
    children,
    variant = 'primary',
    size = 'md',
    fullWidth,
    isLoading,
    className,
    disabled,
    leftIcon,
    ...props
}, ref) => {
    return (
        <button
            ref={ref}
            className={clsx(
                styles.button,
                styles[variant],
                styles[size],
                fullWidth && styles.fullWidth,
                (disabled || isLoading) && styles.disabled,
                className
            )}
            disabled={disabled || isLoading}
            {...props}
        >
            {isLoading && <span className="animate-spin">⌛</span>}
            {!isLoading && leftIcon && <span className="icon">{leftIcon}</span>}
            {children}
        </button>
    );
});

Button.displayName = 'Button';
