import { pool } from '../config/db.js'

export const indexCateg = async (req, res) => {
  const [categorias] = await pool.query('SELECT * FROM categorias')
  res.json(categorias)
}

export const crearCateg = async (req, res) => {
  try {
    const { nombre } = req.body
    const query = 'INSERT INTO categorias (nombre) VALUES (?)'
    const [result] = await pool.query(query, [nombre])
    res.status(201).json({ id: result.insertId, nombre })
  } catch (error) {
    console.error('Error al crear categoría:', error)
    res.status(500).json({ message: 'Error interno del servidor' })
  }
}

export const actualizarCateg = async (req, res) => {
  try {
    const { id } = req.params
    const { nombre } = req.body
    const query = 'UPDATE categorias SET nombre = ? WHERE id = ?'
    await pool.query(query, [nombre, id])
    res.json({ message: 'Categoría actualizada correctamente' })
  } catch (error) {
    console.error('Error al actualizar categoría:', error)
    res.status(500).json({ message: 'Error interno del servidor' })
  }
}

export const eliminarCateg = async (req, res) => {
  try {
    const { id } = req.params
    const query = 'DELETE FROM categorias WHERE id = ?'
    await pool.query(query, [id])
    res.json({ message: 'Categoría eliminada correctamente' })
  } catch (error) {
    console.error('Error al eliminar categoría:', error)
    res.status(500).json({ message: 'Error interno del servidor' })
  }
}
