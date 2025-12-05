import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainContext from './MainContext';
import Education from './pages/Education';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainContext />} />
        <Route path="/Education" element={<Education />} />
      </Routes>
    </Router>
  );
}

export default App;

