const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function mostrarMenu() {
  console.log("\n=== Conversor de Tiempo ===");
  console.log("1. Horas a minutos");
  console.log("2. Horas a segundos");
  console.log("3. Horas a días");
  console.log("Escribe 'salir' para terminar.\n");

  rl.question("Elige una opción (1-3): ", opcion => {
    if (opcion.toLowerCase() === "salir") {
      console.log("¡Hasta luego!");
      rl.close();
      return;
    }

    rl.question("Ingresa la cantidad de horas: ", horasStr => {
      const horas = parseFloat(horasStr);
      if (isNaN(horas)) {
        console.log("Por favor, ingresa un número válido.");
        mostrarMenu();
        return;
      }

      let resultado;
      switch(opcion) {
        case "1":
          resultado = horas * 60;
          console.log(`${horas} horas son ${resultado} minutos.`);
          break;
        case "2":
          resultado = horas * 3600;
          console.log(`${horas} horas son ${resultado} segundos.`);
          break;
        case "3":
          resultado = horas / 24;
          console.log(`${horas} horas son ${resultado.toFixed(2)} días.`);
          break;
        default:
          console.log("Opción no válida.");
      }
      mostrarMenu();
    });
  });
}

mostrarMenu();
