import React from 'react';
import '../styles/components/Home.css';
import logo from '../assets/static/logoLiga.jpg';
const Home = () => (
  <section className="Home">
    <img src={logo} alt="logo" />
    <div className="Home-container">
      <h1>Bienvenido al sitio web del ajedrez caucano</h1>
      <p>
        Aquí encontrarás información importante sobre este deporte en nuestra
        región
      </p>
    </div>
  </section>
);

export default Home;
