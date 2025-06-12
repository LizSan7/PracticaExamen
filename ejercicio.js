const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question("Cantidad total: ", cantidad => {
  readline.question("Porcentaje a calcular: ", porcentaje => {
    const resultado = (parseFloat(cantidad) * parseFloat(porcentaje)) / 100;
    console.log(`Resultado: ${resultado}`);
    readline.close();
  });
});
