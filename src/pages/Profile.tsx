import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Card } from '../components/ui/Card';

export const Profile = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Clear auth state
        navigate('/login');
    };

    return (
        <div style={{ maxWidth: '600px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <Card padding="lg">
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '2rem' }}>
                    <div style={{
                        width: '80px',
                        height: '80px',
                        borderRadius: '50%',
                        backgroundColor: 'var(--primary)',
                        color: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '2rem',
                        fontWeight: 600,
                        marginBottom: '1rem'
                    }}>
                        Z
                    </div>
                    <h2>Zaryon Ogbor</h2>
                    <p style={{ color: 'var(--text-secondary)' }}>user@example.com</p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <h3 style={{ fontSize: '1.1rem', borderBottom: '1px solid var(--border)', paddingBottom: '0.5rem' }}>Account Settings</h3>

                    <Input label="Display Name" defaultValue="Zaryon Ogbor" />
                    <Input label="Email Address" defaultValue="user@example.com" disabled />

                    <div style={{ paddingTop: '1rem' }}>
                        <Button variant="outline" fullWidth>Change Password</Button>
                    </div>
                </div>
            </Card>

            <Card padding="lg">
                <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>App Info</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                    This application is a demo frontend. No real data is permanently saved.
                    Authentication and database features require Firebase configuration.
                </p>
                <Button variant="secondary" onClick={handleLogout} fullWidth style={{ color: 'var(--error)', borderColor: 'var(--error)' }}>
                    Log Out
                </Button>
            </Card>
        </div>
    );
};
