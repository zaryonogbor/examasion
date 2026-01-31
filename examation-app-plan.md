# Examation App - Implementation Plan

## 1. Overview
**Examation** is an AI-powered study companion that transforms static documents (PDF/Word) into interactive learning experiences. Users upload materials, and the system generates CBT (Computer-Based Test) practice exams and provides a chat interface for deep understanding.

**Core Value Proposition:** "Practice until you can answer every question in a heartbeat."

## 2. Project Type & Tech Stack
- **Type:** WEB (Single Page Application)
- **Frontend:** React 19 (Vite), TypeScript, CSS Modules (Modular Architecture)
- **Backend:** Firebase (Auth, Firestore, Storage, Cloud Functions)
- **AI Engine:** Google Gemini API (High context window for documents) or OpenAI
- **Document Processing:** 
  - `pdf.js` (PDF extraction)
  - `mammoth` (Word extraction)
  - Firebase Cloud Functions (orchestration)

## 3. Architecture & Data Flow

### 3.1. Document Ingestion Pipeline
1. **Upload:** User uploads file to Firebase Storage.
2. **Trigger:** Cloud Function detects new file.
3. **Extraction:**
   - Text extracted from PDF/Docx.
   - Content cleaned and chunked (e.g., by chapter/page).
4. **Storage:** Metadata stored in Firestore `documents` collection. Text stored or indexed (for RAG).

### 3.2. Exam Generation Engine
1. **Request:** User selects Document + Difficulty + Question Types (MCQ, Essay, True/False).
2. **AI Prompting:** System sends content chunks + specialized prompts to AI.
3. **Parsing:** AI response (JSON) parsed into structured Question objects.
4. **Persist:** Exam saved to `exams` collection.

### 3.3. Analytics & Feedback Loop
1. **Tracking:** User answers recorded in real-time.
2. **Scoring:** Immediate feedback (Client-side for MCQ, AI-graded for Essay).
3. **Analytics:** Aggregation of weak topics/areas.

## 4. File Structure (Planned)
```
src/
├── components/
│   ├── ui/             # Atomic components (Button, Input, Card)
│   ├── layout/         # Layout shells (AuthLayout, DashboardLayout)
│   ├── domain/         # Feature-specific components
│   │   ├── upload/     # FileDropzone, ProgressBar
│   │   ├── exam/       # QuestionCard, Timer, ProgressBar
│   │   ├── chat/       # ChatInterface, MessageBubble
│   │   └── analytics/  # Chart components, StatCards
├── lib/
│   ├── firebase.ts     # Firebase init
│   ├── api.ts          # API wrappers (AI calls)
│   ├── parsers.ts      # Document parsing logic
│   └── utils.ts        # Helper functions
├── hooks/              # Custom hooks (useAuth, useExam, useChat)
├── services/           # Business logic (ExamEngine, AnalyticsEngine)
├── store/              # Global state (Zustand context)
└── pages/              # Route views
```

## 5. Implementation Roadmap

### Phase 1: Foundation & Infrastructure (P0)
- [ ] **Task-1.1:** Setup Firebase Project (Auth, Firestore, Storage).
- [ ] **Task-1.2:** Configure Firebase SDK in React.
- [ ] **Task-1.3:** Create global AuthContext (Login/Signup/Logout).
- [ ] **Task-1.4:** Initialize Firestore Schema (Users, Documents, Exams).

### Phase 2: Document Ingestion (P1)
- [ ] **Task-2.1:** Build `FileDropzone` component with validation (PDF/Docx).
- [ ] **Task-2.2:** Implement File Upload to Firebase Storage.
- [ ] **Task-2.3:** Create `DocumentParsingService` (Client-side text extraction MVP).
- [ ] **Task-2.4:** Save document metadata and extracted text to Firestore.

### Phase 3: The Exam Engine (P1)
- [ ] **Task-3.1:** Create `ExamGenerationService` (AI Prompt Engineering).
- [ ] **Task-3.2:** Build `TestSetup` UI (Question count, types, difficulty).
- [ ] **Task-3.3:** Implement `CBTInterface` (The actual test-taking UI).
  - Timer
  - Question Navigation
  - Answer Selection
- [ ] **Task-3.4:** Build `ResultsView` with instant scoring.

### Phase 4: Chat with Document (P2)
- [ ] **Task-4.1:** Implement RAG (Retrieval-Augmented Generation) logic.
  - *Strategy:* Send relevant document chunk + query to AI.
- [ ] **Task-4.2:** Build `ChatInterface` (Streaming responses, markdown support).
- [ ] **Task-4.3:** Persist chat history per document.

### Phase 5: Analytics & Gamification (P2)
- [ ] **Task-5.1:** Design `Dashboard` stats (Tests taken, Avg score).
- [ ] **Task-5.2:** Implement "Weakness Detection" (AI analysis of wrong answers).
- [ ] **Task-5.3:** visual charts for progress over time.

### Phase 6: Polish & Aesthetics (P3)
- [ ] **Task-6.1:** "Wow" Landing Page implementation (3D elements/Animation).
- [ ] **Task-6.2:** Micro-interactions (Hover effects, Transitions).
- [ ] **Task-6.3:** Dark/Light mode purity.

## 6. Success Criteria
1. **User can upload a PDF** and start an exam within 30 seconds.
2. **AI generates valid JSON** questions 99% of the time.
3. **Essay questions** receive constructive AI feedback, not just a score.
4. **Chat interface** answers questions *specifically* from the document context.
5. **Dashboard** properly reflects the user's learning curve.

## 7. Verification Checklist (Phase X)
- [ ] **Lint:** `npm run lint` passes.
- [ ] **Build:** `npm run build` succeeds.
- [ ] **Security:** API keys hidden, Firestore rules secured.
- [ ] **UX:** No "generic" layouts; premium feel achieved.
