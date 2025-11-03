import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ForensicExam from './pages/ForensicExam';
import LanguageWorkshop from './pages/LanguageWorkshop';
import DevelopmentPresentation from './pages/DevelopmentPresentation';
import TonyOneOnOne from './pages/TonyOneOnOne';
import AurityDeck from './pages/AurityDeck';
import FICold from './pages/FICold';
import FIBioML from './pages/FIBioML';

function App() {
  return (
    <Router>
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
      </Routes>
    </Router>
  );
}

export default App;
