import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Card } from '../components/ui/Card';
import { LogOut, Shield, User, Camera, Sun, Moon, Bell, Monitor, CreditCard } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import styles from './Settings.module.css';

export const Settings = () => {
    const navigate = useNavigate();
    const { theme, toggleTheme } = useTheme();
    const [avatarUrl, setAvatarUrl] = useState<string | null>(null);
    const [isHovering, setIsHovering] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setAvatarUrl(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const triggerFileInput = () => {
        fileInputRef.current?.click();
    };

    const handleLogout = () => {
        navigate('/login');
    };

    return (
        <div className={`animate-fade-in ${styles.container}`}>
            {/* Header Section */}
            <div className={styles.settingsHeader}>
                <h2 className={styles.pageTitle}>Account Settings</h2>
                <p className={styles.pageSubtitle}>Manage your profile, security, and application preferences.</p>
            </div>

            <div className={styles.settingsGrid}>
                {/* Left Column - Main Sections */}
                <div className={styles.mainContent}>
                    {/* Profile Section */}
                    <Card padding="lg" className={styles.settingCard}>
                        <div className={styles.sectionHeader}>
                            <User size={20} className={styles.sectionIcon} />
                            <div>
                                <h3 className={styles.sectionTitle}>Profile Information</h3>
                                <p className={styles.sectionDescription}>Update your personal details and how others see you.</p>
                            </div>
                        </div>

                        <div className={styles.profileEditRow}>
                            <div
                                className={styles.avatarContainer}
                                onClick={triggerFileInput}
                                onMouseEnter={() => setIsHovering(true)}
                                onMouseLeave={() => setIsHovering(false)}
                                style={{
                                    background: avatarUrl ? `url(${avatarUrl}) center/cover no-repeat` : undefined
                                }}>
                                {!avatarUrl && 'Z'}
                                {isHovering && (
                                    <div className={styles.avatarOverlay}>
                                        <Camera size={24} color="white" />
                                    </div>
                                )}
                            </div>
                            <div className={styles.profileMeta}>
                                <Button variant="secondary" onClick={triggerFileInput} size="sm">Change Photo</Button>
                                <p className={styles.avatarHelpText}>JPG, GIF or PNG. Max size 2MB</p>
                            </div>
                        </div>

                        <input
                            type="file"
                            ref={fileInputRef}
                            onChange={handleFileChange}
                            accept="image/*"
                            style={{ display: 'none' }}
                        />

                        <div className={styles.formGrid}>
                            <Input label="Full Name" defaultValue="Zaryon Ogbor" />
                            <Input label="Username" defaultValue="zaryon_o" />
                            <div className={styles.fullWidth}>
                                <Input label="Email Address" defaultValue="user@example.com" />
                            </div>
                            <div className={styles.fullWidth}>
                                <Input
                                    label="Bio"
                                    as="textarea"
                                    placeholder="Tell us a bit about yourself..."
                                    defaultValue="Passionate student focused on cognitive psychology and neuroplasticity."
                                />
                            </div>
                        </div>

                        <div className={styles.cardFooter}>
                            <Button variant="primary">Save Changes</Button>
                        </div>
                    </Card>

                    {/* Security Section */}
                    <Card padding="lg" className={styles.settingCard}>
                        <div className={styles.sectionHeader}>
                            <Shield size={20} className={styles.sectionIcon} />
                            <div>
                                <h3 className={styles.sectionTitle}>Security & Password</h3>
                                <p className={styles.sectionDescription}>Maintain the security of your account with a strong password.</p>
                            </div>
                        </div>

                        <div className={styles.formGrid}>
                            <Input label="Current Password" type="password" placeholder="••••••••" />
                            <Input label="New Password" type="password" placeholder="••••••••" />
                            <div className={styles.fullWidth}>
                                <Input label="Confirm New Password" type="password" placeholder="••••••••" />
                            </div>
                        </div>

                        <div className={styles.cardFooter}>
                            <Button variant="outline">Update Password</Button>
                        </div>
                    </Card>

                    {/* Notifications Section */}
                    <Card padding="lg" className={styles.settingCard}>
                        <div className={styles.sectionHeader}>
                            <Bell size={20} className={styles.sectionIcon} />
                            <div>
                                <h3 className={styles.sectionTitle}>Notifications</h3>
                                <p className={styles.sectionDescription}>Choose what you want to be notified about.</p>
                            </div>
                        </div>

                        <div className={styles.settingList}>
                            <div className={styles.settingItem}>
                                <div className={styles.settingLabel}>
                                    <div>Email Notifications</div>
                                    <p>Receive updates about your documents and tests.</p>
                                </div>
                                <div className={styles.toggleWrapper}>
                                    <input type="checkbox" defaultChecked className={styles.toggleInput} />
                                </div>
                            </div>
                            <div className={styles.settingItem}>
                                <div className={styles.settingLabel}>
                                    <div>Push Notifications</div>
                                    <p>Get instant alerts on your mobile device.</p>
                                </div>
                                <div className={styles.toggleWrapper}>
                                    <input type="checkbox" className={styles.toggleInput} />
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>

                {/* Right Column - Side Settings */}
                <div className={styles.sideContent}>
                    {/* Appearance Section */}
                    <Card padding="lg" className={styles.settingCard}>
                        <div className={styles.sectionHeader}>
                            <Monitor size={20} className={styles.sectionIcon} />
                            <div>
                                <h3 className={styles.sectionTitle}>Appearance</h3>
                                <p className={styles.sectionDescription}>Customize your workspace theme.</p>
                            </div>
                        </div>

                        <div className={styles.appearanceList}>
                            <div
                                className={`${styles.themeOption} ${theme === 'light' ? styles.themeOptionActive : ''}`}
                                onClick={() => theme !== 'light' && toggleTheme()}
                            >
                                <Sun size={18} />
                                <span>Light Mode</span>
                            </div>
                            <div
                                className={`${styles.themeOption} ${theme === 'dark' ? styles.themeOptionActive : ''}`}
                                onClick={() => theme !== 'dark' && toggleTheme()}
                            >
                                <Moon size={18} />
                                <span>Dark Mode</span>
                            </div>
                        </div>
                    </Card>

                    {/* Subscription Section */}
                    <Card padding="lg" className={styles.settingCard}>
                        <div className={styles.sectionHeader}>
                            <CreditCard size={20} className={styles.sectionIcon} />
                            <div>
                                <h3 className={styles.sectionTitle}>Subscription</h3>
                                <p className={styles.sectionDescription}>Current plan and billing details.</p>
                            </div>
                        </div>

                        <div className={styles.planInfo}>
                            <div className={styles.planBadge}>Premium</div>
                            <p className={styles.planPrice}>$9.99 / month</p>
                            <p className={styles.nextBilling}>Next billing date: March 12, 2026</p>
                        </div>

                        <Button variant="secondary" fullWidth className={styles.managePlanBtn}>Manage Subscription</Button>
                    </Card>

                    {/* Account Actions */}
                    <div className={styles.accountActions}>
                        <Button
                            variant="danger"
                            fullWidth
                            leftIcon={<LogOut size={18} />}
                            onClick={handleLogout}
                        >
                            Log Out
                        </Button>
                        <p className={styles.accountHelp}>Member since October 2023</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
