export const verificarAdmin = async (req, res, next) => {
  try {
    const { id } = req.body

    // Verificar si el ID proporcionado es 1
    if (id !== 2) {
      return res.status(403).json({ message: 'No permitido' })
    }

    // Si el ID es 1, continuar con la creación de la categoría
    next()
  } catch (error) {
    console.error('Error al verificar permisos:', error)
    res.status(500).json({ message: 'Error interno del servidor' })
  }
}
