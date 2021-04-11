import React, { useRef, useContext } from 'react';
import '../styles/components/AddPlayer.css';
import AppContext from '../context/AppContext';
import { toast } from 'react-toastify';

const addPlayer = () => {
  const { addToPlayersList } = useContext(AppContext);
  const form = useRef(null);

  const handleSubmit = async() => {
    const formData = new FormData(form.current);
    const newPlayer = {
      name: formData.get('name'),
      club: formData.get('club'),
      league: formData.get('league'),
      codFide: formData.get('fideCod'),
      picture: '',
      description: formData.get('description'),
      lichess: formData.get('lichess'),
    };

    addToPlayersList(newPlayer);
  };
  return (
    <section className="AddPlayer">
      <h1>Registrar jugador</h1>
      <form ref={form}>
        <input
          type="text"
          placeholder="Ingresa el jugador"
          name="name"
          required
        />
        <input type="text" placeholder="Ingresa el club" name="club" />
        <input type="text" placeholder="Ingresa la Liga" name="league" />
        <input type="number" placeholder="Ingresa el código Fide" name="fideCod"/>
        <input type="text" placeholder="Ingresa una descripción" name="description"/>
        <input type="text" placeholder="Ingresa el nick de Lichess" name="lichess"/>
        <button type="button" onClick={handleSubmit}>
          Registrar
        </button>
      </form>
    </section>
  );
};

export default addPlayer;
