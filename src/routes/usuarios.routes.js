import { Router } from 'express'
import { index, crear, remover, actualizar } from '../controllers/usuarios.controller.js'

const router = Router()

router.get('/api/admin', index)

router.post('/api/usuarios/crear', crear)

router.delete('/api/usuarios/:id', remover)

router.put('/api/usuarios/:id', actualizar)

export default router
