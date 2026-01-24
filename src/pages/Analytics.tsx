import React from 'react';
import { Card } from '../components/ui/Card';
import { BarChart, Clock, Award, AlertCircle } from 'lucide-react';

export const Analytics = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                <Card padding="lg">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                        <div style={{ padding: '0.75rem', backgroundColor: '#e0f2fe', borderRadius: '50%', color: 'var(--primary)' }}>
                            <Award size={24} />
                        </div>
                        <div>
                            <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Average Score</div>
                            <div style={{ fontSize: '1.75rem', fontWeight: 700 }}>84%</div>
                        </div>
                    </div>
                    <div style={{ width: '100%', height: '8px', backgroundColor: '#f1f5f9', borderRadius: '4px', overflow: 'hidden' }}>
                        <div style={{ width: '84%', height: '100%', backgroundColor: 'var(--primary)' }}></div>
                    </div>
                </Card>

                <Card padding="lg">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                        <div style={{ padding: '0.75rem', backgroundColor: '#dcfce7', borderRadius: '50%', color: '#166534' }}>
                            <BarChart size={24} />
                        </div>
                        <div>
                            <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Tests Completed</div>
                            <div style={{ fontSize: '1.75rem', fontWeight: 700 }}>28</div>
                        </div>
                    </div>
                </Card>

                <Card padding="lg">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                        <div style={{ padding: '0.75rem', backgroundColor: '#fef9c3', borderRadius: '50%', color: '#854d0e' }}>
                            <Clock size={24} />
                        </div>
                        <div>
                            <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Study Time</div>
                            <div style={{ fontSize: '1.75rem', fontWeight: 700 }}>12h 45m</div>
                        </div>
                    </div>
                </Card>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2rem' }}>
                <Card>
                    <h3 style={{ marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid var(--border)' }}>Weak Topics</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <span>Organic Chemistry - Nomenclature</span>
                            <span style={{ fontWeight: 600, color: 'var(--error)' }}>45%</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <span>Calculus - Integration by Parts</span>
                            <span style={{ fontWeight: 600, color: 'var(--warning)' }}>62%</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <span>History - Industrial Revolution</span>
                            <span style={{ fontWeight: 600, color: 'var(--warning)' }}>68%</span>
                        </div>
                    </div>
                </Card>

                <Card>
                    <h3 style={{ marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid var(--border)' }}>Recent Performance</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {[92, 78, 85, 88, 72].map((score, i) => (
                            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <div style={{ minWidth: '80px', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Test #{5 - i}</div>
                                <div style={{ flex: 1, height: '8px', backgroundColor: '#f1f5f9', borderRadius: '4px', overflow: 'hidden' }}>
                                    <div style={{
                                        width: `${score}%`,
                                        height: '100%',
                                        backgroundColor: score >= 80 ? 'var(--success)' : score >= 60 ? 'var(--warning)' : 'var(--error)'
                                    }}></div>
                                </div>
                                <div style={{ minWidth: '40px', textAlign: 'right', fontWeight: 600 }}>{score}%</div>
                            </div>
                        ))}
                    </div>
                </Card>
            </div>
        </div>
    );
};
