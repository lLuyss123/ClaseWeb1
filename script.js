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

// 2

console.log("------- Ejercicio 2 -------");

function Soologico(animales){
    let x, n=animales, total, edad, categoria1, categoria2, categoria3, animal;
    categoria1 = 0;
    categoria2 = 0;
    categoria3 = 0;
    if (n=="Elefante") {
        animal="Elefante";
        total=20;
    }else if (n=="Jirafa") {
        animal="Jirafa";
        total=15;
    }else if (n=="Chimpances") {
        animal="Chimpances";
        total=40;
    }
    for (let i = 0; i < total; i++) {
        edad= 1+Math.floor(Math.random() * 3);
        if (edad >= 0 && edad <= 1) {
            categoria1=categoria1+1;
        }else if (edad < 3) {
            categoria2 = categoria2 + 1;
        }else{
            categoria3 = categoria3 + 1;
        }
    }
    console.log(" Porcentaje de edades de",animal);
    console.log((categoria1/total)*100,"% de 0 a 1 año");
    console.log((categoria2/total)*100,"% de mas de 1 año y menos de 3");
    console.log((categoria3/total)*100,"% de 3 años o más");
}

Soologico("Jirafa")

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

// 9

console.log("------- Ejercicio 9 -------");

function Kiaautos(){
    let vendedor=[],comision_ven=[],venta,comision;
    let i=0,ventas=0;
    while (i<=2) {
        vendedor[i]=("Vendedor",i);
        venta=999909+Math.floor(Math.random()*200);
        if (venta >= 1000000 && venta <3000000) {
            comision=venta*0.03;
        }else if ( venta >= 3000000 && venta <5000000) {
            comision=venta*0.04;
        }else if (venta >=5000000 && venta <7000000) {
            comision=venta*0.05;
        }else if (venta >= 7000000) {
            comision=venta*0.06;
        }else if (venta<1000000) {
            console.log("El vendedor no tiene comisiones");
            comision=0;
        }
        comision_ven[i]=comision;
        i=i+1;
    }
    i=0;
    while (i<=2) {
        console.log("Vendedor",vendedor[i],"Comision:",comision_ven[i]);
        i=i+1;
    }
}

Kiaautos();

// 10

console.log("------- Ejercicio 10 -------");

function votos(){
    let voto,candi1=0,candi2=0,candi3=0;
    for(let i = 0; i < 50000; i++){
        voto= 1+Math.floor(Math.random() * 3);
        if (voto==1) {
            candi1=candi1+1;
        }else if (voto==2) {
            candi2=candi2+1;
        }else{
            candi3=candi3+1;
        }
    }
    if (candi1>candi2 && candi1>candi3) {
        console.log("El ganador es el candidato #1 con un total de votos de:",candi1);
    }else if (candi2>candi1 && candi2>candi3) {
        console.log("El ganador es el candidato #2 con un total de votos de:",candi2);
    }else if (candi3>candi1 && candi3>candi2) {
        console.log("El ganador es el candidato #3 con un total de votos de:",candi3)
    }else{
        console.log("Hubo empate")
        console.log("Candidato #1 total de votos:",candi1);
        console.log("Candidato #2 total de votos:",candi2);
        console.log("Candidato #3 total de votos:",candi3);
    }
}

votos();

// 11
console.log("------- Ejercicio 11 -------");

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
    console.log("Promedio:",prom/numeros.length);
}
calTodosPrimos([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]);

// 12
console.log("------- Ejercicio 12 -------");

function numEnteros(num){
    let vecnum=[...num.toString()];
    let sum=0,pro=1,prom=0,par=0,impar=0;
    for (let i = 0; i < vecnum.length; i++) {
        sum=sum+parseInt(vecnum[i]);
        pro=pro*parseInt(vecnum[i]);
        prom=prom+parseInt(vecnum[i]);
        if (vecnum[i]%2==0) {
            par=par+1;
        }else{
            impar=impar+1;
        }
    }
    console.log("Suma:",sum);
    console.log("Productoria:",pro);
    console.log("Promedio:",prom/vecnum.length);
    console.log("El total de los dígitos del número son:",num.toString().length);
    console.log("Total números pares:",par);
    console.log("Total números impares:",impar);
}
numEnteros(202589);

// 13
console.log("------- Ejercicio 13 -------");


function fibonachi(n){
    let sum0=0,sump=0,sumi=0;
    let limit = n;
    let fibo = [0,1];
    for(let i=2; i <= limit; i++){
        fibo[i] = fibo[i - 2] + fibo[i - 1];;
    }
    for (let i = 0; i < fibo.length; i++) {
        if (fibo[i]==0) {
            sum0=sum0+1;
        } else if (fibo[i]%2==0) {
            sump=sump+1;
        } else {
            sumi=sumi+1;
        }
    }
    console.log("Total de ceros:",sum0);
    console.log("Total de pares:",sump);
    console.log("Total de impares:",sumi);
}

fibonachi(10);

// 14

console.log("------- Ejercicio 14 -------");

function mcd(a,b){
    let temporal;
    while (b !== 0) {
        temporal = b;
        b = a % b;
        a = temporal;
    }
    console.log("El máximo común divisor entre los números es:",a);
}

mcd(5,25);

// 15

console.log("------- Ejercicio 15 -------");

function calcPoblacion(){
    let año = 1994, pA=25000000,pB=19900000;
    while (pB<pA) {
        pA=pA+((2/100)*100);
        pB=pB+((3/100)*100);
        año=año+1;
    }
    console.log("El año en el que supera es:",año)
}

calcPoblacion();