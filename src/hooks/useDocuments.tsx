import { useState, useEffect } from 'react';
import type { StudyDocument } from '../types';

export const useDocuments = (userId: string | undefined) => {
    const [documents, setDocuments] = useState<StudyDocument[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!userId) {
            setDocuments([]);
            setLoading(false);
            return;
        }

        // Mock data fetch
        const fetchDocs = async () => {
            try {
                // Simulate network request
                await new Promise(resolve => setTimeout(resolve, 800));

                const mockDocs: StudyDocument[] = [
                    { id: '1', userId, title: 'Introduction to Psychology.pdf', subject: 'Psychology', fileUrl: '', fileType: 'pdf', uploadDate: '2023-10-15', status: 'ready' },
                    { id: '2', userId, title: 'Advanced Calculus Notes.docx', subject: 'Mathematics', fileUrl: '', fileType: 'docx', uploadDate: '2023-10-18', status: 'processing' },
                ];
                setDocuments(mockDocs);
            } catch (err) {
                setError('Failed to fetch documents');
            } finally {
                setLoading(false);
            }
        };

        fetchDocs();
    }, [userId]);

    return { documents, loading, error };
};
