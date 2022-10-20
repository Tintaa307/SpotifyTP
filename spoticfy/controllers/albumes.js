const conn = require("../db")

const getAlbumes = (_, res) => {
  const sql = "SELECT * FROM albumes"
  conn.query(sql, (error, results) => {
    if (error) {
      res.status(500).send("Hubo un error")
    } else {
      res.json(results)
    }
  })
}

const getAlbum = (req, res) => {
  const { id } = req.params
  const sql = `SELECT * FROM albumes WHERE id = ?`
  conn.query(sql, [id], (error, results) => {
    if (error) {
      res.status(500).send("Hubo un error")
    } else {
      res.json(results)
    }
  })
}

const createAlbum = (req, res) => {
  const sql = "INSERT INTO albumes SET ?"
  conn.query(sql, req.body, (error, results) => {
    if (error) {
      res.status(500).send("Hubo un error")
    } else {
      res.json(results)
    }
  })
}

const updateAlbum = (req, res) => {
  const { id } = req.params
  const sql = "UPDATE albumes SET ? WHERE id = ?"
  conn.query(sql, [req.body, id], (error, results) => {
    if (error) {
      res.status(500).send("Hubo un error")
    } else {
      res.json(results)
    }
  })
}

const deleteAlbum = (req, res) => {
  const { id } = req.params
  const sql = "DELETE FROM albumes WHERE id = ?"
  conn.query(sql, [id], (error, results) => {
    if (error) {
      res.status(500).send("Hubo un error")
    } else {
      res.json(results)
    }
  })
}

const getCancionesByAlbum = (req, res) => {
  const { id } = req.params
  const sql = `SELECT * FROM canciones WHERE album_id = ?`
  conn.query(sql, [id], (error, results) => {
    if (error) {
      res.status(500).send("Hubo un error")
    } else {
      res.json(results)
    }
  })
}

module.exports = {
  getAlbumes,
  getAlbum,
  createAlbum,
  updateAlbum,
  deleteAlbum,
  getCancionesByAlbum,
}
