// impor package
import inquirer from "inquirer";
import chalk from "chalk";

// here generate random number
let randomNumber: number = Math.round(Math.random() * 10 + 1)
// console.log(randomNumber);

let tries: number = 3
let playAgain = true

console.log(chalk.hex("#4fb5bd")("\nWelcome to the Guessing Game!\n"));


async function game() {

	while (playAgain) {

		while (tries > 0) {

			const userInput = await inquirer.prompt({
				name: "Guees",
				type: "number",
				message: "Enter a number between 1 to 10: "
			})

			if (isNaN(userInput.Guees)) {

				console.log(chalk.redBright("\nPlease enter a valid number\n"));

			} else {

				if (userInput.Guees === randomNumber) {

					console.log(chalk.greenBright("\nCangratulation! You guess correct number \n"));
					tries = 0
					break;

				} else if (userInput.Guees > randomNumber) {
					console.log("\nGuess lower");
					tries--
					console.log(`you have ${tries} chances\n`);


				} else if (userInput.Guees < randomNumber) {
					console.log("\nGuess higher");
					tries--
					console.log(` you have ${tries} chances\n`);
				}
			}
		}
		//here tryagain
		const tryagain = await inquirer.prompt({
			name: "TryAgain",
			type: "confirm",
			message: "Do you want to play again"
		})

		if (tryagain.TryAgain) {
			tries = 3
			randomNumber = Math.round(Math.random() * 10 + 1)
		} else {
			playAgain = false
			console.log(chalk.hex("#d9a714")("\nGood bye"));

		}

	}

}
game()