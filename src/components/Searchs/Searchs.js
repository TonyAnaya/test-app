import './Searchs.css';
import { useState } from 'react';
import {getData} from '../../api/api';
import {SearchObject} from './SearchActions'


function Searchs() {
    const [info,setInfo] =useState({open:"", high:"", low:"", close:"", volume:"", change:"", porcentaje:"", signo:""})
    const [info2,setInfo2] =useState({open:"", high:"", low:"", close:"", volume:"", change:"", porcentaje:"", signo:""})
    const [info3,setInfo3] =useState({open:"", high:"", low:"", close:"", volume:"", change:"", porcentaje:"", signo:""})
    const [info4,setInfo4] =useState({open:"", high:"", low:"", close:"", volume:"", change:"", porcentaje:"", signo:""})
    const [info5,setInfo5] =useState({open:"", high:"", low:"", close:"", volume:"", change:"", porcentaje:"", signo:""})
    
    let data = {
        symbol: "GOOG",
        size: "compact",
        key: "1K3D5JIN73XQRKJK",
        id: 1
    }
    let data2 = {
        symbol: "AAPL",
        size: "compact",
        key: "1K3D5JIN73XQRKJK",
        id: 2
    }
    let data3 = {
        symbol: "NFLX",
        size: "compact",
        key: "1K3D5JIN73XQRKJK",
        id: 3
    }
    let data4 = {
        symbol: "AMZN",
        size: "compact",
        key: "1K3D5JIN73XQRKJK",
        id: 4
    }
    let data5 = {
        symbol: "TSLA",
        size: "compact",
        key: "1K3D5JIN73XQRKJK",
        id: 5
    }

    async function tomadata(datita) {
        let signos = ""
        let res = await getData(datita)
        if(res){
            console.log(res)
        }
        let obj = SearchObject(res)
        console.log("changes           - " + obj.changes)
        console.log("open              - " + obj.opens)
        console.log("last Close        - " + obj.lastClose)
        const newinfo = obj

        switch (datita.id) {
            case 1:
                setInfo(newinfo)
              break;
            case 2:
                setInfo2(newinfo)
              break;
            case 3:
                setInfo3(newinfo)
              break;
            case 4:
                setInfo4(newinfo)
            break;
            case 5:
                setInfo5(newinfo)
                break;
          }


    }
    tomadata(data)
    tomadata(data2)
    tomadata(data3)
    tomadata(data4)
    tomadata(data5)

    


    return (
        <div className="search_fond row">
            <div className="container col-12 ">
                <div className="d-flex justify-content-around text-center">
                    <div className="col-2 subtit">Symbol</div>
                    <div className="col-1 subtit">Open</div>
                    <div className="col-1 subtit">High</div>
                    <div className="col-1 subtit">Low</div>
                    <div className="col-1 subtit">Close</div>
                    <div className="col-1 subtit">Volume</div>
                    <div className="col-1 offset-1 subtit">Change</div>
                    <div className="col-2 subtit">% Change</div>
                </div>
            </div>
            <div className="container col-12 ">
                <div className="d-flex justify-content-around text-center">
                    <div className="col-2 ">{data.symbol}</div>
                    <div className="col-1">{info.open}</div>
                    <div className="col-1">{info.high}</div>
                    <div className="col-1">{info.low}</div>
                    <div className="col-1">{info.close}</div>
                    <div className="col-1">{info.volume}</div>
                    <div className="col-1 offset-1">{info.signo}{info.change}</div>
                    <div className="col-2">{info.signo}{info.porcentaje}%</div>
                </div>
            </div>
            <div className="container col-12 ">
                <div className="d-flex justify-content-around text-center">
                    <div className="col-2">{data2.symbol}</div>
                    <div className="col-1">{info2.open}</div>
                    <div className="col-1">{info2.high}</div>
                    <div className="col-1">{info2.low}</div>
                    <div className="col-1">{info2.close}</div>
                    <div className="col-1">{info2.volume}</div>
                    <div className="col-1 offset-1">{info2.signo}{info2.change}</div>
                    <div className="col-2">{info2.signo}{info2.porcentaje}%</div>
                </div>
            </div>
            <div className="container col-12 ">
                <div className="d-flex justify-content-around text-center">
                    <div className="col-2">{data3.symbol}</div>
                    <div className="col-1">{info3.open}</div>
                    <div className="col-1">{info3.high}</div>
                    <div className="col-1">{info3.low}</div>
                    <div className="col-1">{info3.close}</div>
                    <div className="col-1">{info3.volume}</div>
                    <div className="col-1 offset-1">{info3.signo}{info3.change}</div>
                    <div className="col-2">{info3.signo}{info3.porcentaje}%</div>
                </div>
            </div>
            <div className="container col-12 ">
                <div className="d-flex justify-content-around text-center">
                    <div className="col-2 ">{data4.symbol}</div>
                    <div className="col-1">{info4.open}</div>
                    <div className="col-1">{info4.high}</div>
                    <div className="col-1">{info4.low}</div>
                    <div className="col-1">{info4.close}</div>
                    <div className="col-1">{info4.volume}</div>
                    <div className="col-1 offset-1">{info4.signo}{info4.change}</div>
                    <div className="col-2">{info4.signo}{info4.porcentaje}%</div>
                </div>
            </div>
            <div className="container col-12 ">
                <div className="d-flex justify-content-around text-center">
                    <div className="col-2">{data5.symbol}</div>
                    <div className="col-1">{info5.open}</div>
                    <div className="col-1">{info5.high}</div>
                    <div className="col-1">{info5.low}</div>
                    <div className="col-1">{info5.close}</div>
                    <div className="col-1">{info5.volume}</div>
                    <div className="col-1 offset-1">{info5.signo}{info5.change}</div>
                    <div className="col-2">{info5.signo}{info5.porcentaje}%</div>
                </div>
            </div>
        </div>
    )
}

export {Searchs}