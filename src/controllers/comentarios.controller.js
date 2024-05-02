import { pool } from '../config/db.js'

// Crear comentario
export const crearComent = async (req, res) => {
  try {
    const { usuario_id: usuarioId, publicacion_id: publicacionId, comentario, fecha_creacion: fechaCreacion } = req.body

    if (!usuarioId || !publicacionId || !comentario || !fechaCreacion) {
      return res.status(400).json({ message: 'Datos faltantes' })
    }

    await pool.execute('INSERT INTO comentarios(usuario_id, publicacion_id, comentario, fecha_creacion) VALUES (?, ?, ?, ?)', [usuarioId, publicacionId, comentario, fechaCreacion])
    res.status(201).json({ message: 'Comentario creado' })
  } catch (error) {
    res.status(500).json({ message: 'Hubo un error interno', details: error.message })
  }
}
// actualizar Comentario
export const actComent = async (req, res) => {
  try {
    const { id } = req.params

    if (!id) return res.status(400).json({ message: 'No se reconoce al Comentario' })
    const { comentario, fecha_creacion: fechaCreacion } = req.body
    if (!comentario || !fechaCreacion) {
      return res.status(400).json({ message: 'Datos faltantes' })
    }

    await pool.execute('UPDATE comentarios SET comentario = ?, fecha_creacion = ? WHERE comentarios.id = ?', [comentario, fechaCreacion, id])
    res.status(201).json({ message: 'Comentario Actualizado' })
  } catch (error) {
    res.status(500).json({ message: 'Hubo un error interno', details: error.message })
  }
}

// Eliminar comentario
export const eliminarComentario = async (req, res) => {
  try {
    const { id } = req.params
    await pool.execute('DELETE FROM comentarios WHERE id = ?', [id])
    res.json({ message: 'Publicación eliminada' })
  } catch (error) {
    res.status(500).json({ message: 'Hubo un error interno' })
  }
}

export const obtenerComent = async (req, res) => {
  try {
    const { id } = req.params

    if (!id || isNaN(id)) {
      return res.status(400).json({ message: 'ID de publicación no válido' })
    }

    const [comentarios] = await pool.query(
      'SELECT * FROM comentarios WHERE publicacion_id = ?',
      [id]
    )

    if (comentarios.length === 0) {
      return res.status(404).json({ message: 'No se encontraron comentarios para esta publicación' })
    }

    res.json(comentarios)
  } catch (error) {
    console.error('Error al obtener comentarios para la publicación:', error)
    res.status(500).json({ message: 'Error interno del servidor' })
  }
}
