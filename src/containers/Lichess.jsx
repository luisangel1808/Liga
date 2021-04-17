import React, {useState, useEffect} from 'react';
import usePlayersAxios from '../hooks/usePlayersAxios';
import Table from '../components/TableL';
import '../styles/components/Lichess.css';
import {db} from '../firebase';
const Lichess = () => {
  const API = 'https://lichess.org/api/user/';
/*   const playersLichess = [
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
  ]; */

const [playersLichess, setPlayersLichess] = useState([]);

  const getPlayers = async () =>{
     db.collection('players')
       .onSnapshot((querySnapshot)=>{
           const docs = [];
           querySnapshot.forEach(doc=>{
               docs.push({...doc.data()}.lichess);

           });
           setPlayersLichess(docs)
  })
}
useEffect(() => {
    getPlayers();
}, []);
console.log(playersLichess)
const players =  usePlayersAxios(API,playersLichess);
  const dataTHead = ['Usuario', ' ', 'Nombre', 'Blitz', 'Bala', 'Partidas'];
  if(players.length>0){
    return (
      <div className="Lichess">
        <Table players={players} dataTHead={dataTHead} />
      </div>
    );
  }
  else{
    return (
      <div className="Lichess">
        <h2>Cargando datos de Lichess, por favor espere</h2>
      </div>
    )
  }
};

export default Lichess;
