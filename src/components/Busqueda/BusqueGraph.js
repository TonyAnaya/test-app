

function BusqueGraph(objetoVal,objetoKeys) {
    let objArre = []


    for (let i = 0; i < 100; i++) {
        let labels = objetoKeys[i]
        let values = Object.values(objetoVal[i])[0]
        let temp = {
            label: labels,
            value: values
        }

        let cont = objArre.push(temp)
    }
  return objArre
}

export {BusqueGraph}