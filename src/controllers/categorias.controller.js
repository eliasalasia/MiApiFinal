import { pool } from '../config/db.js'

export const index = async (req, res) => {
  const [categorias] = await pool.query('SELECT * FROM categorias')
  res.json(categorias)
}

export const store = (req, res) => {
  res.send('Hola Jose')
}
