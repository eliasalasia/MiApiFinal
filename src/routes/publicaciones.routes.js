import { Router } from 'express'
import { getPublicacion, porCateg, porTit, crearPublicacion, actPublicacion, eliminarPublicacion } from '../controllers/publicaciones.controller.js'

const router = Router()
// Ruta para ver las publicaciones
router.get('/publicaciones', getPublicacion)
// Ruta para filtrar categoria
router.get('/publicaciones/categoria/:categoriaId', porCateg)
// Ruta para filtrar por titulo
router.get('/publicaciones/titulo/:nombre', porTit)
// Ruta crea Publicacion.
router.post('/publicaciones', crearPublicacion)
// Ruta actualiza la publicacion.
router.put('/publicaciones/:id', actPublicacion)
// Ruta elimina la publicacion.
router.delete('/publicaciones/:id', eliminarPublicacion)

export default router
