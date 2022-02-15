import './Landing.css';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import {apiLogin, searchUser, apiRegister, getData} from '../../api/api';
import { useLocalStorage } from "../../hooks/useLocalStorage";

function Landing() {

    const navigate = useNavigate()
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState({error:false,errorMessage:"Error"})
    const [user, saveUser]= useLocalStorage("USER",{})  
    const [token, saveToken]= useLocalStorage("TOKEN",{})


    const register = async (event) =>{
        event.preventDefault()
        setLoading(true)

        if(event.target[5].value === event.target[6].value){
            let resul = await searchUser(event.target[4].value)
            let obj = resul.result
            if(!obj){
                let newRegistro = {
                    name: event.target[0].value + " " + event.target[1].value,
                    email: event.target[4].value,
                    country: event.target[2].value,
                    phone: event.target[3].value,
                    pass: event.target[5].value,
                    account: "usuario"
                }
                
                setTimeout(() => {
                    let resu = apiRegister(newRegistro)
                    setLoading(false)
                }, 500);
            
            }else {
                console.log("Usuario ya existente")
                setLoading(false)
            }
    
        }

        event.target.reset();
    }



  return (
    <div className="landing row">
        <div className="col-lg-5 offset-1">    
            <h2>
                INVIERTE EN 3 SENCILLOS PASOS
            </h2>
            <div className="d-flex flex-column justify-content-around instruc">
                <h3 className="d-flex align-items-center">
                    INGRESA TUS DATOS
                    <img className="imga" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxr1BANwzlU6wMUva6u7SVbTHtCXHsLFQXFg&usqp=CAU"></img>
                </h3>
                <h3 className="d-flex justify-content-end align-items-center">
                    <img className="imga" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7DHiBFFONln6OOF8IENQnjWrZBO_5e4jCxQ&usqp=CAU"></img>
                    INICIA SESION
                </h3>
                <h3 className="d-flex align-items-center">
                    ¡COMIENZA A INVERTIR!
                    <img className="imga" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Eo_circle_blue_white_number-3.svg/1200px-Eo_circle_blue_white_number-3.svg.png"></img>

                </h3>
            </div>
        </div>

        <form className="col-lg-4 offset-1 d-flex flex-column justify-content-around" onSubmit={register}>
            <div className="form-group">
                <input type="text" className="form-control" id="nameInput" placeholder="Nombre"required/>
            </div>
            <br/>
            <div className="form-group">
                <input type="text" className="form-control" id="lastNameInput" placeholder="Apellido"required/>
            </div>
            <br/>
            <div className="form-group">
                <input type="text" className="form-control" id="countryInput" placeholder="Pais"required/>
            </div>
            <br/>
            <div className="form-group">
                <input type="text" className="form-control" id="phoneInput" placeholder="Telefono"required/>
            </div>
            <br/>
            <div className="form-group">
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email"required/>
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <br/>
            <br/>
            <div className="form-group">
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Contraseña"required/>
            </div>
            <br/>
            <div className="form-group">
                <input type="password" className="form-control" id="exampleInputPassword2" placeholder="Confirmar Contraseña"required/>
            </div>
            <br/>
            { !loading && (
            <div className="d-grid gap-2">
                <button type="submit" className="btn btn-primary btn-lg">¡Registrate Ahora!</button>
            </div>
            )}

            { loading && (
               <div className="text-center">
                <div className="spinner-grow text-primary" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            )}
        </form>

    </div>
  )
}

export {Landing}