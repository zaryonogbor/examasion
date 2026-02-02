import { useState, useEffect } from 'react';
import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { LayoutDashboard, FileText, CheckSquare, MessageSquare, BarChart, Settings as SettingsIcon, Menu, X, ChevronDown, Bell, LogOut } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import styles from './AppLayout.module.css';
import { clsx } from 'clsx';

export const AppLayout = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { } = useTheme();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navItems = [
        { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
        { icon: FileText, label: 'Documents', path: '/documents' },
        { icon: CheckSquare, label: 'Practice Tests', path: '/practice' },
        { icon: MessageSquare, label: 'Chat', path: '/chat' },
        { icon: BarChart, label: 'Analytics', path: '/analytics' },
        { icon: SettingsIcon, label: 'Settings', path: '/settings' },
    ];

    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location.pathname]);

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isMobileMenuOpen]);

    const handleLogout = () => {
        navigate('/login');
    };

    const getPageTitle = () => {
        const item = navItems.find(i => location.pathname.startsWith(i.path));
        if (location.pathname.includes('/test/')) return 'Practice Test';
        if (location.pathname.includes('/results/')) return 'Test Results';
        return item ? item.label : 'Dashboard';
    };

    return (
        <div className={styles.layout}>
            {isMobileMenuOpen && (
                <div
                    className={styles.overlay}
                    onClick={() => setIsMobileMenuOpen(false)}
                    aria-hidden="true"
                />
            )}
            <aside className={clsx(styles.sidebar, isMobileMenuOpen && styles.sidebarOpen)}>
                <div className={styles.sidebarHeader}>
                    <div className={styles.brand}>Examasion</div>
                    <button
                        className={styles.closeButton}
                        onClick={() => setIsMobileMenuOpen(false)}
                        aria-label="Close menu"
                    >
                        <X size={24} />
                    </button>
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
                    <button className={styles.logoutButton} onClick={handleLogout}>
                        <LogOut size={18} />
                        <span>Logout Session</span>
                    </button>
                </div>
            </aside>
            <main className={styles.main}>
                <header className={styles.header}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <button
                            className={styles.menuButton}
                            onClick={() => setIsMobileMenuOpen(true)}
                            aria-label="Open menu"
                        >
                            <Menu size={20} />
                        </button>
                        <h1 className={styles.pageTitle}>{getPageTitle()}</h1>
                    </div>

                    <div className={styles.headerRight}>
                        <button className={styles.notificationButton} aria-label="Notifications">
                            <Bell size={20} />
                            <span className={styles.notificationBadge}></span>
                        </button>
                        <div className={styles.userProfileHeader}>
                            <div className={styles.userInfo}>
                                <div className={styles.userName}>Zaryon Ogbor</div>
                            </div>
                            <div className={styles.avatar}>Z</div>
                            <ChevronDown size={16} color="var(--text-muted)" />
                        </div>
                    </div>
                </header>
                <div className={styles.content}>
                    <Outlet />
                </div>
            </main>
        </div>
    );
};
