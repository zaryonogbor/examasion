import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import styles from './Auth.module.css';

export const Signup = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords don't match");
            return;
        }
        setLoading(true);
        // Simulate signup delay
        setTimeout(() => {
            setLoading(false);
            navigate('/dashboard');
        }, 1000);
    };

    return (
        <div className={styles.authContainer}>
            <div className={styles.authCard}>
                <h1 className={styles.title}>Create Account</h1>
                <p className={styles.subtitle}>Start mastering your subjects today</p>

                <form className={styles.form} onSubmit={handleSubmit}>
                    <Input
                        label="Email"
                        type="email"
                        placeholder="you@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <Input
                        label="Password"
                        type="password"
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <Input
                        label="Confirm Password"
                        type="password"
                        placeholder="••••••••"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                        error={confirmPassword && password !== confirmPassword ? "Passwords do not match" : undefined}
                    />
                    <Button type="submit" fullWidth isLoading={loading}>
                        Sign Up
                    </Button>
                </form>

                <div className={styles.footer}>
                    Already have an account? <Link to="/login" className={styles.link}>Log In</Link>
                </div>
            </div>
        </div>
    );
};
