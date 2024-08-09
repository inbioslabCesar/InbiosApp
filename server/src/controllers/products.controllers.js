import { pool } from "../database/connectionMySQL.js";

export const getProducts = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM exams ORDER BY createdAt ASC"
    );
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getProduct = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM exams WHERE id = ?", [
      req.params.id,
    ]);

    if (result.length === 0) {
      return res.status(404).json({ message: "Examen no encontrado" });
    }
    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createProducts = async (req, res) => {
  try {
    const { exam, sample, method, pricep, pricec, tube, preanalitic, time} =
      req.body;
    const [result] = await pool.query(
      "INSERT INTO exams (exam, sample, method, pricep, pricec, tube, preanalitic, time)" +
        "VALUES (?,?,?,?,?,?,?,?)",
      [exam, sample, method, pricep, pricec, tube, preanalitic, time]
    );
    console.log(result);
    res.json({
      id: result.insertId,
      exam,
      sample,
      method,
      pricep,
      pricec,
      tube,
      preanalitic,
      time,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const result = await pool.query("UPDATE exams SET ? WHERE id =?", [
      req.body,
      req.params.id,
    ]);
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteProducts = async (req, res) => {
  try {
    const [result] = await pool.query("DELETE FROM exams WHERE id = ?", [
      req.params.id,
    ]);
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Examen no encontrado" });
    }
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
