import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/ui/Button';
import { ArrowLeft, ArrowRight, RotateCcw, CheckCircle2, XCircle, Sparkles } from 'lucide-react';
import styles from './Results.module.css';

export const TestResults = () => {
    const navigate = useNavigate();

    return (
        <div className={styles.resultsContainer}>
            <div className={styles.scoreCard}>
                <div className={styles.scoreCardContent}>
                    <div className={styles.scoreBox}>
                        <div className={styles.scoreValue}>80%</div>
                        <div className={styles.scoreLabel}>Accuracy</div>
                    </div>

                    <div className={styles.scoreInfo}>
                        <h2>Performance Summary</h2>
                        <p>Incredible progress! You've mastered the core concepts of this material. Continue at this pace to guarantee exam success.</p>

                        <div className={styles.scoreActions}>
                            <Button
                                variant="ghost"
                                onClick={() => navigate('/dashboard')}
                                leftIcon={<ArrowLeft size={18} />}
                                className={styles.dashboardBtn}
                            >
                                Dashboard
                            </Button>
                            <Button
                                onClick={() => navigate('/practice')}
                                className={styles.retakeBtn}
                                leftIcon={<RotateCcw size={18} />}
                            >
                                Retake session
                            </Button>
                            <Button
                                onClick={() => navigate('/documents')}
                                className={styles.nextBtn}
                                rightIcon={<ArrowRight size={18} />}
                            >
                                Explore More
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.reviewSection}>
                <div className={styles.reviewHeader}>
                    <h2 className={styles.sectionTitle}>Analysis & Explanations</h2>
                    <p className={styles.sectionSubtitle}>Detailed breakdown of your performance with AI-driven insights.</p>
                </div>

                <div className={styles.reviewGrid}>
                    <div className={styles.reviewItem}>
                        <div className={styles.reviewItemHeader}>
                            <div className={styles.itemMeta}>
                                <span className={styles.questionNumber}>Question 1</span>
                                <div className={`${styles.statusBadge} ${styles.statusCorrect}`}>
                                    <CheckCircle2 size={14} />
                                    <span>Correct</span>
                                </div>
                            </div>
                            <h3 className={styles.questionText}>
                                Which of the following best describes the "Structuralist" school of psychology?
                            </h3>
                        </div>

                        <div className={styles.answerContent}>
                            <div className={styles.answerBlock}>
                                <div className={styles.answerLabel}>Your Response</div>
                                <div className={`${styles.answerValue} ${styles.valueCorrect}`}>
                                    Analyzes consciousness into its basic elements
                                </div>
                            </div>
                        </div>

                        <div className={styles.explanationBox}>
                            <div className={styles.explanationHeader}>
                                <Sparkles size={16} className={styles.aiIcon} />
                                <span>AI Insight</span>
                            </div>
                            <p className={styles.explanationText}>
                                Structuralism, founded by Wilhelm Wundt, used introspection to map out the structure of the mind. You correctly identified the reductionist nature of this school.
                            </p>
                        </div>
                    </div>

                    <div className={styles.reviewItem}>
                        <div className={styles.reviewItemHeader}>
                            <div className={styles.itemMeta}>
                                <span className={styles.questionNumber}>Question 2</span>
                                <div className={`${styles.statusBadge} ${styles.statusWrong}`}>
                                    <XCircle size={14} />
                                    <span>Incorrect</span>
                                </div>
                            </div>
                            <h3 className={styles.questionText}>
                                Who is considered the father of Psychoanalysis?
                            </h3>
                        </div>

                        <div className={styles.answerContent}>
                            <div className={styles.answerGrid}>
                                <div className={styles.answerBlock}>
                                    <div className={styles.answerLabel}>Your Response</div>
                                    <div className={`${styles.answerValue} ${styles.valueWrong}`}>
                                        William James
                                    </div>
                                </div>
                                <div className={styles.answerBlock}>
                                    <div className={styles.answerLabel}>Correct Answer</div>
                                    <div className={`${styles.answerValue} ${styles.valueSuccess}`}>
                                        Sigmund Freud
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.explanationBox}>
                            <div className={styles.explanationHeader}>
                                <Sparkles size={16} className={styles.aiIcon} />
                                <span>AI Insight</span>
                            </div>
                            <p className={styles.explanationText}>
                                Sigmund Freud developed psychoanalysis. William James actually founded "Functionalism". Focus on the distinctions between these early pioneers for your midterm.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};
