import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import InstructionsPage from './pages/IntructionsPage';
import StartedPage from './pages/StartedPage';
import QuestionPage from './pages/QuestionPage';
import { Provider } from 'react-redux';
import store from './Storage/redux/Store';
import ResultsPage from './pages/ResultsPage';
import SharePage from './pages/SharePage';
function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<StartedPage />} />
          <Route path="/instructions" element={<InstructionsPage />} />
          <Route path="/questionnaire" element={<QuestionPage />} />
          <Route path="/results" element={<ResultsPage />} />
          <Route path="/share-results" element={<SharePage />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;