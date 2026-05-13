const express = require("express")
const cursos = require("./cursos")
const users = require('./users')
const port = process.env.PORT || 3000

const app = express()

app.use('/',users)
app.use('/',cursos)


app.get('/*any',(request, response) => {
  response.send("Israel Raffi")
})

app.listen(port,()=>{
console.log("Sistema Rodando!")
})