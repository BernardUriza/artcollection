import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Home from './pages/Home';
import ForensicExam from './pages/ForensicExam';
import LanguageWorkshop from './pages/LanguageWorkshop';
import DevelopmentPresentation from './pages/DevelopmentPresentation';
import NovemberRetrospective from './pages/NovemberRetrospective';
import DecemberJLLGPTSystem from './pages/DecemberJLLGPTSystem';
import TonyOneOnOne from './pages/TonyOneOnOne';
import AurityDeck from './pages/AurityDeck';
import FICold from './pages/FICold';
import FIBioML from './pages/FIBioML';
import LaSociedadCansados from './pages/LaSociedadCansados';
import NutritionalPlan from './pages/NutritionalPlan';
import NutritionGuide from './pages/NutritionGuide';
import WeeklyMealPlan from './pages/WeeklyMealPlan';
import PWAStatusBadge from './components/PWAStatusBadge/PWAStatusBadge';
import InstallPrompt from './components/InstallPrompt/InstallPrompt';

function App() {
  useEffect(() => {
    // Trigger service worker update when app comes online
    const handleOnline = () => {
      console.log('App came online - refreshing data');
      if ('serviceWorker' in navigator) {
        navigator.serviceWorker.getRegistration().then((reg) => {
          if (reg) {
            reg.update();
            // Optionally reload the page to get fresh data
            window.location.reload();
          }
        });
      }
    };

    window.addEventListener('online', handleOnline);
    return () => window.removeEventListener('online', handleOnline);
  }, []);

  return (
    <Router>
      <PWAStatusBadge />
      <InstallPrompt />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/page/a3f8e9d2-7b4c-11ef-9cf0-0242ac120002"
          element={<ForensicExam />}
        />
        <Route
          path="/page/29f32e2c-0521-4ffe-9f97-662885330037"
          element={<LanguageWorkshop />}
        />
        <Route
          path="/page/10cc9090-fc11-4ca1-b464-f902158d41df"
          element={<DevelopmentPresentation />}
        />
        <Route
          path="/page/d3d7b05a-3921-4f61-847c-d37db47c6d17"
          element={<NovemberRetrospective />}
        />
        <Route
          path="/page/6f6a34d0-21da-4cc5-b181-4a3586a37906"
          element={<DecemberJLLGPTSystem />}
        />
        <Route
          path="/page/22b39bb7-2ba4-41bb-9011-ba5171415bf6"
          element={<TonyOneOnOne />}
        />
        <Route
          path="/page/a051cfca-7950-45bb-aab9-488204659b21"
          element={<AurityDeck />}
        />
        <Route
          path="/page/c4739fcd-3663-4a64-b7bd-72ac17cf5020"
          element={<FICold />}
        />
        <Route
          path="/page/b20f354b-e6b1-4fa3-ba19-7b4a3317f7a2"
          element={<FIBioML />}
        />
        <Route
          path="/page/2a196ccc-d7c5-8126-b582-dbafc084a389"
          element={<LaSociedadCansados />}
        />
        <Route
          path="/page/47461f14-2924-4ef3-914b-1f1be15aed99"
          element={<NutritionalPlan />}
        />
        <Route
          path="/page/70228044-e974-49d4-9e7e-7cbd569f8e58"
          element={<NutritionGuide />}
        />
        <Route
          path="/page/093ba8bf-49b9-4fff-9f8e-90ffc52919ff"
          element={<WeeklyMealPlan />}
        />
      </Routes>
    </Router>
  );
}

export default App;
