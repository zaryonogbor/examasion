import React from 'react';
import { clsx } from 'clsx';
import styles from './Button.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
    size?: 'sm' | 'md' | 'lg';
    fullWidth?: boolean;
    isLoading?: boolean;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
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
    rightIcon,
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
            {isLoading && <span className={styles.spinner}></span>}
            {!isLoading && leftIcon && <span className={styles.leftIcon}>{leftIcon}</span>}
            <span className={styles.content}>{children}</span>
            {!isLoading && rightIcon && <span className={styles.rightIcon}>{rightIcon}</span>}
        </button>
    );
});

Button.displayName = 'Button';
