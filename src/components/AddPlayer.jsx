import React, { useRef, useContext } from 'react';
import '../styles/components/AddPlayer.css';
import AppContext from '../context/AppContext';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const addPlayer = () => {
  const { addToPlayersList } = useContext(AppContext);
  const form = useRef(null);
  toast.configure();

  const handleSubmit = async() => {
    const formData = new FormData(form.current);
    const newPlayer = {
      name: formData.get('name'),
      club: formData.get('club'),
      league: formData.get('league'),
      codFide: formData.get('fideCod'),
      sex: formData.get('sex'),
      birth_year: formData.get('birth_year'),
      picture: '',
      description: formData.get('description'),
      lichess: formData.get('lichess'),
    };
    
    addToPlayersList(newPlayer);
    toast('😜 Jugador añadido!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
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
        <input type="number" placeholder="Ingresa el año de nacimiento" name="birth_year" />
        <select name="sex">
          <option value="Male">Masculino</option>
          <option value="Female">Femenino</option>
        </select>
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
