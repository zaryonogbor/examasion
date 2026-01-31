import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/ui/Button';
import styles from './Test.module.css';

const mockQuestions = [
    {
        id: '1',
        text: 'Which of the following best describes the "Structuralist" school of psychology?',
        options: [
            'Focuses on observable behavior only',
            'Analyzes consciousness into its basic elements',
            'Emphasizes the adaptive purpose of mind and behavior',
            'Studies the whole of conscious experience'
        ],
        correctAnswer: 1
    },
    {
        id: '2',
        text: 'Who is considered the father of Psychoanalysis?',
        options: [
            'B.F. Skinner',
            'William James',
            'Sigmund Freud',
            'Carl Rogers'
        ],
        correctAnswer: 2
    }
];

export const CbtTest = () => {
    const navigate = useNavigate();
    const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
    const [answers, setAnswers] = useState<Record<string, number>>({});
    const [timeLeft, setTimeLeft] = useState(600); // 10 minutes

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

    const handleAnswer = (optionIdx: number) => {
        setAnswers({ ...answers, [currentQuestionIdx]: optionIdx });
    };

    const handleNext = () => {
        if (currentQuestionIdx < mockQuestions.length - 1) {
            setCurrentQuestionIdx(prev => prev + 1);
        } else {
            // Submit
            navigate('/results/1');
        }
    };

    const currentQ = mockQuestions[currentQuestionIdx];

    return (
        <div className={styles.testContainer}>
            <div className={styles.header}>
                <div>Question {currentQuestionIdx + 1} of {mockQuestions.length}</div>
                <div className={styles.timer}>{formatTime(timeLeft)}</div>
            </div>

            <div className={styles.questionCard}>
                <div className={styles.questionMeta}>Multiple Choice</div>
                <div className={styles.questionText}>{currentQ.text}</div>

                <div className={styles.options}>
                    {currentQ.options.map((option, idx) => (
                        <div
                            key={idx}
                            className={`${styles.option} ${answers[currentQuestionIdx] === idx ? styles.optionSelected : ''}`}
                            onClick={() => handleAnswer(idx)}
                        >
                            <input
                                type="radio"
                                checked={answers[currentQuestionIdx] === idx}
                                className={styles.radio}
                                readOnly
                            />
                            {option}
                        </div>
                    ))}
                </div>
            </div>

            <div className={styles.footer}>
                <Button
                    variant="secondary"
                    disabled={currentQuestionIdx === 0}
                    onClick={() => setCurrentQuestionIdx(prev => prev - 1)}
                >
                    Previous
                </Button>
                <Button onClick={handleNext}>
                    {currentQuestionIdx === mockQuestions.length - 1 ? 'Submit Test' : 'Next Question'}
                </Button>
            </div>
        </div>
    );
};
