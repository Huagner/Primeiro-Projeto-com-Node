const express = require('express')

const app = express()

app.use(express.json())

/**
 * PARAMS TYPES
 * =Route Paams : Identificar um recurso editar/deletar/buscar
 * =Query Params : Painação / Filtro
 * Body Params : Os objetos inserção/alteração (JSON)
 */

app.get("/courses", (request, response) => {
  const query = request.query
  console.log(query)
  return response.json([
    "fazerndo algo diferente 1", "curso 2", "curso 3"
  ])
})
app.post("/courses", (request, response) => {
  const body = request.body
  console.log(body)
  return response.json([
    "curso 1", "curso 2", "curso 3", "curso 4"
  ])
})
app.put("/courses/:id", (request, response) => {
  const params = request.params
  console.log(params)
  return response.json(["Curso 6,", "Curso 2","Curso 3", "Curso 4" ])
})
app.patch("/courses/:id", (request, response) => {
  return response.json(["Curso 6", "Curso 7", "Curso 3", "Curso 4"])
})
app.delete("/courses/:id", (request, response) => response.json([["Curso 6", "Curso 7", "Curso 4"]])
)

app.listen(3333)