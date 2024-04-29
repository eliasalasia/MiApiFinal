export const verificarPermisos = (rolRequerido) => {
  return (req, res, next) => {
    const usuario = req.usuario
    if (!usuario || usuario.rol !== rolRequerido) {
      return res.status(403).json({ message: 'No tienes permiso para acceder a esta ruta' })
    }
  }
}
