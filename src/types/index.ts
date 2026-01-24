export interface User {
    uid: string;
    email: string;
    displayName?: string;
    photoURL?: string;
    createdAt: Date;
}

export interface StudyDocument {
    id: string;
    userId: string;
    title: string;
    subject: string;
    fileUrl: string;
    fileType: 'pdf' | 'docx' | 'ppt';
    uploadDate: string; // Serialized date
    status: 'processing' | 'ready' | 'error';
    summary?: string;
}

export type QuestionType = 'multiple-choice' | 'checkbox' | 'text';

export interface Question {
    id: string;
    text: string;
    type: QuestionType;
    options?: string[]; // Array of options for MC/Checkbox
    correctAnswer: string | string[];
    explanation: string;
}

export interface PracticeTest {
    id: string;
    userId: string;
    documentId: string;
    documentTitle: string;
    createdAt: string;
    questions: Question[];
    status: 'in-progress' | 'completed';
    score?: number;
    maxScore?: number;
    timeTakenSeconds?: number;
    userAnswers: Record<string, string | string[]>;
}

export interface ChatMessage {
    id: string;
    role: 'user' | 'assistant';
    content: string;
    timestamp: string;
}
