import React from 'react'
import {Searchs} from "../components/Searchs/Searchs"
import {Busqueda} from "../components/Busqueda/Busqueda"
import { useLocalStorage } from "../hooks/useLocalStorage";

const Search = () => {
  const [token, saveToken]= useLocalStorage("TOKEN",{})
  const [user, saveUser]= useLocalStorage("USER",{})

  let dataExist = false

  let data = JSON.parse(window.localStorage.USER)
  if(data.name){
    dataExist = true

  }

  return (
    <div className="container" >
      {/*<Searchs /> */}
      <br/>
      <br/>
        { dataExist && (
          <>
            <Busqueda />
          </>
         )}
    </div>
  )
}

export {Search}