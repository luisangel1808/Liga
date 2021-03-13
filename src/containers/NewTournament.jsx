import React from 'react';
import { Link } from 'react-router-dom';
import AddPlayer from '../components/AddPlayer';
import PlayersList from '../components/PlayersList';
import '../styles/components/NewTournament.css';
const NewTournament = () => {
  return (
    <div className="NewTournament">
      <AddPlayer />
      <PlayersList />
      <Link to="/tournament">
        <button>Crear torneo</button>
      </Link>
    </div>
  );
};

export default NewTournament;
