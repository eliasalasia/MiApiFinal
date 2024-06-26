import { pool } from '../config/db.js'

// Ruta para ver todos los ususarios
export const index = async (req, res) => {
  try {
    const sql = 'SELECT * FROM usuarios'
    const [usuarios] = await pool.query(sql)
    res.json(usuarios)
  } catch (error) {
    res.status(500).json({ message: 'Hubo un error interno' })
  }
}
// Para crear Usuarios
export const crear = async (req, res) => {
  try {
    const { nombre, email, contrasena, rol_id: rolId } = req.body

    if (!nombre || !email || !contrasena || !rolId) {
      return res.status(400).json({ message: 'Datos faltantes' })
    }

    await pool.execute('INSERT INTO usuarios(nombre, email, contrasena, rol_id) VALUES (?, ?, ?, ?)', [nombre, email, contrasena, rolId])
    res.status(201).json({ message: 'Usuario Creado' })
  } catch (error) {
    res.status(500).json({ message: 'hubo un error interno', details: error.message })
  }
}
// Ruta para Eliminar usuario
export const remover = async (req, res) => {
  try {
    const { id } = req.params
    await pool.execute('DELETE FROM usuarios WHERE id = ?', [id])
    res.json({ message: 'Usuario eliminado' })
  } catch (error) {
    res.status(500).json({ message: 'Hubo un error interno' })
  }
}
// Ruta para actualizar usuarios
export const actualizar = async (req, res) => {
  try {
    const { id } = req.params

    if (!id) return res.status(400).json({ message: 'No se reconoce al usuario' })
    const { nombre, email, contrasena } = req.body
    if (!nombre || !email || !contrasena) {
      return res.status(400).json({ message: 'Datos faltantes' })
    }
    await pool.execute('UPDATE usuarios SET nombre = ?, email = ?, contrasena = ? WHERE usuarios.id = ?', [nombre, email, contrasena, id])
    res.status(201).json({ message: 'Usuario Actualizado' })
  } catch (error) {
    res.status(500).json({ message: 'hubo un error interno', details: error.message })
  }
}
