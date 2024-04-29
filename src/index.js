import express from 'express'
import { PORT } from './config/config.js'
import usuariosRoutes from './routes/usuarios.routes.js'
import publicacionesRoutes from './routes/publicaciones.routes.js'

const app = express()

app.use(express.json())

app.use(usuariosRoutes)

app.use(publicacionesRoutes)

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))
