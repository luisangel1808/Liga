import React from 'react'
import '../styles/components/FideTable.css'
import clasification from '../../fide.json';
clasification.players.sort(function (a, b) {
    if (a.std < b.std) {
      return 1;
    }
    if (a.std > b.std) {
      return -1;
    }
    return 0;
  });
const mapTitle = (title) =>{
    if (title=="Candidate Master") {
        return "CM";              
    }
    if (title=="FIDE Master") {
        return "FM";              
    }
    else{
        return "";
    }
}

const FideTable = () =>(
    <div className="FideTable">
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Título</th>
                    <th>Nombre</th>
                    <th>Clásico</th>
                    <th>Rápido</th>
                    <th>Blitz</th>
                    <th>Año</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {clasification.players.map((player, index)=>{                                                     
                    return(
                        <tr key={player.id}>
                            <td>{index+1}</td>
                            <td>{mapTitle(player.title)}</td>
                            <td>{player.name}</td>
                            <td>{player.std}</td>
                            <td>{player.rapid}</td>
                            <td>{player.blitz}</td>
                            <td>{player.year}</td>
                            <td>{player.active}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </div>
)

export default FideTable