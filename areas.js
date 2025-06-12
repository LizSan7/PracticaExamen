const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function mostrarMenu() {
  console.log("\n=== Calculadora de Áreas ===");
  console.log("1. Cuadrado");
  console.log("2. Rectángulo");
  console.log("3. Triángulo");
  console.log("4. Círculo");
  console.log("Escribe 'salir' para terminar.\n");

  rl.question("Elige una figura (1-4): ", opcion => {
    if (opcion.toLowerCase() === "salir") {
      console.log("¡Adioos!");
      rl.close();
      return;
    }

    switch (opcion) {
      case "1":
        rl.question("Lado del cuadrado: ", lado => {
          const area = Math.pow(parseFloat(lado), 2);
          console.log(`Área del cuadrado: ${area}`);
          mostrarMenu();
        });
        break;

      case "2":
        rl.question("Base: ", base => {
          rl.question("Altura: ", altura => {
            const area = parseFloat(base) * parseFloat(altura);
            console.log(`Área del rectángulo: ${area}`);
            mostrarMenu();
          });
        });
        break;

      case "3":
        rl.question("Base: ", base => {
          rl.question("Altura: ", altura => {
            const area = (parseFloat(base) * parseFloat(altura)) / 2;
            console.log(`Área del triángulo: ${area}`);
            mostrarMenu();
          });
        });
        break;

      case "4":
        rl.question("Radio: ", radio => {
          const area = Math.PI * Math.pow(parseFloat(radio), 2);
          console.log(`Área del círculo: ${area.toFixed(2)}`);
          mostrarMenu();
        });
        break;

      default:
        console.log("Opción no válida.");
        mostrarMenu();
    }
  });
}

mostrarMenu();
