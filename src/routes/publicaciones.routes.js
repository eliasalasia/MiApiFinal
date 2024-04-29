import express from 'express'
import { crearPublicacion, actPublicacion, eliminarPublicacion } from '../controllers/publicaciones.controller.js'

const router = express.Router()

router.post('/publicaciones', crearPublicacion)
router.put('/publicaciones/:id', actPublicacion)
router.delete('/publicaciones/:id', eliminarPublicacion)

export default router
