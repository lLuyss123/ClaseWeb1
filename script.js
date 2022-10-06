// 1
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
