import React from 'react';
import '../styles/components/Table.css';
const TableL = ({ players, dataTHead }) => {
  return (
    <table>
      <thead>
        <tr>
          {dataTHead.map((title, index) => (
            <th key={`Lic${index}`}>{title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {players.map((player) => {
          if (Object.keys(player).length != 0) {
            return (
              <tr key={player.id}>
                <td>
                  <a
                    href={`https://lichess.org/@/${player.username}`}
                    target="_blank"
                  >
                    {player.username}
                  </a>
                </td>
                <td>
                  <div className={`online-${player.online}`}></div>
                </td>
                <td>{`${player.profile.firstName || ''} ${
                  player.profile.lastName || ''
                }`}</td>
                <td>{player.perfs.blitz.rating}</td>
                <td>{player.perfs.bullet.rating}</td>
                <td>{player.perfs.puzzle.rating}</td>
                <td>{player.perfs.puzzle.games}</td>
                <td>
                  <a
                    href={`https://lichess.org/api/games/user/${player.username}`}
                  >
                    Partidas
                  </a>
                </td>
              </tr>
            );
          }
        })}
      </tbody>
    </table>
  );
};

export default TableL;
