import React from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import Inicio from './componentes/Inicio';
import Blog from './componentes/Blog';
import AcercaDe from './componentes/AcercaDe';

const App = () => {
  return (
    <BrowserRouter>
    <div>
      <header>
      <h1>Mi Blog Personal</h1>
      <nav>
        <NavLink to="/">Inicio</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/acerca-de">Acerca de</NavLink>
      </nav>
      </header>
      <main>
        <Routes>
        <Route path="/" element={
          <Inicio />
        }/>
        <Route path="/blog" element={
          <Blog />
        }/>
        <Route path="/acerca-de" element={
          <AcercaDe />
        }/>
        </Routes>
      </main>
    </div>
    </BrowserRouter>
  );
}

export default App;