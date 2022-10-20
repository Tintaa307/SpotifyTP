const conn = require("../db")

// obtiene todos los artistas

const getArtistas = (_, res) => {
  const sql = "SELECT * FROM artistas"
  conn.query(sql, (error, results) => {
    if (error) {
      res.status(404).send("Hubo un error")
    } else {
      res.json(results)
    }
  })
}

const getArtista = (req, res) => {
  const { id } = req.params
  const sql = `SELECT * FROM artistas WHERE id = ?`
  conn.query(sql, [id], (error, results) => {
    if (error) {
      res.status(404).send("Hubo un error")
    } else {
      res.json(results)
    }
  })
}

const createArtista = (req, res) => {
  const sql = "INSERT INTO artistas SET ?"
  conn.query(sql, req.body, (error, results) => {
    if (error) {
      res.status(404).send("Hubo un error")
    } else {
      res.json(results)
    }
  })
}

const updateArtista = (req, res) => {
  const { id } = req.params
  const sql = "UPDATE artistas SET ? WHERE id = ?"
  conn.query(sql, [req.body, id], (error, results) => {
    if (error) {
      res.status(404).send("Hubo un error")
    } else {
      res.json(results)
    }
  })
}

const deleteArtista = (req, res) => {
  const { id } = req.params
  const sql = "DELETE FROM artistas WHERE id = ?"
  conn.query(sql, [id], (error, results) => {
    if (error) {
      res.status(404).send("Hubo un error")
    } else {
      res.json(results)
    }
  })
}

const getAlbumesByArtista = (req, res) => {
  const { id } = req.params
  const sql = `SELECT * FROM albumes WHERE artista_id = ?`
  conn.query(sql, [id], (error, results) => {
    if (error) {
      res.status(404).send("Hubo un error")
    } else {
      res.json(results)
    }
  })
}

const getCancionesByArtista = (req, res) => {
  const { id } = req.params
  const sql = `SELECT * FROM canciones WHERE artista_id = ?`
  conn.query(sql, [id], (error, results) => {
    if (error) {
      res.status(404).send("Hubo un error")
    } else {
      res.json(results)
    }
  })
}

module.exports = {
  getArtistas,
  getArtista,
  createArtista,
  updateArtista,
  deleteArtista,
  getAlbumesByArtista,
  getCancionesByArtista,
}
