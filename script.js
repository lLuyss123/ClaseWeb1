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
            console.log("Nombre:",datos[i].nombre);
            console.log("Salatio:",datos[i].salario);
        }
    }
    console.log("------ Con Horas Extras ------");
    for (const i in datos) {
        if (datos[i].horas > 40) {
            console.log("Nombre:",datos[i].nombre);
            console.log("Salatio:",datos[i].salario);
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

// 5
console.log("------- Ejercicio 5 -------");

function encuentramenor(conjunto){
    console.log(...conjunto);
    console.log("El número menor del conjunto de datos es:",Math.min(...conjunto));
}
encuentramenor([33,70,80,30,29,15,11]);

// 6
console.log("------- Ejercicio 6 -------");

function subioobajopeso(datos){
    
    for (const i in datos) {
        let total = datos[i].pesob1_b10.reduce((a, b) => a + b, 0);
        let prom=(total/10);
        console.log("Peso Inicial:",datos[i].peso_inicial,"KG");
        console.log("Peso Promedio:",prom,"KG");
        if (prom>datos[i].peso_inicial) {
            console.log(i,"Subió de Peso");
            console.log("Subió:",(prom - datos[i].peso_inicial).toFixed(2),"KG");
        } else {
            console.log(i,"Bajó de Peso");
            console.log("Bajó:",(prom - datos[i].peso_inicial).toFixed(2) * -1,"KG");
        }
        console.log("-----------");
    }
}
const infopersonas = {
    miempro1:{
        peso_inicial:50,
        pesob1_b10: [50,60,55,48,49,48,50,48,48,49]
    },
    miempro2:{
        peso_inicial:55,
        pesob1_b10: [50,51,52,55,51,53,54,55,51,55]
    },
    miempro3:{
        peso_inicial:60,
        pesob1_b10: [65,54,62,60,59,59,58,60,61,60]
    },
    miempro4:{
        peso_inicial:75,
        pesob1_b10: [80,76,77,78,79,70,70,71,72,70]
    },
    miempro5:{
        peso_inicial:80,
        pesob1_b10: [80,90,85,84,83,75,76,77,78,79]
    }
}
subioobajopeso(infopersonas);

// 7
console.log("------- Ejercicio 7 -------");

function calctotalcompra(datos){
    let suma=0;
    for (let i = 0; i < datos.length; i++) {
        if (i%2==0) {
            suma=suma+(datos[i]*datos[i+1]);
        }
    }
    console.log("El total a pagar es de:",suma);
}
calctotalcompra([1000,8,5000,2,10000,1,400,6,9500,5]);

// 8
console.log("------- Ejercicio 8 -------");

function calcdescuento(edades){
    const PRECIO=10000;
    let total=0;
    for (let i = 0; i < edades.length; i++) {
        if (edades[i]<5) {
            console.log("No puede ingresar porque su edad es menor que 5")
        } else if (edades[i]>=5 && edades[i]<=14) {
            total=total+(PRECIO*0.35);
        }else if (edades[i]>=15 && edades[i]<=19) {
            total=total+(PRECIO*0.25);
        }else if (edades[i]>=20 && edades[i]<=45) {
            total=total+(PRECIO*0.10);
        }else if (edades[i]>=46 && edades[i]<=65) {
            total=total+(PRECIO*0.25);
        }else{
            total=total+(PRECIO*0.35);
        }
        
    }
    console.log("El total de dinero que no está ganando es:",total)
}
calcdescuento([5,4,20,25,35,40,59,77,12]);

// 11
console.log("------- Ejercicio 11 -------");

let sum=0,pro=1,prom=0;
function esPrimo(num) {
    for(let i = 2; i < num; i++)
        if(num % i === 0) return false;
    return num > 1;
}

function calTodosPrimos(numeros) {
    let sum=0,pro=1,prom=0;
    for (let i = 0; i < numeros.length; i++) {
        if (esPrimo(numeros[i])) {
            sum=sum+numeros[i];
            pro=pro*numeros[i];
            prom=prom+numeros[i];
        }
    }
    console.log("Suma:",sum);
    console.log("Productoria:",pro);
    console.log("Promedio:",prom/numeros.length)
}
calTodosPrimos([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]);

