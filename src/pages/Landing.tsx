import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { FileText, CheckCircle, MessageSquare, ArrowRight, Sparkles } from 'lucide-react';
import styles from './Landing.module.css';

export const Landing = () => {
    const navigate = useNavigate();

    return (
        <div className={styles.landing}>
            <header className={styles.header}>
                <div className={styles.brand}>Examasion</div>
                <div className={styles.navLinks}>
                    <Button variant="ghost" onClick={() => navigate('/login')}>Log In</Button>
                    <Button variant="primary" size="md" onClick={() => navigate('/signup')}>Sign Up Free</Button>
                </div>
            </header>

            <section className={styles.hero}>
                <div className="animate-fade-in">
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', background: 'rgba(99,102,241,0.08)', borderRadius: '99px', color: 'var(--primary)', fontWeight: 600, fontSize: '0.875rem', marginBottom: '2rem' }}>
                        <Sparkles size={16} />
                        New: AI-Powered Study Paths
                    </div>
                    <h1 className={styles.heroTitle}>
                        Master any subject with <span className={styles.highlight}>Intelligence</span>
                    </h1>
                    <p className={styles.heroSubtitle}>
                        Upload documents, generate instant CBT assessments, and bridge knowledge gaps with your personal AI study assistant.
                    </p>
                    <div className={styles.ctaGroup}>
                        <Button
                            className={styles.primaryCta}
                            onClick={() => navigate('/signup')}
                            rightIcon={<ArrowRight size={20} />}
                        >
                            Start Learning Now
                        </Button>
                        <Button
                            variant="outline"
                            className={styles.outlineCta}
                            onClick={() => navigate('/login')}
                        >
                            Watch Demo
                        </Button>
                    </div>
                </div>
            </section>

            <section className={styles.features}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>Built for the modern student</h2>
                    <div className={styles.featureGrid}>
                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>
                                <FileText size={32} />
                            </div>
                            <h3>Smart Analysis</h3>
                            <p>Our AI multi-passes your PDFs and slides to extract core concepts and hidden details instantly.</p>
                        </div>
                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>
                                <CheckCircle size={32} />
                            </div>
                            <h3>Adaptive CBT</h3>
                            <p>Experience realistic exam simulations that adapt to your performance levels and target your weaknesses.</p>
                        </div>
                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>
                                <MessageSquare size={32} />
                            </div>
                            <h3>Content Chat</h3>
                            <p>Never get stuck again. Chat directly with your study materials to get instant clarifications on complex topics.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section style={{ padding: '8rem 5%', textAlign: 'center', background: 'white' }}>
                <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1.5rem' }}>Ready to conquer your exams?</h2>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem' }}>Join thousands of students who are using AI to optimize their study time and achieve top grades.</p>
                <Button size="lg" onClick={() => navigate('/signup')} className={styles.primaryCta}>Join Examasion Today</Button>
            </section>

            <footer className={styles.footer}>
                <div style={{ marginBottom: '1rem', fontWeight: 700, color: 'var(--text-main)' }}>Examasion</div>
                <p>© {new Date().getFullYear()} Examasion AI. Empowering students with cutting-edge technology.</p>
            </footer>
        </div>
    );
};
