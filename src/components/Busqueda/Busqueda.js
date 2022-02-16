import './Busqueda.css'
import {getData} from '../../api/api';
import {BusqueGraph} from './BusqueGraph'
import { useState } from 'react';

// Step 2 - Include the react-fusioncharts component
import ReactFC from "react-fusioncharts";

// Step 3 - Include the fusioncharts library
import FusionCharts from "fusioncharts";

// Step 4 - Include the chart type
import Column2D from "fusioncharts/fusioncharts.charts";

// Step 5 - Include the theme as fusion
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

// Step 6 - Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

function Busqueda() {

    const [chartConfigs,setChar] =useState({})

    async function busquedita(event) {
        event.preventDefault()
        let time = ""
        if(event.target[1].value === "TIME_SERIES_DAILY"){
            time = 'Time Series (Daily)'
        }
        if(event.target[1].value === "TIME_SERIES_WEEKLY"){
            time = 'Weekly Time Series'
        }
        if(event.target[1].value === "TIME_SERIES_MONTHLY"){
            time = 'Monthly Time Series'
        }
        let datita = {
            symbol: event.target[0].value,
            size: "compact",
            key: "1K3D5JIN73XQRKJK",
            time: event.target[1].value
        }
        let res = await getData(datita)
        let objvar = Object.values(res[time])
        let objkeys = Object.keys(res[time])
        let arreglObjeto = BusqueGraph(objvar,objkeys)

    // Create a JSON object to store the chart configurations
        const chartConfig = {
            type: "column2d", // The chart type
            width: "700", // Width of the chart
            height: "400", // Height of the chart
            dataFormat: "json", // Data type
            dataSource: {
            // Chart Configuration
            chart: {
                caption: event.target[0].value,    //Set the chart caption
                subCaption: event.target[1].value,             //Set the chart subcaption
                xAxisName: "Time",           //Set the x-axis name
                yAxisName: "Value",  //Set the y-axis name
                numberSuffix: "K",
                theme: "fusion"                 //Set the theme for your chart
            },
            // Chart Data - from step 2
            data: arreglObjeto
            }
        };
        setChar(chartConfig)

    }

  return (
    <div className="search_fond row">
        <form className="row col-12 formita" onSubmit={busquedita}>
            <div className="form-group col-3 offset-2">
                <input type="text" className="form-control"   placeholder="Stock" />
            </div>
            <div className="form-group col-3">
                <select className="form-control" id="exampleFormControlSelect1">
                    <option>TIME_SERIES_DAILY</option>
                    <option>TIME_SERIES_WEEKLY</option>
                    <option>TIME_SERIES_MONTHLY</option>
                </select>
            </div>
            <button type="submit" className="btn btn-primary col-2 ">Search</button>
        </form>
        <div className="container graph col-12">
            
        { chartConfigs && (
          <>
            <ReactFC {...chartConfigs} />
          </>
         )}
        </div>
    </div>
  )
}

export  {Busqueda}