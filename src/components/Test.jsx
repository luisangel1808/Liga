import React, { useRef, useState } from 'react';
import Chessboard from './ChessBoard';
import '../styles/components/Test.css';

const Test = (props) => {
  
  const positions = props.location.state.test.positions;
  const [page, setPage] = useState(0)

  const next = () =>{
    if(page<positions.length-1){
      setPage(page+1);
    }
    else{
      alert('Has terminado el test, pronto te darán resultados')
    }
  }
  
  return (
    <div className="Test">
      <div className="board">
        <h3>Evalúa esta posición</h3>
        <Chessboard>
          {positions[page]}
        </Chessboard> 
      </div>
      <div className="form-valoration">
        <p>¿Cómo valoras la posición?:</p>
        <input type="radio" name="valoration" id="+-" value="+-" />
        <label htmlFor="+-">Ventaja decisiva de las blancas +-</label> <br />
        <input type="radio" name="valoration" id="+/-" value="+/-" />
        <label htmlFor="+/-">Amplía ventaja de las blancas +/-</label> <br />
        <input type="radio" name="valoration" id="+/=" value="+/=" />
        <label htmlFor="+/=">Leve ventaja de las blancas +/=</label> <br />
        <input type="radio" name="valoration" id="=" value="=" />
        <label htmlFor="=">Igualdad =</label> <br />
        <input type="radio" name="valoration" id="=/+" value="=/+" />
        <label htmlFor="=/+">Leve ventaja de las negras =/+</label> <br />
        <input type="radio" name="valoration" id="-/+" value="-/+" />
        <label htmlFor="-/+">Amplía ventaja de las negras -/+</label> <br />
        <input type="radio" name="valoration" id="-+" value="-+" />
        <label htmlFor="-+">Ventaja decisiva de las negras -+</label> <br />
      </div>
      <div className="answer">
        <h4>¿Cómo debería continuar la partida?</h4>
        <textarea name="answer" type="text"  />
        <button type="button" onClick={()=>next()}>Enviar</button>
      </div>
    </div>
  );
};

export default Test;
