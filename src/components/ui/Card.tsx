import React from 'react';
import { clsx } from 'clsx';
import styles from './Card.module.css';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    padding?: 'none' | 'sm' | 'md' | 'lg';
    hoverable?: boolean;
}

export const Card = ({
    children,
    padding = 'md',
    hoverable = false,
    className,
    ...props
}: CardProps) => {
    return (
        <div
            className={clsx(
                styles.card,
                styles[`padding-${padding}`],
                hoverable && styles.hoverable,
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
};
