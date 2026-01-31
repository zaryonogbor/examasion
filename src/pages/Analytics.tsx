import { Card } from '../components/ui/Card';
import { BarChart, Clock, Award, AlertCircle } from 'lucide-react';
import styles from './Analytics.module.css';

export const Analytics = () => {
    return (
        <div className="animate-fade-in">
            <div className={styles.analyticsGrid}>
                <Card padding="lg" hoverable>
                    <div className={styles.statHeader}>
                        <div className={`${styles.iconWrapper} ${styles.blueIcon}`}>
                            <Award size={28} />
                        </div>
                        <div className={styles.statInfo}>
                            <div className={styles.label}>Average Score</div>
                            <div className={styles.value}>84%</div>
                        </div>
                    </div>
                    <div className={styles.progressBar}>
                        <div className={styles.progressFill} style={{ width: '84%' }}></div>
                    </div>
                </Card>

                <Card padding="lg" hoverable>
                    <div className={styles.statHeader}>
                        <div className={`${styles.iconWrapper} ${styles.greenIcon}`}>
                            <BarChart size={28} />
                        </div>
                        <div className={styles.statInfo}>
                            <div className={styles.label}>Tests Completed</div>
                            <div className={styles.value}>28</div>
                        </div>
                    </div>
                    <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                        <span style={{ color: 'var(--success)', fontWeight: 600 }}>+5</span> this week
                    </p>
                </Card>

                <Card padding="lg" hoverable>
                    <div className={styles.statHeader}>
                        <div className={`${styles.iconWrapper} ${styles.yellowIcon}`}>
                            <Clock size={28} />
                        </div>
                        <div className={styles.statInfo}>
                            <div className={styles.label}>Study Time</div>
                            <div className={styles.value}>12h 45m</div>
                        </div>
                    </div>
                    <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                        Focus level: <span style={{ fontWeight: 600 }}>High</span>
                    </p>
                </Card>
            </div>

            <div className={styles.detailsGrid}>
                <Card padding="lg">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                        <AlertCircle size={20} color="var(--error)" />
                        <h3 className={styles.sectionHeader} style={{ marginBottom: 0, paddingBottom: 0, borderBottom: 'none' }}>
                            Areas for Improvement
                        </h3>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <div className={styles.topicItem}>
                            <span className={styles.topicName}>Organic Chemistry - Nomenclature</span>
                            <span className={styles.topicScore} style={{ color: 'var(--error)' }}>45%</span>
                        </div>
                        <div className={styles.topicItem}>
                            <span className={styles.topicName}>Calculus - Integration by Parts</span>
                            <span className={styles.topicScore} style={{ color: 'var(--warning)' }}>62%</span>
                        </div>
                        <div className={styles.topicItem}>
                            <span className={styles.topicName}>History - Industrial Revolution</span>
                            <span className={styles.topicScore} style={{ color: 'var(--warning)' }}>68%</span>
                        </div>
                    </div>
                </Card>

                <Card padding="lg">
                    <h3 className={styles.sectionHeader}>Performance History</h3>
                    <div className={styles.performanceList}>
                        {[92, 78, 85, 88, 72].map((score, i) => (
                            <div key={i} className={styles.performanceRow}>
                                <div className={styles.testLabel}>Test #{5 - i}</div>
                                <div className={styles.perfBar}>
                                    <div className={styles.perfFill} style={{
                                        width: `${score}%`,
                                        backgroundColor: score >= 80 ? 'var(--success)' : score >= 60 ? 'var(--warning)' : 'var(--error)'
                                    }}></div>
                                </div>
                                <div className={styles.perfValue}>{score}%</div>
                            </div>
                        ))}
                    </div>
                </Card>
            </div>
        </div>
    );
};
