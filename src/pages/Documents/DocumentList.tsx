import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/ui/Button';
import { FileUp, FileText } from 'lucide-react';
import { Input } from '../../components/ui/Input';
import styles from './Documents.module.css';
import type { StudyDocument } from '../../types';

// Placeholder data
const mockDocuments: StudyDocument[] = [
    { id: '1', userId: 'u1', title: 'Introduction to Psychology.pdf', subject: 'Psychology', fileUrl: '', fileType: 'pdf', uploadDate: '2023-10-15', status: 'ready' },
    { id: '2', userId: 'u1', title: 'Advanced Calculus Notes.docx', subject: 'Mathematics', fileUrl: '', fileType: 'docx', uploadDate: '2023-10-18', status: 'processing' },
    { id: '3', userId: 'u1', title: 'Marketing 101 Slides.ppt', subject: 'Business', fileUrl: '', fileType: 'ppt', uploadDate: '2023-10-20', status: 'ready' },
];

export const DocumentList = () => {
    const navigate = useNavigate();

    return (
        <div className={styles.pageContainer}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ width: '300px' }}>
                    <Input placeholder="Search documents..." style={{ margin: 0 }} />
                </div>
                <Button onClick={() => navigate('/documents/upload')} leftIcon={<FileUp size={18} />}>
                    Upload New
                </Button>
            </div>

            <div className={styles.tableContainer}>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Subject</th>
                            <th>Date Uploaded</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {mockDocuments.map((doc) => (
                            <tr key={doc.id}>
                                <td>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                        <FileText size={20} className="text-secondary" />
                                        <span style={{ fontWeight: 500 }}>{doc.title}</span>
                                    </div>
                                </td>
                                <td>{doc.subject}</td>
                                <td>{doc.uploadDate}</td>
                                <td>
                                    <span className={`${styles.statusBadge} ${doc.status === 'ready' ? styles.statusReady : styles.statusProcessing}`}>
                                        {doc.status}
                                    </span>
                                </td>
                                <td>
                                    <Button variant="ghost" size="sm" onClick={() => navigate(`/documents/${doc.id}`)}>
                                        View
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
