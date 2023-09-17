import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate, useParams } from 'react-router-dom';
import Header from './Components/Header';
import Body from './Components/Body';
import Footer from './Components/Footer';
import './App.css';


function App() {
  return (
    <Router>
      <div className="app">
      <Routes>
          <Route path="/" element={<><Header step={1} /><Body /></>}/>
          <Route path="/option/:name/:step" element={<OptionPage />}/>
     </Routes>
        <Footer />
      </div>
    </Router>
  );
}

function OptionPage() {
  const {name, step} = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <Header currentIndex={parseInt(step, 10)} />
      <h2>{name}</h2>
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  );
}

export default App;
