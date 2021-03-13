import React from 'react';
import '../styles/components/Table.css';
const TableL = ({ players, dataTHead }) => {
  console.log(players);
  return (
    <table>
      <thead>
        <tr>
          {dataTHead.map((title, index) => (
            <th key={`Fid${index}`}>{title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {players.map((player) => {
          if (Object.keys(player).length != 0) {
            return (
              <tr key={`Fide${player.id}`}>
                <td>{player.name}</td>
                <td>
                  <div className={`online-${player.online}`}></div>
                </td>
                <td>{player.standard_elo}</td>
                <td>{player.rapid_elo}</td>
                <td>{player.blitz_elo}</td>
                <td>{player.birth_year}</td>
              </tr>
            );
          }
        })}
      </tbody>
    </table>
  );
};

export default TableL;
