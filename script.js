// 1
console.log("------- Ejercicio 1 -------");
function autosqueentran(placa){
    let amarillo=0, rosa=0, rojo=0, verde=0, azul=0;
    console.log("------------PLACAS------------")
for (const i in placa) {
    console.log(placa[i]);
    if (/[12]$/.test(placa[i])) {
        amarillo++;
    }else if (/[34]$/.test(placa[i])) {
        rosa++;
    } else if (/[56]$/.test(placa[i])) {
        rojo++;
    } else if (/[78]$/.test(placa[i])) {
        verde++;
    }else if (/[90]$/.test(placa[i])) {
        azul++;
    }
}
console.log("-------------------------------")
console.log("El total de autos con Calcomanía")
console.log("Amarilla:",amarillo); 
console.log("Rosa:",rosa); 
console.log("Roja:",rojo); 
console.log("Verde:",verde); 
console.log("Azul:",azul); 
}
const autos = {
    placa1: "AAA-12",
    placa2: "BBB-131",
    placa3: "ccc-11223"
}

autosqueentran(autos);

// 3
console.log("------- Ejercicio 3 -------");
function calcsalario(datos){
    for (const i in datos) {
        if (datos[i].horas <= 40) {
            datos[i].salario=(20*datos[i].horas);
        }else{
            datos[i].salario=(20*40)+(25*(datos[i].horas-40));
        }
    }
    console.log("------ Sin Horas Extras ------");
    for (const i in datos) {
        if (datos[i].horas <= 40) {
            console.log(datos[i]);
        }
    }
    console.log("------ Con Horas Extras ------");
    for (const i in datos) {
        if (datos[i].horas > 40) {
            console.log(datos[i]);
        }
    }
}

const obreros = {
    obrero1: {
        nombre: "Juanito Peres",
        horas: 40,
        salario:null
    },
    obrero2:{
        nombre: "Ivan Monsalves",
        horas: 100,
        salario:null
    },
    obrero3:{
        nombre: "Mateo Mat",
        horas: 200,
        salario:null
    },
    obrero4:{
        nombre: "Santiago Ultimo",
        horas: 25,
        salario:null
    }
}
calcsalario(obreros);

// 4
console.log("------- Ejercicio 4 -------");

function calpromedades(edad){
    let edadsinespa=edad.replace(/ /g, "");
    let vectoredades=edadsinespa.split(",");
    let suma=0;
    vectoredades.forEach(i => {
        suma=suma+parseInt(i);
    });
    console.log("El promedio de las edades ingresadas es de:",suma/vectoredades.length);
}
calpromedades("1,2,3,4,5,6");