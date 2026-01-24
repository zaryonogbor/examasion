import React from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { LayoutDashboard, FileText, CheckSquare, MessageSquare, BarChart, User } from 'lucide-react';
import styles from './AppLayout.module.css';
import { clsx } from 'clsx';

export const AppLayout = () => {
    const location = useLocation();

    const navItems = [
        { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
        { icon: FileText, label: 'Documents', path: '/documents' },
        { icon: CheckSquare, label: 'Practice Tests', path: '/practice' },
        { icon: MessageSquare, label: 'Chat', path: '/chat' },
        { icon: BarChart, label: 'Analytics', path: '/analytics' },
        { icon: User, label: 'Profile', path: '/profile' },
    ];

    const getPageTitle = () => {
        const item = navItems.find(i => location.pathname.startsWith(i.path));
        if (location.pathname.includes('/test/')) return 'Practice Test';
        if (location.pathname.includes('/results/')) return 'Test Results';
        return item ? item.label : 'Dashboard';
    };

    return (
        <div className={styles.layout}>
            <aside className={styles.sidebar}>
                <div className={styles.brand}>
                    Examation
                </div>
                <nav className={styles.nav}>
                    {navItems.map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            className={({ isActive }) => clsx(styles.navItem, isActive && styles.navItemActive)}
                        >
                            <item.icon size={20} />
                            {item.label}
                        </NavLink>
                    ))}
                </nav>
                <div className={styles.footer}>
                    <div className={styles.userProfile}>
                        <div className={styles.avatar}>Z</div>
                        <div style={{ flex: 1, overflow: 'hidden' }}>
                            <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>Zaryon Ogbor</div>
                            <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>user@example.com</div>
                        </div>
                    </div>
                </div>
            </aside>
            <main className={styles.main}>
                <header className={styles.header}>
                    <h3>{getPageTitle()}</h3>
                </header>
                <div className={styles.content}>
                    <Outlet />
                </div>
            </main>
        </div>
    );
};
