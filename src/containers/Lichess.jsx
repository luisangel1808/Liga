import React from 'react';
import usePlayers from '../hooks/usePlayers';
import Table from '../components/TableL';
import '../styles/components/Lichess.css';
const Lichess = () => {
  const API = 'https://lichess.org/api/user/';
  const playersLichess = [
    'matesote',
    'jorgetobar01',
    'cracklos',
    'lolamento123',
    'pedropalta',
    'garcia1108',
    'lllkakarotolll',
    'jjbolanos',
    'zaito0630',
    'lscardona',
  ];
  //const players =  usePlayers(API,playersLichess);
  const players = playersLichess.map((pl) => usePlayers(API, pl));
  const dataTHead = ['Usuario', ' ', 'Nombre', 'Blitz', 'Bala', 'Partidas'];

  //const body = players.map(p=>(
  //      [p.username, p.online, p.profile.firstName,p.perfs.blitz.rating,p.perfs.bullet.rating,p.username]
  //))

  return (
    <div className="Lichess">
      <Table players={players} dataTHead={dataTHead} />
    </div>
  );
};

export default Lichess;
