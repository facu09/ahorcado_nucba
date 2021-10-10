// import React from 'react'  //no hace falta
import { useState } from 'react';


const Ahorcado = () => {

    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNWY3ZGQzNGVmYmQ2MDAwNDg2ZWQ4ZSIsImlhdCI6MTYzMzY0ODExOH0.PwkCPI9i9IzFXOLut9t1gd_CzEiyFg1v6YRZ13IpEyo';
    
    ///hanged-game/start

    const baseURL = 'https://back-sandbox.herokuapp.com/api';
   
    const [letra, setLetra] = useState('');
    const [respTry, setRespTry] = useState('');

    //Funcion para empezar Juego
    const empezarJuego = async() => {
        try {
            const response = await fetch(`${baseURL}/hanged-game/start`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
    
            //recupero y consoleo la respuesta del responso
            const json = await response.json();
            console.log(json.data);

            //blanqueo la varibale Letra para volver a empezar a jugar
            setLetra('');
            //FALTA: Tendria que ver como vacio el input FALTA

        } catch (error){
            alert(error);
        }
    }

    const handleOnChange = (e) => {
        console.log (e.target.value);
        //actualizo la variable de estado letra
        setLetra(e.target.value);
    }

    const mandarLetraOPalabra = async () => {
        // console.log ('paso por aca ' + letra );
        try{
            const response = await fetch(`${baseURL}/hanged-game/try`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ text: letra })
            });
            
            //le agrego que console la respuesta del Post
            const json = await response.json();
            console.log('Consoleo objeto json.data', json.data);
            //meto la respuesta en una varible de estado para mostrarla por pantalla
            setRespTry(json.data);

        } catch(error){
            alert(error);
        }

    }


    return (
        <div>
            <button onClick= {empezarJuego}>Empezar Juego</button>
        
            <input onChange={handleOnChange} type = 'text' placeholder = 'letra o palabra'  />

            <button onClick= {mandarLetraOPalabra}>Mandar Letra</button>
        
            {/* Tomado de Franco */}
            <div>

                <strong>{`Intentos: ${respTry.attempsMade} de ${respTry.totalAttemps}`}</strong>

                <p>{`Letras erroneas: ${respTry.wrongLetters}`}</p>
                <p>{`Cantidad de letras: ${respTry.totalWords}`}</p>

                <p style={{color: "red", 
                    border: "solid 2px black", 
                    margin: "0 30% 0 30%", 
                    letterSpacing: "10px",
                    padding: "15px"}}>
                    {`${respTry.matcheds}`}
                </p>

                <strong>{respTry.message}</strong>

            </div>

        </div>
    )
}

export default Ahorcado
