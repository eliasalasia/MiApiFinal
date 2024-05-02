import { pool } from '../config/db.js'

// Obtener todas las publicaciones
export const getPublicacion = async (req, res) => {
  try {
    const sql = 'SELECT p.*, usuario_id FROM publicaciones p INNER JOIN usuarios u ON p.usuario_id = u.id;'
    const [publicaciones] = await pool.query(sql)
    res.json(publicaciones)
  } catch (error) {
    res.status(500).json({ massage: 'Hubo un error interno', details: error.massage })
  }
}

// Filtrar publicaciones por categoría
export const porCateg = async (req, res) => {
  try {
    const categoriaId = req.params.categoriaId
    const query = 'SELECT * FROM publicaciones P INNER JOIN publicaciones_categorias pc ON p.id = pc.publicacion_id INNER JOIN categorias c ON c.id = pc.categoria_id WHERE c.id = ?'
    const [results] = await pool.query(query, [categoriaId])

    if (results.length === 0) { // Verificar si no se encontraron resultados
      res.status(404).json({ message: 'No se encontraron publicaciones para esta categoría' })
    } else {
      res.json(results) // Enviamos los resultados como respuesta
    }
  } catch (error) {
    console.error('Error al filtrar publicaciones por categoría:', error)
    res.status(500).json({ message: 'Error interno del servidor' })
  }
}
// Buscar publicaciones por título
export const porTit = async (req, res) => {
  try {
    const titulo = req.params.titulo // Corregir el nombre del parámetro
    const query = 'SELECT * FROM publicaciones p INNER JOIN publicaciones_categorias pc ON p.id = pc.publicacion_id INNER JOIN categorias c ON c.id = pc.categoria_id WHERE p.titulo = ?'

    const [results] = await pool.execute(query, [titulo])

    if (results.length === 0) { // Verificar si no se encontraron resultados
      return res.status(404).json({ message: 'No se encontraron publicaciones con el título proporcionado' })
    }

    res.json(results)
  } catch (error) {
    console.error('Error al filtrar publicaciones por título:', error)
    res.status(500).json({ message: 'Error interno del servidor' })
  }
}
// Crear la publicaciones por título
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
// Actualizar la publicacion
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
// eliminar la Publicacion
export const eliminarPublicacion = async (req, res) => {
  try {
    const { id } = req.params
    await pool.execute('DELETE FROM publicaciones WHERE id = ?', [id])
    res.json({ message: 'Publicación eliminada' })
  } catch (error) {
    res.status(500).json({ message: 'Hubo un error interno' })
  }
}
