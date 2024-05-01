import { Router } from 'express'
import { indexCateg, crearCateg, actualizarCateg, eliminarCateg } from '../controllers/categorias.controller.js'
import { verificarAdmin } from '../permisos/permisos.js'
const router = Router()

// Ruta para ver las categorias
router.get('/categorias', verificarAdmin, indexCateg)

// Ruta para crear categorias
router.post('/categorias/crear', verificarAdmin, crearCateg)

// Ruta para Actualizar las categorias
router.put('/categorias/actualizar', verificarAdmin, actualizarCateg)

// Ruta para Eliminar las categorias.
router.delete('/categorias/eliminar', verificarAdmin, eliminarCateg)

export default router
