import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/ui/Button';
import { ArrowLeft, ArrowRight, RotateCcw } from 'lucide-react';
import styles from './Results.module.css';

export const TestResults = () => {
    const navigate = useNavigate();

    return (
        <div className={styles.resultsContainer}>
            <div className={styles.scoreCard}>
                <div className={styles.scoreCircle}>
                    <div className={styles.scoreValue}>80%</div>
                    <div className={styles.scoreLabel}>Final Score</div>
                </div>
                <h2>Fantastic Effort!</h2>
                <p>You've mastered these concepts. Ready to tackle something new or refine your score?</p>
                <div style={{ display: 'flex', gap: '1.25rem', marginTop: '1.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                    <Button
                        variant="ghost"
                        onClick={() => navigate('/dashboard')}
                        leftIcon={<ArrowLeft size={20} />}
                        style={{ color: 'white' }}
                    >
                        Back to Dashboard
                    </Button>
                    <Button
                        onClick={() => navigate('/practice')}
                        style={{ background: 'white', color: 'var(--primary)' }}
                        leftIcon={<RotateCcw size={20} />}
                    >
                        Retake Test
                    </Button>
                    <Button
                        onClick={() => navigate('/documents')}
                        style={{ background: 'rgba(255,255,255,0.2)', color: 'white', border: '1px solid rgba(255,255,255,0.4)' }}
                        rightIcon={<ArrowRight size={20} />}
                    >
                        Next Topic
                    </Button>
                </div>
            </div>

            <div className={styles.reviewSection}>
                <h2 className="sectionTitle">Analysis & Explanations</h2>

                <div className={styles.reviewItem}>
                    <div className={styles.questionHeader}>
                        <div className={`${styles.indicator} ${styles.indicatorCorrect}`}>Correct</div>
                        <div className={styles.questionText}>
                            Which of the following best describes the "Structuralist" school of psychology?
                        </div>
                    </div>
                    <div className={styles.answerRow}>
                        <div><span className={styles.answerLabel}>Your Choice:</span> Analyzes consciousness into its basic elements</div>
                    </div>
                    <div className={styles.explanation}>
                        <div className={styles.explanationTitle}>AI Insight</div>
                        <p>Structuralism, founded by Wilhelm Wundt, used introspection to map out the structure of the mind. You correctly identified the reductionist nature of this school.</p>
                    </div>
                </div>

                <div className={styles.reviewItem}>
                    <div className={styles.questionHeader}>
                        <div className={`${styles.indicator} ${styles.indicatorWrong}`}>Incorrect</div>
                        <div className={styles.questionText}>
                            Who is considered the father of Psychoanalysis?
                        </div>
                    </div>
                    <div className={styles.answerRow}>
                        <div style={{ color: 'var(--error)' }}><span className={styles.answerLabel}>Your Choice:</span> William James</div>
                        <div style={{ color: 'var(--success)', fontWeight: 700 }}><span className={styles.answerLabel}>Correct Answer:</span> Sigmund Freud</div>
                    </div>
                    <div className={styles.explanation}>
                        <div className={styles.explanationTitle}>AI Insight</div>
                        <p>Sigmund Freud developed psychoanalysis. William James actually founded "Functionalism". Focus on the distinctions between these early pioneers for your midterm.</p>
                    </div>
                </div>
            </div>
        </div >
    );
};
