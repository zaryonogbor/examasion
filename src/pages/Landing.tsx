import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { FileText, CheckCircle, MessageSquare } from 'lucide-react';
import styles from './Landing.module.css';

export const Landing = () => {
    const navigate = useNavigate();

    return (
        <div className={styles.landing}>
            <header className={styles.header}>
                <div className={styles.brand}>Examation</div>
                <div className={styles.navLinks}>
                    <Button variant="ghost" onClick={() => navigate('/login')}>Log In</Button>
                    <Button onClick={() => navigate('/signup')}>Sign Up</Button>
                </div>
            </header>

            <section className={styles.hero}>
                <h1 className={styles.heroTitle}>
                    Master your studies with <span className={styles.highlight}>AI-powered</span> practice.
                </h1>
                <p className={styles.heroSubtitle}>
                    Upload your course materials, generate custom CBT exams, and chat with your content to fill knowledge gaps instantly.
                </p>
                <div className={styles.ctaGroup}>
                    <Button onClick={() => navigate('/signup')} style={{ padding: '0.75rem 2rem', fontSize: '1.1rem' }}>Get Started for Free</Button>
                    <Button variant="outline" onClick={() => navigate('/login')} style={{ padding: '0.75rem 2rem', fontSize: '1.1rem' }}>Log In</Button>
                </div>
            </section>

            <section className={styles.features}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>How it Works</h2>
                    <div className={styles.featureGrid}>
                        <div className={styles.featureCard}>
                            <FileText size={40} className={styles.featureIcon} />
                            <h3>1. Upload Materials</h3>
                            <p>Drag and drop your PDFs, lecture notes, or slides. We support most document formats.</p>
                        </div>
                        <div className={styles.featureCard}>
                            <CheckCircle size={40} className={styles.featureIcon} />
                            <h3>2. Take Practice Tests</h3>
                            <p>Generate CBT-style exams tailored to your content. Choose your difficulty and question types.</p>
                        </div>
                        <div className={styles.featureCard}>
                            <MessageSquare size={40} className={styles.featureIcon} />
                            <h3>3. Review & Chat</h3>
                            <p>Get instant feedback with detailed explanations. Chat with your documents to clarify doubts.</p>
                        </div>
                    </div>
                </div>
            </section>

            <footer className={styles.footer}>
                © {new Date().getFullYear()} Examation. All rights reserved.
            </footer>
        </div>
    );
};
