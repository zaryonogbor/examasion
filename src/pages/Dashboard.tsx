import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { FileUp, PlayCircle, FileText, CheckCircle, TrendingUp } from 'lucide-react';
import styles from './Dashboard.module.css';

export const Dashboard = () => {
    const navigate = useNavigate();

    return (
        <div className={styles.dashboard}>
            <div className={styles.welcomeSection}>
                <h1>Welcome back, student!</h1>
                <p>You're making great progress. Ready to continue learning?</p>

                <div className={styles.quickActions}>
                    <Button onClick={() => navigate('/documents/upload')} leftIcon={<FileUp size={18} />}>
                        Upload Document
                    </Button>
                    <Button variant="outline" onClick={() => navigate('/practice')} leftIcon={<PlayCircle size={18} />}>
                        Start Practice Test
                    </Button>
                </div>
            </div>

            <div className={styles.statsGrid}>
                <Card>
                    <div className={styles.statCardTitle}>Documents Uploaded</div>
                    <div className={styles.statCardValue}>12</div>
                    <div className={styles.statCardSub}><TrendingUp size={14} /> +2 this week</div>
                </Card>
                <Card>
                    <div className={styles.statCardTitle}>Tests Taken</div>
                    <div className={styles.statCardValue}>28</div>
                    <div className={styles.statCardSub}><TrendingUp size={14} /> +5 this week</div>
                </Card>
                <Card>
                    <div className={styles.statCardTitle}>Average Score</div>
                    <div className={styles.statCardValue}>84%</div>
                    <div className={styles.statCardSub} style={{ color: 'var(--success)' }}>Top 10% of users</div>
                </Card>
            </div>

            <div>
                <h2 className={styles.sectionTitle}>Recent Activity</h2>
                <div className={styles.activityList}>
                    <div className={styles.activityItem}>
                        <div className={styles.activityInfo}>
                            <div className={styles.activityIcon}><CheckCircle size={20} /></div>
                            <div className={styles.activityText}>
                                <h4>Completed "Linear Algebra Midterm Prep" Test</h4>
                                <p>Score: 92% • 2 hours ago</p>
                            </div>
                        </div>
                        <Button variant="ghost" size="sm" onClick={() => navigate('/results/1')}>Review</Button>
                    </div>

                    <div className={styles.activityItem}>
                        <div className={styles.activityInfo}>
                            <div className={styles.activityIcon}><FileText size={20} /></div>
                            <div className={styles.activityText}>
                                <h4>Uploaded "History of Rome - Chapter 4.pdf"</h4>
                                <p>Processed successfully • Yesterday</p>
                            </div>
                        </div>
                        <Button variant="ghost" size="sm" onClick={() => navigate('/documents/1')}>View</Button>
                    </div>

                    <div className={styles.activityItem}>
                        <div className={styles.activityInfo}>
                            <div className={styles.activityIcon}><CheckCircle size={20} /></div>
                            <div className={styles.activityText}>
                                <h4>Completed "Microeconomics Basics" Test</h4>
                                <p>Score: 78% • 2 days ago</p>
                            </div>
                        </div>
                        <Button variant="ghost" size="sm" onClick={() => navigate('/results/2')}>Review</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};
