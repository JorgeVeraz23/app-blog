import React from 'react';
import { BrowserRouter, NavLink } from 'react-router-dom';

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
        <div>
          <h2>Blog</h2>
          <p>Esta es la pagina principal de nuestro sitio</p>
        </div>
        <div>
          <h2>Pagina de Inicio</h2>
          <ul>
            <li>Articulo #1</li>
            <li>Articulo #2</li>
            <li>Articulo #3</li>
          </ul>
        </div>
        <div>
          <h2>Acerca de</h2>
          <p>Hola me llamo Carlos</p>
        </div>
      </main>
    </div>
    </BrowserRouter>
  );
}

export default App;