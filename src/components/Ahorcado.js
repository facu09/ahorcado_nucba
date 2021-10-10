// import React from 'react'  //no hace falta
import { useState } from 'react';


const Ahorcado = () => {

    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNWY3ZGQzNGVmYmQ2MDAwNDg2ZWQ4ZSIsImlhdCI6MTYzMzY0ODExOH0.PwkCPI9i9IzFXOLut9t1gd_CzEiyFg1v6YRZ13IpEyo';
    
    ///hanged-game/start

    const baseURL = 'https://back-sandbox.herokuapp.com/api';
    const [letra, setLetra] = useState('');

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

            // setLetra('')

        } catch (error){
            alert(error);
        }
    }

    const handleOnChange = (e) => {
        console.log (e.target.value);
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
            console.log(json.data);

        } catch(error){
            alert(error);
        }

    }


    return (
        <div>
            <button onClick= {empezarJuego}>Empezar Juego</button>
        
            <input onChange={handleOnChange}  type = 'text' placeholder = 'letra o palabra'  />

            <button onClick= {mandarLetraOPalabra}>Mandar Letra</button>
        
        
        </div>
    )
}

export default Ahorcado
