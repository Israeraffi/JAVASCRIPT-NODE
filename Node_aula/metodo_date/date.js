const date = new Date();

// Mostar o dia
console.log(date.getDate())
// Mostar o dia da semana em vetor [0, 1, 2, 3, 4, 5, 6]
console.log(date.getDay())
// Mostras o ano
console.log(date.getFullYear())
// Mastrar as horas
console.log(date.getHours())
// Mostrar os minutos
console.log(date.getMinutes())
// Mostrar o mês
console.log(date.getMonth())
// Mostar o nome do dia da semana, o mês, o dia e o ano
console.log(date.toDateString())
// Mostar tudo com o horario padrão
console.log(date.toString())