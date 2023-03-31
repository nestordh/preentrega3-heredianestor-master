//se aplica en inicio

let ingreso = document.querySelectorAll ('.presupuesto_ingreso--valor')  
//console.log(ingreso)
ingreso[0].style.backgroundColor = '#A4F098' 

let egreso = document.querySelectorAll ('#egresos')  
//console.log(egreso)
egreso[0].style.backgroundColor = '#E2260D' 



let presup = document.querySelectorAll ('#presupuesto')  
//console.log(presup)
if( presup >= "0") {
    presup[0].style.backgroundColor = '#A4F098'
}else {
    presup[0].style.backgroundColor = '#E2260D' 
}
