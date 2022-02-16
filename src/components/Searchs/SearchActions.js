
function SearchObject(res) {
  let signos = ""
  let opens = Object.values(Object.values(res['Time Series (Daily)'])[0])[0]
  let highs = Object.values(Object.values(res['Time Series (Daily)'])[0])[1]
  let lows = Object.values(Object.values(res['Time Series (Daily)'])[0])[2]
  let closes = Object.values(Object.values(res['Time Series (Daily)'])[0])[3]
  let volumes = Object.values(Object.values(res['Time Series (Daily)'])[0])[4]
  let lastClose = Object.values(Object.values(res['Time Series (Daily)'])[1])[3]
  let changes = lastClose-opens
  changes = changes.toFixed(2)
  if(changes >> 0){
       signos = "+"
       changes= changes * (-1)
  }
  let porcentajes = (changes*100)/lastClose
  porcentajes = porcentajes.toFixed(2)
  let objeto = {
    open:opens,
    high:highs,
    low:lows,
    close:closes,
    volume:volumes,
    change:changes,
    porcentaje:porcentajes,
    signo: signos
  }
  return objeto
}

export  {SearchObject}