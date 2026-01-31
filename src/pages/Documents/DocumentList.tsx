import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/ui/Button';
import { FileUp, FileText, Calendar, BookOpen, ExternalLink } from 'lucide-react';
import { Input } from '../../components/ui/Input';
import styles from './Documents.module.css';
import type { StudyDocument } from '../../types';

// Placeholder data
const mockDocuments: StudyDocument[] = [
    { id: '1', userId: 'u1', title: 'Introduction to Psychology.pdf', subject: 'Psychology', fileUrl: '', fileType: 'pdf', uploadDate: '2023-10-15', status: 'ready' },
    { id: '2', userId: 'u1', title: 'Advanced Calculus Notes.docx', subject: 'Mathematics', fileUrl: '', fileType: 'docx', uploadDate: '2023-10-18', status: 'processing' },
    { id: '3', userId: 'u1', title: 'Marketing 101 Slides.ppt', subject: 'Business', fileUrl: '', fileType: 'ppt', uploadDate: '2023-10-20', status: 'ready' },
    { id: '4', userId: 'u1', title: 'Organic Chemistry Lab Report.pdf', subject: 'Chemistry', fileUrl: '', fileType: 'pdf', uploadDate: '2023-10-22', status: 'ready' },
    { id: '5', userId: 'u1', title: 'Modern History Overview.docx', subject: 'History', fileUrl: '', fileType: 'docx', uploadDate: '2023-10-25', status: 'ready' },
];

export const DocumentList = () => {
    const navigate = useNavigate();

    return (
        <div className={styles.pageContainer}>
            <div className={styles.headerRow}>
                <div className={styles.searchWrapper}>
                    <Input
                        placeholder="Search for subjects, topics or files..."
                        className={styles.premiumSearch}
                    />
                </div>
                <Button
                    variant="primary"
                    onClick={() => navigate('/documents/upload')}
                    leftIcon={<FileUp size={20} />}
                >
                    Upload New Document
                </Button>
            </div>

            <div className={styles.documentGrid}>
                {mockDocuments.map((doc) => (
                    <div key={doc.id} className={styles.docCard} onClick={() => navigate(`/documents/${doc.id}`)}>
                        <div className={styles.docHeader}>
                            <div className={styles.docIconWrapper}>
                                <FileText size={24} />
                            </div>
                            <div>
                                <h3 className={styles.docTitle}>{doc.title}</h3>
                                <div className={styles.docSubject}>
                                    <BookOpen size={12} style={{ marginRight: '4px' }} />
                                    {doc.subject}
                                </div>
                            </div>
                        </div>

                        <div className={styles.docMeta}>
                            <div className={styles.docDate}>
                                <Calendar size={12} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                                {doc.uploadDate}
                            </div>
                            <span className={`${styles.statusBadge} ${styles[`status${doc.status.charAt(0).toUpperCase() + doc.status.slice(1)}`]}`}>
                                {doc.status}
                            </span>
                        </div>

                        <div style={{ position: 'absolute', top: '1.25rem', right: '1.25rem', opacity: 0.3 }}>
                            <ExternalLink size={16} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
