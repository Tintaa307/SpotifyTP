const conn = require("../db")

const getCanciones = (_, res) => {
  const sql = "SELECT * FROM canciones"
  conn.query(sql, (error, results) => {
    if (error) {
      res.status(500).send("Hubo un error")
    } else {
      res.json(results)
    }
  })
}

const getCancion = (req, res) => {
  const { id } = req.params
  const sql = `SELECT * FROM canciones WHERE id = ?`
  conn.query(sql, [id], (error, results) => {
    if (error) {
      res.status(500).send("Hubo un error")
    } else {
      res.json(results)
    }
  })
}

const createCancion = (req, res) => {
  const sql = "INSERT INTO canciones SET ?"
  conn.query(sql, req.body, (error, results) => {
    if (error) {
      res.status(500).send("Hubo un error")
    } else {
      res.json(results)
    }
  })
}

const updateCancion = (req, res) => {
  const { id } = req.params
  const sql = "UPDATE canciones SET ? WHERE id = ?"
  conn.query(sql, [req.body, id], (error, results) => {
    if (error) {
      res.status(500).send("Hubo un error")
    } else {
      res.json(results)
    }
  })
}

const deleteCancion = (req, res) => {
  const { id } = req.params
  const sql = "DELETE FROM canciones WHERE id = ?"
  conn.query(sql, [id], (error, results) => {
    if (error) {
      res.status(500).send("Hubo un error")
    } else {
      res.json(results)
    }
  })
}

// funcion que aumenta el contador de reproducciones de una cancion

const reproducirCancion = (req, res) => {
  const { id } = req.params
  const sql =
    "UPDATE canciones SET reproducciones = reproducciones + 1 WHERE id = ?"
  conn.query(sql, [id], (error, results) => {
    if (error) {
      res.status(500).send("Hubo un error")
    } else {
      res.json(results)
    }
  })
}

module.exports = {
  getCanciones,
  getCancion,
  createCancion,
  updateCancion,
  deleteCancion,
  reproducirCancion,
}
