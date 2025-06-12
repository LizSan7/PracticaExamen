const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function mostrarMenu() {
  console.log("\n=== Calculadora Básica ===");
  console.log("1. Sumar");
  console.log("2. Restar");
  console.log("3. Multiplicar");
  console.log("4. Dividir");
  console.log("Escribe 'salir' para terminar.\n");

  rl.question("Elige una opción (1-4): ", opcion => {
    if (opcion.toLowerCase() === "salir") {
      console.log("¡Adiós!");
      rl.close();
      return;
    }

    rl.question("Ingresa el primer número: ", num1 => {
      rl.question("Ingresa el segundo número: ", num2 => {
        const a = parseFloat(num1);
        const b = parseFloat(num2);

        let resultado;

        switch (opcion) {
          case "1":
            resultado = a + b;
            console.log(`Resultado: ${a} + ${b} = ${resultado}`);
            break;
          case "2":
            resultado = a - b;
            console.log(`Resultado: ${a} - ${b} = ${resultado}`);
            break;
          case "3":
            resultado = a * b;
            console.log(`Resultado: ${a} × ${b} = ${resultado}`);
            break;
          case "4":
            if (b === 0) {
              console.log("Error: No se puede dividir entre 0");
            } else {
              resultado = a / b;
              console.log(`Resultado: ${a} ÷ ${b} = ${resultado}`);
            }
            break;
          default:
            console.log("Opción no válida.");
        }

        mostrarMenu(); 
      });
    });
  });
}

mostrarMenu();
