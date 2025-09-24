import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Theme } from './settings/types';
import ScholarSparkInvestorLandingPage from './components/generated/ScholarSparkInvestorLandingPage';
import AboutPage from './components/generated/AboutPage';

let theme: Theme = 'dark';

function App() {
  function setTheme(theme: Theme) {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  setTheme(theme);

  return (
    <Router>
      <Routes>
        {/* Homepage routes */}
        <Route path="/" element={<ScholarSparkInvestorLandingPage />} />
        <Route path="/home" element={<ScholarSparkInvestorLandingPage />} />

        {/* About page route */}
        <Route path="/about" element={<AboutPage />} />

        {/* Redirect any unknown routes to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
