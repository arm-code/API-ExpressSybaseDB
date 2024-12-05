const express = require('express')
const bodyParser = require('body-parser')
const tasksRoutes = require('./routes/TasksRoutes')

const app = express()
const PORT = 3000

app.use(bodyParser.json())
app.use('/tasks', tasksRoutes)

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`)
})