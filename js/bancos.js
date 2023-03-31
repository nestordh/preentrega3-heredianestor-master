// se aplica en tarjetas
const bancosPriv = ["BBVA", "Galicia", "Patagonia" ];
const bancosPub = ["ProvinciaBA", "Ciudad", "StaFe" ];
const billeterasVirtuales = ["uala", "MercadoP", "bruk", "naranja"];
const tarjetasCredito =["visa", "Mastercard", "American"]

console.log(bancosPriv.length);
console.log(bancosPriv);
console.log(bancosPub);
console.log(billeterasVirtuales.length);
console.log(tarjetasCredito.length);

bancosPriv.push("Rio");
bancosPriv.unshift("Macro");
console.log(bancosPriv.length);
console.log(bancosPriv);

billeterasVirtuales.shift();
billeterasVirtuales.unshift("UALA");
console.log(billeterasVirtuales);

console.log(tarjetasCredito);
tarjetasCredito.splice(2,1);
console.log(tarjetasCredito);
tarjetasCredito.unshift("American Express");
console.log(tarjetasCredito);
console.log(tarjetasCredito.join(" * "))

const bancos = bancosPriv. concat(bancosPub);
console.log(bancos);

console.log(bancos.indexOf("bbva"));
console.log(bancos.indexOf("BBVA"));
console.log(bancos.indexOf("Rio"));
console.log(bancos.includes("Galicia"));
console.log(bancos.includes("santander"));
bancos.reverse();
console.log(bancos);
bancos.reverse();
console.log(bancos);

// let tarjCredNueva = prompt ("Ingresar nuevo Tarjeta de credito")
// tarjetasCredito.push(tarjCredNueva);
// console.log(tarjetasCredito);

    

console.log("*****************")

sessionStorage.setItem("fecha", new Date())  

localStorage.setItem('datosTarjeta', tarjetas)
const tarjetasString = JSON.stringify(tarjetas)
console.log(tarjetasString)
localStorage.setItem('datosTarjeta', tarjetasString)


for (let i = 0; i < localStorage.length; i++) {
    let clave = localStorage.key(i);
    console.log("Clave: "+ clave);
    console.log("Valor: "+ localStorage.getItem(clave));
}


let tarjeta = localStorage.getItem("tarjetas")
console.log(tarjeta)

localStorage.removeItem("")

let miEdad = localStorage.getItem("tarjeta")
console.log(tarjeta)






const ctasbancos = [
    { id: Date.now(), banco: 'Tricota', tipoCtaAhor: true, nCtaAho: 123456789, tipoCtaCte: "false", nCtaCte: 123456789, ctaDol: "false", nCtaDol: "", cbu: "classic", alias:"alias", alias2:"alias2"},
    { id: Date.now(), banco: 'Sur', tipoCtaAhor: true, nCtaAho: 345678912, tipoCtaCte: "true", nCtaCte: 123456789, ctaDol: "false", nCtaDol: "", cbu: "classic", alias:"alias", alias2:"alias2"},
    { id: Date.now(), banco: 'Galo', tipoCtaAhor: true, nCtaAho: 234567891, tipoCtaCte: "true", nCtaCte: 123456789, ctaDol: "false", nCtaDol: "", cbu: "classic", alias:"alias", alias2:"alias2"},
    { id: Date.now(), banco: 'Prov', tipoCtaAhor: true, nCtaAho: 456789123, tipoCtaCte: "false", nCtaCte: 123456789, ctaDol: "false", nCtaDol: "", cbu: "classic", alias:"alias", alias2:"alias2"},
    { id: Date.now(), banco: 'Pais', tipoCtaAhor: true, nCtaAho: 987654321, tipoCtaCte: "false", nCtaCte: 123456789, ctaDol: "false", nCtaDol: "", cbu: "classic", alias:"alias", alias2:"alias2"},
    { id: Date.now(), banco: 'Virtual', tipoCtaAhor: true, nCtaAho: 654321987, tipoCtaCte: "true", nCtaCte: 123456789, ctaDol: "false", nCtaDol: "", cbu: "classic", alias:"alias", alias2:"alias2"},

]
  
console.log(ctasbancos)

