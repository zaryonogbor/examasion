import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Card } from '../components/ui/Card';
import { LogOut, Shield, User, Info, Camera } from 'lucide-react';
import styles from './Profile.module.css';

export const Profile = () => {
    const navigate = useNavigate();
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
            <Card padding="lg" hoverable={false}>
                <div className={styles.headerSection}>
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
                                <Camera size={32} color="white" />
                            </div>
                        )}
                    </div>
                    <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        accept="image/*"
                        style={{ display: 'none' }}
                    />
                    <h2 className={styles.userName}>Zaryon Ogbor</h2>
                    <p className={styles.userPlan}>Premium Student Plan</p>
                </div>

                <div className={styles.formSection}>
                    <div className={styles.sectionHeader}>
                        <User size={20} color="var(--primary)" />
                        <h3 className={styles.sectionTitle}>Personal Identity</h3>
                    </div>

                    <div className={styles.inputGrid}>
                        <Input label="Display Name" defaultValue="Zaryon Ogbor" className={styles.premiumInput} />
                        <Input label="Student ID" defaultValue="EX-90210" disabled className={styles.premiumInput} />
                    </div>
                    <Input label="Notification Email" defaultValue="user@example.com" className={styles.premiumInput} />

                    <div className={styles.securitySection}>
                        <div className={styles.securityHeader}>
                            <Shield size={20} color="var(--primary)" />
                            <h3 className={styles.sectionTitle}>Security Center</h3>
                        </div>
                        <Button variant="outline">Update Access Password</Button>
                    </div>
                </div>
            </Card>

            <Card padding="lg">
                <div className={styles.sectionHeader} style={{ borderBottom: 'none', marginBottom: '1rem', paddingBottom: 0 }}>
                    <Info size={20} color="var(--text-muted)" />
                    <h3 className={styles.sectionTitle}>Operational Diagnostics</h3>
                </div>
                <p className={styles.infoText}>
                    Your session is currently running on the demo cloud environment. All generated questions and documents are processed using the Examasion Core Intelligence engine.
                </p>
                <div className={styles.actionRow}>
                    <Button
                        variant="danger"
                        onClick={handleLogout}
                        fullWidth
                        leftIcon={<LogOut size={18} />}
                    >
                        Terminate Session
                    </Button>
                    <Button variant="secondary" fullWidth>Check for Updates</Button>
                </div>
            </Card>
        </div>
    );
};
