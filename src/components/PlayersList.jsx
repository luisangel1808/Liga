import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import '../styles/components/Table.css';
const PlayersList = () => {
  const {
    state: { playersList },
  } = useContext(AppContext);

  return (
    <div>
      <table>
        <tbody>
          {playersList.map((player, index) => {
            return (
              <tr key={`List-${index}`}>
                <td>{player.name}</td>
                <td>{player.codFide}</td>
                <td>{player.club}</td>
                <td>{player.league}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default PlayersList;
