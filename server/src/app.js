import express from 'express'
import cors from 'cors'

//Importes de routes:
import leadRoutes from './routes/leads.route.js'

export const app = express()

//SETTINGS -> Para las configuraciones del servidor y guardar variables globales

app.set('port', process.env.PORT || 5001) //Definimos una 'variable' port que tiene el valor de PORT en .env o 5001

//MIDDLEWARES -> Para las funciones que se ejecutaran antes de llegar a las rutas

app.use(cors()) 
app.use(express.json()) 

//ROUTES -> Para las urls
app.use('/api/leads', leadRoutes) 
