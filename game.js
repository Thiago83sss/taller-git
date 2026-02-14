let n = Math.floor(Math.random() * 10) + 1;
console.log("Número a adivinar:", n);

for (let i = 0; i < 16; i++) 
{

    let num = Number(prompt("Ingresa un número del 1 al 15"));

    if (num == n) {
        console.log(" Ganaste");
        break;
    } 
    else if (Math.abs(n - num) <= 2) {
        console.log(" Caliente");
    } 
    else {
        console.log("Frío");
    }

}