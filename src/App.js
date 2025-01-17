import './App.css';
import Main from './components/Main'
import Entertainment from './components/Entertainment'
import Health from './components/Health'
import Science from './components/Science'
import Sports from './components/Sports'
import Technology from './components/Technology'
import Navbar from './components/Navbar'
import { HashRouter , Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
      <HashRouter>
      <Navbar />
        <Routes>
          <Route index element={<Main />} />
          <Route path="entertainment" element={<Entertainment/>} />
          <Route path="health" element={<Health/>} />
          <Route path="science" element={<Science/>} />
          <Route path="sports" element={<Sports/>} />
          <Route path="technology" element={<Technology/>} />
        </Routes>
      </HashRouter>

    </>
  );
}

export default App;
