// se aplica en incio
//console.log("prueba hola mundo")


// const ingresos = [
//     new Ingreso('Sueldo', 195100),
//     new Ingreso('Particular', 11800),
//     new Ingreso('Extra', 21500.00)
// ];
const ingresos = [ 'Sueldo': 195100, 'Particular': 11800 , 'Extra', 21500.00)
];



const egresos = [
    new Egreso('super', 900),
    new Egreso('verduleria',250)
];


let cargarApp = ()=>{
    cargarCabecero();
    cargarIngresos();
    cargarEgresos();
}

let totalIngresos = () => {
    let totalIngreso = 0;
    for(let ingreso of ingresos){
        totalIngreso += ingreso.valor;
    }
    return totalIngreso;
}

let totalEgresos = ()=>{
    let totalEgreso = 0;
    for (let egreso of egresos){
        totalEgreso += egreso.valor;
    }
    return totalEgreso;
}

let cargarCabecero= ()=>{
    let presupuesto = totalIngresos() - totalEgresos();
    let porcentajeEgreso = totalEgresos()/totalIngresos();
    document.querySelector('#presupuesto').innerHTML = formatoMoneda(presupuesto);
    document.querySelector('#porcentaje').innerHTML = formatoPorcentaje(porcentajeEgreso);
    document.querySelector('#ingresos').innerHTML = formatoMoneda(totalIngresos());
    document.querySelector('#egresos').innerHTML = formatoMoneda(totalEgresos());
}

const formatoMoneda = (valor)=>{
    return valor.toLocaleString('en-US',{style:'currency', currency: 'USD', minimumFractionDigits:2});
}

const formatoPorcentaje = (valor)=>{
    return valor.toLocaleString('en-US',{style:'percent', percent: '%', minimumFractionDigits:2});
}

const cargarIngresos = () =>{
    let ingresosHTML = '';
    for(let ingreso of ingresos){
        ingresosHTML += crearIngresoHTML(ingreso);
    }
    document.querySelector('#lista-ingresos').innerHTML = ingresosHTML;
}

const crearIngresoHTML = (ingreso)=>{
    let ingresoHTML = `
    <div class="elemento limpiarEstilos">
        <div class="elemento_descripcion">${ingreso.descripcion}</div>
        <div class="derecha limpiarEstilos">
            <div class="elemento_valor">+ ${formatoMoneda(ingreso.valor)}</div>  
            <div class="elemento_eliminar">
                <button class='elemento_eliminar--btn'>
                    <ion-icon name="trash-outline"
                    onclick='eliminarIngreso(${ingreso.id})' ></ion-icon>
                </button>
            </div>
        </div>
    </div>
    `;
    return ingresoHTML;
}

const eliminarIngreso =(id)=>{
    let indiceEliminar = ingresos.findIndex( ingreso => ingreso.id === id);
    ingresos.splice(indiceEliminar, 1);
    cargarCabecero();
    cargarIngresos();
    }

const cargarEgresos = ()=>{
    let egresosHTML = '';
    for(let egreso of egresos){
        egresosHTML += crearEgresoHTML(egreso);
    }
    document.getElementById('lista-egresos').innerHTML = egresosHTML; 
}

const crearEgresoHTML = (egreso)=>{
    let egresoHTML=`
    <div class="elemento limpiarEstilos">
        <div class="elemento_descripcion">${egreso.descripcion}</div>
        <div class="derecha limpiarEstilos">
            <div class="elemento_valor">- ${formatoMoneda(egreso.valor)}</div>
            <div class="elemento_porcentaje">${formatoPorcentaje(egreso.valor/totalEgresos())}</div>
            <div class="elemento_eliminar">
                <button class='elemento_eliminar--btn'>
                    <ion-icon name="trash-outline"
                    onclick='eliminarEgreso(${egreso.id})'></ion-icon>
                </button>
            </div>
        </div>
    </div>
    `;
    return egresoHTML;
}

const eliminarEgreso =(id)=>{
    let indiceEliminar = egresos.findIndex( egreso => egreso.id === id);
    egresos.splice(indiceEliminar, 1);
    cargarCabecero();
    cargarEgresos();
    }

let agregarDato = ()=>{
    let forma = document.forms['forma'];
    console.log (forma)
    let tipo = forma['tipo'];
    let descripcion = forma['descripcion'];
    let valor = forma['valor'];
    if(descripcion.value !== '' && valor.value !== ''){
        if(tipo.value === 'ingreso'){
            ingresos.push( new Ingreso(descripcion.value, +valor.value));  //el mas convierte el valor a num o number(valor.value)
            cargarCabecero();
            cargarIngresos();
        }
        else if(tipo.value === 'egreso'){
            egresos.push( new Ingreso(descripcion.value, + valor.value));
            cargarCabecero();
            cargarEgresos();
        }
    }
}
