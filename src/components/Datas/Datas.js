import { useState,useEffect } from 'react';
import {listBusqueda} from '../../api/api';
import "./Datas.css"

function Datas() {
    const [list, setList] = useState([])

    const newListBusqueda = async () => {
        const listBak = await listBusqueda()
        console.log(listBak)
        setList(listBak)
   }

    useEffect(()=>{
        newListBusqueda()
    },[])

  return (
    <div className="lista">
        <div className="card-body lista">
                <h3>Lista Busquedas:</h3>
                <table className="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <th>Simbolo</th>
                            <th># de busquedas</th>
                            <th>last_searched</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                            list.map(data =>(
                            <tr key={data.symbol}>
                                <td>{data.symbol}</td>
                                <td>{data.num_searched}</td>
                                <td>{data.last_searched}</td>
                            </tr>
                                ))
                        }   
                    </tbody>
               </table>
            </div>
    </div>
  )
}

export  {Datas}