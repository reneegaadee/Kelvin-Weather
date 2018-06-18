const kelvin = 0;
//kelvin will stay constant
let celsius = kelvin - 273;
//celsius is kelvin menos 273
let farenheit = celsius *(9/5) + 32;
//farenheit is celsius multiplied by 9/5 plus 32
farenheit = Math.floor(farenheit);
//farenheit is a decimal number
console.log(`The temperature is ${farenheit} degrees Farenheit`);

newton = celsius *(33/100);
newton = Math.floor(newton);
console.log(`${celsius} celsius are ${newton} newtons.`);
