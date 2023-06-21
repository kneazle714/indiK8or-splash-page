import './App.css';
import { Routes, Route } from 'react-router-dom';
import WelcomePage from './WelcomePage';

function App() {
  return (
      <Routes>
        <Route path="/" element={<WelcomePage />} />
      </Routes>
  );
}

export default App;