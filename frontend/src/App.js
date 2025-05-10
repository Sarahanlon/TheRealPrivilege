import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import SignupPage from './components/SignupPage';
import LoginPage from './components/LoginPage';
import WelcomePage from './components/WelcomePage';
import GeneralIntakePage from './components/GeneralIntakePage';
import SubmissionIntakePage from './components/SubmissionIntakePage';
import PathwayRecommendationPage from './components/PathwayRecommendationPage';
import MatchRevealPage from './components/MatchRevealPage';
import ChatPage from './components/ChatPage';
import ConsentPage from './components/ConsentPage';
import TaskPage from './components/TaskPage';
import SceneUnlockPage from './components/SceneUnlockPage';
import ConfessionFeedPage from './components/ConfessionFeedPage';
import ComingSoonPage from './components/ComingSoonPage';
import './App.css';

// Optional fallback component
function NotFoundPage() {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
    </div>
  );
}

function App() {
  console.log("🌐 App is running and routes are ready.");

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/welcome" element={<WelcomePage />} />
        <Route path="/general-intake" element={<GeneralIntakePage />} />
        <Route path="/pathway-recommendation" element={<PathwayRecommendationPage />} />
        <Route path="/submission-intake" element={<SubmissionIntakePage />} />
        <Route path="/match-reveal" element={<MatchRevealPage />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/consent" element={<ConsentPage />} />
        <Route path="/tasks" element={<TaskPage />} />
        <Route path="/scenes" element={<SceneUnlockPage />} />
        <Route path="/confessions" element={<ConfessionFeedPage />} />
        <Route path="/coming-soon" element={<ComingSoonPage />} />
        {/* Catch-all route for 404 */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;


