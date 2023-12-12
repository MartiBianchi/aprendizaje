// Requires
const express = require('express')
const cookieParser = require('cookie-parser')
const methodOverride = require('method-override')
const path = require('path')

const app = express()

// Middlewares
app.use(express.json()) // --> permite leer peticiones JSON
app.use(express.urlencoded({ extended: true })) // --> permite leer peticiones de formularios
app.use(express.static(path.join(__dirname, '../public'))) // --> define ubicación de los archivos estáticos
app.use(cookieParser()) // --> permite la utilización de cookies
app.use(methodOverride('_method')) // --> permite peticiones PUT y DELETE

// EJS Config
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views')) // --> define la ubicación del directorio views

// Routes
const mainRouter = require('./routes/main')

app.use('/', mainRouter)

// Configs
const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`)
})
