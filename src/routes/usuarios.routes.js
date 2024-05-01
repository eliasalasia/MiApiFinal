import { Router } from 'express'
import { index, crear, remover, actualizar } from '../controllers/usuarios.controller.js'

const router = Router()
// Ruta para Admin
router.get('/api/admin', index)
// Ruta para crear usuarios
router.post('/api/usuarios/crear', crear)
// Ruta eliminar usuarios
router.delete('/api/usuarios/:id', remover)
// Ruta actualizar usuarios
router.put('/api/usuarios/:id', actualizar)

export default router
