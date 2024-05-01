import { pool } from '../config/db.js'

export const verificarAdmin = async (req, res, next) => {
  const { nombre } = req.body

  if (!nombre) {
    return res.status(400).json({ message: 'Usuario no identificado' })
  }

  const [usuario] = await pool.execute('SELECT * FROM usuarios WHERE usuarios.id = ?', [nombre])
  if (usuario.length === 0) {
    return res.status(404).json({ message: 'Usuario no encontrado' })
  }

  if (usuario[0].rol_id !== 1) {
    return res.status(403).json({ message: 'No permitido' })
  }

  next()
}
