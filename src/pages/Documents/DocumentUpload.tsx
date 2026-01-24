import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/ui/Button';
import { UploadCloud, FileText, Ban } from 'lucide-react';
import styles from './Documents.module.css';

export const DocumentUpload = () => {
    const navigate = useNavigate();
    const [isDragOver, setIsDragOver] = useState(false);
    const [uploading, setUploading] = useState(false);

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragOver(false);
        // Simulate upload
        startUpload();
    };

    const startUpload = () => {
        setUploading(true);
        setTimeout(() => {
            setUploading(false);
            navigate('/documents');
        }, 2000);
    }

    return (
        <div className={styles.pageContainer} style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h1>Upload Study Material</h1>

            <div
                className={styles.uploadZone}
                style={{ borderColor: isDragOver ? 'var(--primary)' : 'var(--border)' }}
                onDragOver={(e) => { e.preventDefault(); setIsDragOver(true); }}
                onDragLeave={() => setIsDragOver(false)}
                onDrop={handleDrop}
                onClick={startUpload}
            >
                <UploadCloud size={64} className="text-primary" style={{ marginBottom: '1rem' }} />
                <h3>Click or drag file to this area to upload</h3>
                <p className="text-secondary" style={{ marginTop: '0.5rem' }}>
                    Support for PDF, DOCX, and PPT files.
                </p>
            </div>

            <div style={{ marginTop: '2rem' }}>
                <h3>Instructions</h3>
                <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.8', color: 'var(--text-secondary)' }}>
                    <li>Ensure the document text is selectable (not scanned images).</li>
                    <li>Maximum file size is 25MB.</li>
                    <li>For best results, upload structured notes or textbooks.</li>
                </ul>
            </div>

            <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
                <Button onClick={startUpload} isLoading={uploading}>Select File</Button>
                <Button variant="ghost" onClick={() => navigate('/documents')}>Cancel</Button>
            </div>
        </div>
    );
};
