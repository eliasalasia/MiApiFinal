import { pool } from '../config/db.js'

export const crearPublicacion = async (req, res) => {
  try {
    const { usuario_id: usuarioId, titulo, contenido, fecha_creacion: fechaCreacion } = req.body

    if (!usuarioId || !titulo || !contenido || !fechaCreacion) {
      return res.status(400).json({ message: 'Datos faltantes' })
    }

    await pool.execute('INSERT INTO publicaciones(usuario_id, titulo, contenido, fecha_creacion) VALUES (?, ?, ?, ?)', [usuarioId, titulo, contenido, fechaCreacion])
    res.status(201).json({ message: 'Publicación creada' })
  } catch (error) {
    res.status(500).json({ message: 'Hubo un error interno', details: error.message })
  }
}

export const actPublicacion = async (req, res) => {
  try {
    const { id } = req.params
    const { titulo, contenido, fecha_creacion: fechaCreacion } = req.body

    if (!id) return res.status(400).json({ message: 'No se reconoce la publicación' })
    if (!titulo || !contenido || !fechaCreacion) {
      return res.status(400).json({ message: 'Datos faltantes' })
    }

    await pool.execute('UPDATE publicaciones SET titulo = ?, contenido = ?, fecha_creacion = ? WHERE publicaciones.id = ?', [titulo, contenido, fechaCreacion, id])
    res.status(200).json({ message: 'Publicación actualizada' })
  } catch (error) {
    res.status(500).json({ message: 'Hubo un error interno', details: error.message })
  }
}

export const eliminarPublicacion = async (req, res) => {
  try {
    const { id } = req.params
    await pool.execute('DELETE FROM publicaciones WHERE id = ?', [id])
    res.json({ message: 'Publicación eliminada' })
  } catch (error) {
    res.status(500).json({ message: 'Hubo un error interno' })
  }
}
