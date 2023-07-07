import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Morron from './components/Morron/Morron';
import Contacto from './components/Contacto/Contacto';
import Persona from './components/Persona/Persona';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Morron />} />
            <Route path="/morron" element={<Morron />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/persona/:id" element={<Persona />} />
            <Route path="*" element={<h1>404 Not Found</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
