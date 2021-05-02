import React, { useState, useRef, useEffect, useContext } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import '../styles/components/AddSession.css';
import notification from '../utils/Toast';
import {db} from '../firebase';
import { faWindowClose} from '@fortawesome/free-solid-svg-icons';
import { faEdit} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const AddSession = () => {
    const [selected, setSelected] = useState([]);
    const [choosed, setChoosed] = useState([]);
    const [sessions, setSessions] = useState([]);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [day, setDay] = useState(new Date());
    const [players, setPlayers] = useState([]);
    const [currentId, setCurrentId] = useState('');

    const form = useRef(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(form.current);
        const newSession = {
          players: choosed,
          day: formData.get('day'),
          startD: formData.get('startD'),
          endD: formData.get('endD'),
          description: formData.get('description'),
        };
        setChoosed([]);
        await db.collection('sessions').doc().set(newSession);
        notification('😜 Sesión añadida!')
      };  
    
    const getPlayers = async () =>{
        db.collection('players')
           .onSnapshot((querySnapshot)=>{
               const docs = [];
               querySnapshot.forEach(doc=>{
                   docs.push({...doc.data()}.name);
                   setPlayers(docs);
               });
      })
   }
   useEffect(() => {
        getPlayers();
   }, []);
   useEffect(() => {
        setSelected(players[0])
   }, [players]);
   
    const getSessions = async () =>{
         db.collection('sessions')
            .onSnapshot((querySnapshot)=>{
                const docs = [];
                querySnapshot.forEach(doc=>{
                    docs.push({...doc.data(), id:doc.id});
                });
                setSessions(docs);
       })
    }
    const deleteSession = async (id) =>{
/*          if(window.confirm('Seguro que quieres borrar está sesión')){
             await db.collection('sessions').doc(id).delete();
             notification('😜 Sesión eliminada!')
         } */
        alert('No estás autorizado para borrar');
    }

    useEffect(() => {
        getSessions();
    }, []);

    const addPlayer = () =>{
        if(!choosed.includes(selected)){
            setChoosed([...choosed, selected])
        }
    }

    const deSelect = (player)=>{
        const idx = choosed.indexOf(player);
        const newArray = choosed;
        newArray.splice(idx, 1);
        setChoosed([newArray]);
    }

    return (
        <section className="AddSession">
            <h1>Registrar sesión de entreno</h1>
            <form ref={form} onSubmit={handleSubmit}> 
                <h3>Añade jugador</h3>
                <select onChange={(e) => setSelected(e.target.value)}>{players.map((player,index) => <option key={index}>{player}</option>)}</select>
                <button type="button" onClick={()=>addPlayer()}>Añadir jugador</button>
                <h3>Día</h3>
                <DatePicker name="day" selected={day} onChange={date => setDay(date)} />
                <h3>Desde</h3>
                <DatePicker
                    name="startD"
                    selected={startDate}
                    onChange={date => setStartDate(date)}
                    showTimeSelect
                    showTimeSelectOnly
                    timeIntervals={15}
                    timeCaption="Time"
                    dateFormat="h:mm aa"
                />
                <h3>Hasta</h3>
                <DatePicker
                    name="endD"
                    selected={endDate}
                    onChange={date => setEndDate(date)}
                    showTimeSelect
                    showTimeSelectOnly
                    timeIntervals={15}
                    timeCaption="Time"
                    dateFormat="h:mm aa"
                />
                <h3>Descripción de la sesión</h3>
                <textarea name="description" type="text" className="description"/>
           
            <div className="list">
                {choosed.map((player)=>(
                        <div className="choosed" onClick={()=>deSelect(player)}>
                            {player}
                        </div>
                ))}
            </div>  
            <button >
                Registrar
            </button>
            </form>
            <table>
                <thead>
                    <tr>
                        <th>Fecha</th>
                        <th>Inicio</th>
                        <th>Fin</th>
                        <th>Descripción</th>
                        <th>Asistentes</th>
                    </tr>
                </thead>
                <tbody>
                        {sessions.map((ses, index)=>{
                            return(
                            <tr key={`T${index}`}>
                                <td>{ses.day}</td>
                                <td>{ses.startD}</td>
                                <td>{ses.endD}</td>
                                <td>{ses.description}</td>
                                <td>{ses.players.map((pl,index)=>{
                                    return <li key={`L${index}`}>{pl}</li>;
                                })}
                                </td>
                                <td><FontAwesomeIcon icon={faWindowClose} onClick={()=>deleteSession(ses.id)}/></td>
                                <td><FontAwesomeIcon icon={faEdit} onClick={()=>setCurrentId(ses.id)}/></td>
                            </tr>
                            )
                        })}
                </tbody>
            </table>
        </section>
    )
}

export default AddSession; 