const num = 5;
let fat = num;
for (let i = num - 1; i > 0; i--) {
    fat = fat * i;
}
console.log("O fatorial de " + num + " é igual a " + fat);