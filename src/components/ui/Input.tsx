import React from 'react';
import { clsx } from 'clsx';
import styles from './Input.module.css';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
    label?: string;
    error?: string;
    as?: 'input' | 'textarea';
    inputClassName?: string;
}

export const Input = React.forwardRef<HTMLInputElement | HTMLTextAreaElement, InputProps>(({
    label,
    error,
    className,
    inputClassName,
    id,
    as = 'input',
    ...props
}, ref) => {
    const inputId = id || React.useId();
    const Component = as as any;

    return (
        <div className={clsx(styles.container, className)}>
            {label && <label htmlFor={inputId} className={styles.label}>{label}</label>}
            <div className={styles.inputWrapper}>
                <Component
                    id={inputId}
                    ref={ref}
                    className={clsx(
                        styles.input,
                        error && styles.errorInput,
                        as === 'textarea' && styles.textarea,
                        inputClassName
                    )}
                    {...props}
                />
            </div>
            {error && <span className={styles.errorText}>{error}</span>}
        </div>
    );
});

Input.displayName = 'Input';
