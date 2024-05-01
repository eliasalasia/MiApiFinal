import { Router } from 'express'
import { index, store } from '../controllers/categorias.controller.js'
import { verificarAdmin } from '../permisos/permisos.js'
const router = Router()

router.get('/categorias', verificarAdmin, index)
router.post('/categorias', store)

export default router
