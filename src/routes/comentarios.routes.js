import { Router } from 'express'
import { actComent, crearComent, eliminarComentario, obtenerComent } from '../controllers/comentarios.controller.js'

const router = Router()

// Ruta crear nuevo comentario
router.post('/publicaciones/comentario', crearComent)
router.put('/actualizarcomentario/:id', actComent)
router.delete('/eliminarcoment/:id', eliminarComentario)
router.get('/publicaciones/:id/comentarios', obtenerComent)

export default router
