import chalk  from "chalk";

const date = new Date();
const prazoHr = 7;
const prazoMin = 10;
const hrs = date.getHours();
const min = date.getMinutes();
const formatMin = min < 9 ? "0" + min : ":" + min;
const chegada = hrs.toString() + formatMin.toString();

if (hrs > prazoHr && min > prazoMin) {
  console.log(chalk.red(`Você está atrasado ${chegada}`));
} else {
  console.log(chalk.green(`Muito bem, você não está atrasado!`));
}


