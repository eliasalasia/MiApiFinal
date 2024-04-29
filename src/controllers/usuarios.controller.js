import { pool } from '../config/db.js'

export const index = async (req, res) => {
  try {
    const sql = 'SELECT * FROM usuarios'
    const [usuarios] = await pool.query(sql)
    res.json(usuarios)
  } catch (error) {
    res.status(500).json({ message: 'Hubo un error interno' })
  }
}

export const crear = async (req, res) => {
  try {
    const { nombre, email, contrasena, rol } = req.body

    if (!nombre || !email || !contrasena || !rol) {
      return res.status(400).json({ message: 'Datos faltantes' })
    }

    await pool.execute('INSERT INTO usuarios(nombre, email, contrasena, rol) VALUES (?, ?, ?, ?)', [nombre, email, contrasena, rol])
    res.status(201).json({ message: 'Usuario Creado' })
  } catch (error) {
    res.status(500).json({ message: 'hubo un error interno', details: error.message })
  }
}

export const remover = async (req, res) => {
  try {
    const { id } = req.params
    await pool.execute('DELETE FROM usuarios WHERE id = ?', [id])
    res.json({ message: 'Usuario eliminado' })
  } catch (error) {
    res.status(500).json({ message: 'Hubo un error interno' })
  }
}

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
