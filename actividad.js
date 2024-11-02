let randomNumber = Math.floor(Math.random() * 10) + 1;
        let attempts = 5;

        alert("Bienvenido al juego 'Adivina el Número'!");
        alert("Tienes 5 intentos para adivinar el número entre 1 y 10.");

        while (attempts > 0) {
            let userGuess = parseInt(prompt("Introduce tu suposición: "), 10);

            if (isNaN(userGuess) || userGuess < 1 || userGuess > 10) {
                alert("Por favor, introduce un número válido entre 1 y 10.");
                continue;
            }

            if (userGuess > randomNumber) {
                alert("Demasiado alto.");
            } else if (userGuess < randomNumber) {
                alert("Demasiado bajo.");
            } else {
                alert("¡Felicidades! Has adivinado el número correctamente.");
                break;
            }

            attempts--;
            if (attempts > 0) {
                alert(`Te quedan ${attempts} intentos.`);
            }
        }

        if (attempts === 0) {
            alert(`Lo siento, no has adivinado el número. El número correcto era ${randomNumber}.`);
        }