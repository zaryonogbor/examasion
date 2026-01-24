import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AppLayout } from './components/layout/AppLayout';
import { Landing } from './pages/Landing';
import { Login } from './pages/Auth/Login';
import { Signup } from './pages/Auth/Signup';
import { Dashboard } from './pages/Dashboard';
import { DocumentList } from './pages/Documents/DocumentList';
import { DocumentUpload } from './pages/Documents/DocumentUpload';
import { DocumentDetail } from './pages/Documents/DocumentDetail';
import { TestSetup } from './pages/Practice/TestSetup';
import { CbtTest } from './pages/Practice/CbtTest';
import { TestResults } from './pages/Results/TestResults';
import { Chat } from './pages/Chat';
import { Analytics } from './pages/Analytics';
import { Profile } from './pages/Profile';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Protected App Routes */}
        <Route element={<AppLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/documents" element={<DocumentList />} />
          <Route path="/documents/upload" element={<DocumentUpload />} />
          <Route path="/documents/:id" element={<DocumentDetail />} />

          <Route path="/practice" element={<TestSetup />} />
          <Route path="/test/:id" element={<CbtTest />} />
          <Route path="/results/:id" element={<TestResults />} />

          <Route path="/chat" element={<Chat />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/profile" element={<Profile />} />
        </Route>

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
