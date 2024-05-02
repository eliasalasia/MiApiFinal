import { Router } from 'express'
import { indexCateg, crearCateg, actualizarCateg, eliminarCateg, asociarC } from '../controllers/categorias.controller.js'
import { verificarAdmin } from '../permisos/permisos.js'
const router = Router()

// Ruta para ver  todas las categorias, hacer llamado de verificacion con "nombre": 1 o 2.
router.get('/categorias', verificarAdmin, indexCateg)

// Ruta para crear categorias usando: "nombre": "titulo de la categoria nueva"
router.post('/categorias/crear', verificarAdmin, crearCateg)

// Ruta para Actualizar las categorias: "nombre": (nombre de la categoria que quiere actualizar) y en la ruta modica el id con la que corresponde de la categoria a modificar.)
router.put('/categorias/actualizar/:id', verificarAdmin, actualizarCateg)

// Ruta para Eliminar las categorias.se hace lo mismo que en la ruta actualizar solo que se elimina.
router.delete('/categorias/eliminar/:id', verificarAdmin, eliminarCateg)

// Ruta para asosciar publicacion con categoria
router.get('/publicaciones/categorias/:id', asociarC)

export default router
