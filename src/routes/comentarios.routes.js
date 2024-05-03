import { Router } from 'express'
import { actComent, crearComent, eliminarComentario, obtenerComent } from '../controllers/comentarios.controller.js'

const router = Router()

// Ruta crear nuevo comentario.
router.post('/publicaciones/comentario', crearComent)

// Ruta para actualizar comentario.
router.put('/actualizarcomentario/:id', actComent)

// Ruta para eliminar el comentario.
router.delete('/eliminarcoment/:id', eliminarComentario)

// Ruta para asociar publicacion con comentarios.
router.get('/publicaciones/:id/comentarios', obtenerComent)

export default router
