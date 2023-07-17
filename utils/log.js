const chalk = require('chalk');

module.exports = (data, option) => {
	switch (option) {
		case "warn":
			console.log(chalk.bold.hex("#0000FF")('[ ❕ WARNING] » ')  + data );
			break;
		case "error":
			console.log(chalk.bold.hex("#0000FF")('[ ❗ ERROR ] » ') + data );
			break;
		default:
			console.log(chalk.bold.hex("#0000FF")(`${option} » `) + data);
			break;
	}
}

module.exports.loader = (data, option) => {
	switch (option) {
		case "warn":
			console.log(chalk.bold.hex("#0000FF")('[ L. SIWOO ] ') +data + chalk.bold.hex("FFF0000")("\n✦────────────────────────────────────────✦" ));
			break;
		case "error":
			console.log(chalk.bold.hex("#0000FF")('[ L. SIWOO ]') + data + chalk.bold.hex("1000FF")("\n✦────────────────────────────────────────✦" ));
			break;
		default:
			console.log(chalk.bold.hex("#0000FF")('[ L. SIWOO ]  ') + data + chalk.bold.hex("FF00E7")("\n✦────────────────────────────────────────✦" ));
			break;
	}
}