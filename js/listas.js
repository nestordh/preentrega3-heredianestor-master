//se aplica en ayuda --> lista pendiente

let h1 = document.querySelector("h1");

h1.innerText = 'Mis Pendientes a relizar';

let h2 = document.querySelector("h2");
h2.innerText = 'Listas';

const listaPendientes = document.querySelector('#lista-pendiente');

const formulario = document.querySelector('#formulario')

let pendientes = [];

document.addEventListener('DOMContentLoaded', () => {
    if(JSON.parse(localStorage.getItem('comentarios')) != null){
        comentarios = JSON.parse(localStorage.getItem('comentarios'))
    }
    render()
})

const limpiarHTML = () => {
    while(listaPendientes.firstChild){
        listaPendientes.removeChild(listaPendientes.firstChild)
    }
}

const sincronizarStorage = () => {
    localStorage.setItem('pendientes', JSON.stringify(pendientes))
}

const render = () => {
    limpiarHTML()           
    
    if (pendientes.length > 0){
        pendientes.forEach( pendiente => {
            const btnBorrar= document.createElement('a')
            btnBorrar.classList ='borrar-pendiente'
            btnBorrar.textContent =  "  🆑 "
            const p = document.createElement('p')
            p.textContent = pendiente.texto
            p.id = pendiente.id
            p.appendChild(btnBorrar)

            listaPendientes.appendChild(p)
        });
    }
    sincronizarStorage()
}

const mostrarError = (error) => {
    const mensajeError = document.createElement('p')
    mensajeError.textContent = error;
    mensajeError.classList.add('error')

    document.body.appendChild(mensajeError)

    setTimeout(() => {
        mensajeError.remove()
    }, 4000)
}

const agregarPendiente = (evt) => {
    evt.preventDefault()
    const pendiente = document.querySelector('#pendiente').value
        if (pendiente == ''){  
        mostrarError('Un comentario no puede estar vacio')
        return;          
        }
    const pendienteObj = { 
        id: Date.now(),
        texto: pendiente
    }
    pendientes.push(pendienteObj)
    
    render()  

    formulario.reset()
}

const borrarPendiente = (evt) => {
    evt.preventDefault();

    let id = evt.target.parentElement.id
    pendientes = pendientes.filter(pendiente => pendiente.id != id)
    render ();
}

formulario.addEventListener('submit', agregarPendiente);
listaPendientes.addEventListener('click', borrarPendiente);


