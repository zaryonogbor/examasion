import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Card } from '../components/ui/Card';
import { LogOut, Shield, User, Info, Camera } from 'lucide-react';

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
        <div className="animate-fade-in" style={{ maxWidth: '700px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            <Card padding="lg" hoverable={false}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '3rem' }}>
                    <div
                        onClick={triggerFileInput}
                        onMouseEnter={() => setIsHovering(true)}
                        onMouseLeave={() => setIsHovering(false)}
                        style={{
                            width: '120px',
                            height: '120px',
                            borderRadius: '50%',
                            background: avatarUrl ? `url(${avatarUrl}) center/cover no-repeat` : 'linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%)',
                            color: 'white',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '3.5rem',
                            fontWeight: 800,
                            marginBottom: '1.5rem',
                            boxShadow: '0 10px 25px -5px var(--primary-glow)',
                            fontFamily: 'Outfit, sans-serif',
                            cursor: 'pointer',
                            position: 'relative',
                            overflow: 'hidden',
                            transition: 'transform 0.2s ease',
                            transform: isHovering ? 'scale(1.05)' : 'scale(1)'
                        }}>
                        {!avatarUrl && 'Z'}

                        {isHovering && (
                            <div style={{
                                position: 'absolute',
                                inset: 0,
                                background: 'rgba(0,0,0,0.4)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                backdropFilter: 'blur(2px)'
                            }}>
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
                    <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '0.25rem' }}>Zaryon Ogbor</h2>
                    <p style={{ color: 'var(--text-secondary)', fontWeight: 500 }}>Premium Student Plan</p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', borderBottom: '1px solid var(--border-light)', paddingBottom: '0.75rem' }}>
                        <User size={20} color="var(--primary)" />
                        <h3 style={{ fontSize: '1.25rem', fontWeight: 700 }}>Personal Identity</h3>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                        <Input label="Display Name" defaultValue="Zaryon Ogbor" />
                        <Input label="Student ID" defaultValue="EX-90210" disabled />
                    </div>
                    <Input label="Notification Email" defaultValue="user@example.com" />

                    <div style={{ paddingTop: '1rem', borderTop: '1px solid var(--border-light)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                            <Shield size={20} color="var(--primary)" />
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 700 }}>Security Center</h3>
                        </div>
                        <Button variant="outline">Update Access Password</Button>
                    </div>
                </div>
            </Card>

            <Card padding="lg">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                    <Info size={20} color="var(--text-muted)" />
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 700 }}>Operational Diagnostics</h3>
                </div>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: 1.7 }}>
                    Your session is currently running on the demo cloud environment. All generated questions and documents are processed using the Examasion Core Intelligence engine.
                </p>
                <div style={{ display: 'flex', gap: '1rem' }}>
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
