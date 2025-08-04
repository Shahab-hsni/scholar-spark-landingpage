import { useMemo } from 'react';
import { Theme } from './settings/types';
import ScholarSparkInvestorLandingPage from './components/generated/ScholarSparkInvestorLandingPage';

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

  // THIS IS WHERE THE TOP LEVEL GENRATED COMPONENT WILL BE RETURNED!
  return <ScholarSparkInvestorLandingPage />;
}

export default App;
