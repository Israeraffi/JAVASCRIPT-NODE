// No package.json o main: executa o arquivo que estiver como principal

// No Script: {"start": executa o arquivo que estiver la, e normalmente deixamos node --env-file .env endereço do arquivo}( Isso para poder acessar os dados  que estão no arquivo .env)

// No Script: {"watch": "node --watch --env-file .env endereço do arquivo"}( Isso faz com que o arquivo seja executado em tempo real no terminal )

// Posso fazer um Script para abrir a pasta e executar o arquivo -> "dev": "cd nome da pasta && node nome do arquivo"

// Posso chamar um Script dentro de outro

console.log("Olá Israel!")

console.log(process.env.EMAIL)
console.log(process.env.PASSWORD)