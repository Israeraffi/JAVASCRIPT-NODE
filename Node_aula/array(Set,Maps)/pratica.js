import { text } from "@clack/prompts";

async function main() {
  const texto = await text({ message: "Digite varios números: " });
  const valores = texto.split(" ").map(Number);
  const numbers = new Set(valores);

  console.log(valores)
  console.log(numbers)
}
main()