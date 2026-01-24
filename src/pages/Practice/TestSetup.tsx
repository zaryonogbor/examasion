import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import styles from './Practice.module.css';

export const TestSetup = () => {
    const navigate = useNavigate();
    const [questionCount, setQuestionCount] = useState(10);

    const startTest = () => {
        navigate('/test/1');
    };

    return (
        <div className={styles.setupContainer}>
            <h1 style={{ marginBottom: '1.5rem' }}>Configure Practice Test</h1>

            <div className={styles.section}>
                <h2 className={styles.sectionTitle}>1. Select Material</h2>
                <div style={{ marginBottom: '1rem' }}>
                    <label className={styles.label}>Source Document</label>
                    <select className={styles.inputWrapper} style={{ width: '100%', padding: '0.625rem', borderRadius: 'var(--radius-md)', borderColor: 'var(--border)' }}>
                        <option>Introduction to Psychology.pdf</option>
                        <option>Advanced Calculus.pdf</option>
                    </select>
                </div>
            </div>

            <div className={styles.section}>
                <h2 className={styles.sectionTitle}>2. Test Settings</h2>

                <div className={styles.optionGroup}>
                    <div>
                        <label className={styles.label}>Number of Questions</label>
                        <input
                            type="range"
                            min="5"
                            max="50"
                            value={questionCount}
                            onChange={(e) => setQuestionCount(Number(e.target.value))}
                            style={{ width: '100%', marginBottom: '0.5rem' }}
                        />
                        <div style={{ textAlign: 'right', fontWeight: 'bold', color: 'var(--primary)' }}>{questionCount} Questions</div>
                    </div>

                    <div>
                        <label className={styles.label}>Question Types</label>
                        <div style={{ display: 'flex', gap: '1.5rem' }}>
                            <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <input type="checkbox" defaultChecked /> Multiple Choice
                            </label>
                            <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <input type="checkbox" defaultChecked /> True/False
                            </label>
                            <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <input type="checkbox" /> Short Answer
                            </label>
                        </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <label className={styles.label} style={{ margin: 0 }}>Timer</label>
                        <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                            <input type="checkbox" defaultChecked /> Enable (1 min per question)
                        </label>
                    </div>
                </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Button size="lg" onClick={startTest} style={{ paddingLeft: '3rem', paddingRight: '3rem' }}>
                    Start Test
                </Button>
            </div>
        </div>
    );
};
