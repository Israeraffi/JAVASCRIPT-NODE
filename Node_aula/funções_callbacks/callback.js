function performe(name, exec) {
  const title = "Curso de JavaScript"
  console.log(`${name}, executou uma função`);
  exec(title);
}
performe("Israel", (title) => {
  console.log("Olá", title)
})