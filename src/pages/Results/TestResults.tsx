import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/ui/Button';
import { PlayCircle, ArrowLeft } from 'lucide-react';
import styles from './Results.module.css';

export const TestResults = () => {
    const navigate = useNavigate();

    return (
        <div className={styles.resultsContainer}>
            <div className={styles.scoreCard}>
                <div className={styles.scoreCircle}>
                    <div className={styles.scoreValue}>80%</div>
                    <div className={styles.scoreLabel}>Score</div>
                </div>
                <h2>Good Job!</h2>
                <p className="text-secondary">You answered 4 out of 5 questions correctly.</p>
                <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
                    <Button variant="outline" onClick={() => navigate('/dashboard')} leftIcon={<ArrowLeft size={18} />}>
                        Back to Dashboard
                    </Button>
                    <Button onClick={() => navigate('/practice')} leftIcon={<PlayCircle size={18} />}>
                        Start New Test
                    </Button>
                </div>
            </div>

            <div className={styles.reviewSection}>
                <h2 className="sectionTitle">Review Answers</h2>

                <div className={styles.reviewItem}>
                    <div className={styles.questionHeader}>
                        <div className={`${styles.indicator} ${styles.indicatorCorrect}`}>Correct</div>
                        <div style={{ fontWeight: 500, fontSize: '1.1rem' }}>
                            Which of the following best describes the "Structuralist" school of psychology?
                        </div>
                    </div>
                    <div style={{ paddingLeft: '4.5rem' }}>
                        <div style={{ marginBottom: '0.5rem' }}><strong>Your Answer:</strong> Analyzes consciousness into its basic elements</div>
                    </div>
                    <div className={styles.explanation}>
                        <div className={styles.explanationTitle}>Explanation</div>
                        <p>Structuralism, founded by Wilhelm Wundt and Edward Titchener, focused on breaking down mental processes into the most basic components.</p>
                    </div>
                </div>

                <div className={styles.reviewItem}>
                    <div className={styles.questionHeader}>
                        <div className={`${styles.indicator} ${styles.indicatorWrong}`}>Incorrect</div>
                        <div style={{ fontWeight: 500, fontSize: '1.1rem' }}>
                            Who is considered the father of Psychoanalysis?
                        </div>
                    </div>
                    <div style={{ paddingLeft: '4.5rem' }}>
                        <div style={{ marginBottom: '0.5rem', color: 'var(--error)' }}><strong>Your Answer:</strong> William James</div>
                        <div style={{ color: 'var(--success)' }}><strong>Correct Answer:</strong> Sigmund Freud</div>
                    </div>
                    <div className={styles.explanation}>
                        <div className={styles.explanationTitle}>Explanation</div>
                        <p>Sigmund Freud is the founder of psychoanalysis, a clinical method for treating psychopathology through dialogue between a patient and a psychoanalyst.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
