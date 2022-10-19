import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Invalido from './pages/Invalido';
import Profile from './pages/Profile';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Profile/>}/>
          <Route path="/Profile" element={<Profile/>}/>
          <Route path="/Invalido" element={<Invalido/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
