import React from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import Inicio from './componentes/Inicio';
import Blog from './componentes/Blog';
import AcercaDe from './componentes/AcercaDe';
import Header from './componentes/Header';
import styled from 'styled-components';

const App = () => {
  return (
    <BrowserRouter>
    <ContenedorPrincipal>
      <Header />
      <Main>
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
      </Main>
    </ContenedorPrincipal>
    </BrowserRouter>
  );
}

const ContenedorPrincipal = styled.div`
  padding: 40px;
  width: 90%;
  max-width: 700px;
`;

const Main = styled.main`
  background: #fff;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0px 0px 5px rgba(129,129,129,0.1);
`;

export default App;