const express = require("express");
const router = express.Router();
const db = require("../db");

const connection = db.getConnection();

//הוספת מאמר
router.post("/", (req, res) => {
  const { title, content, author } = req.body;
  if (!title || !author) {
    return res.status(400).json({ error: "Title and author are required" });
  }
  const sql = "INSERT INTO articles (title, content, author) VALUES (?, ?, ?)";
  connection.query(sql, [title, content, author], (err, result) => {
    if (err) {
      console.error("Database error:", err.message);
      return res.status(500).json({ error: "Failed to insert article" });
    }
    res.status(201).json({
      message: "Article added successfully",
      articleId: result.insertId,
    });
  });
});

// קבלת רשימה של כל המאמרים (כולל לפי שם מחבר ותאריך יצירה)
router.get("/", (req, res) => {
  const author = req.query.author;
  const createdAfter = req.query.created_after;
  let sql = "SELECT * FROM articles";
  let conditions = [];
  let params = [];

  if (author) {
    conditions.push("author = ?");
    params.push(author);
  }
  if (createdAfter) {
    conditions.push("created_at > ?");
    params.push(createdAfter);
  }
  const titleLike = req.query.title_like;
  if (titleLike) {
    conditions.push("title LIKE ?");
    params.push(`%${titleLike}%`);
  }
  if (conditions.length > 0) {
    sql += " WHERE " + conditions.join(" AND ");
  }

  // מיון לפי תאריך יצירה
  if (req.query.sort === "created_at_desc") {
    sql += " ORDER BY created_at DESC";
  }

  connection.query(sql, params, (err, results) => {
    if (err) {
      console.error("Database error:", err.message);
      return res.status(500).json({ error: "Failed to retrieve articles" });
    }
    res.json(results);
  });
});

// קבלת מידע על מאמר לפי מזהה
router.get("/:id", (req, res) => {
  const articleId = req.params.id;
  const sql = "SELECT * FROM articles WHERE id = ?";
  connection.query(sql, [articleId], (err, results) => {
    if (err) {
      console.error("Database error:", err.message);
      return res.status(500).json({ error: "Failed to retrieve article" });
    }
    if (results.length === 0) {
      return res.status(404).json({ error: "Article not found" });
    }
    res.json(results[0]);
  });
});

// מחיקת מאמר לפי מזהה
router.delete("/:id", (req, res) => {
  const articleId = req.params.id;
  const sql = "DELETE FROM articles WHERE id = ?";
  connection.query(sql, [articleId], (err, result) => {
    if (err) {
      console.error("Database error:", err.message);
      return res.status(500).json({ error: "Failed to delete article" });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Article not found" });
    }
    res.json({ message: "Article deleted successfully" });
  });
});

// קבלת מספר המאמרים במסד הנתונים
router.get("/count", (req, res) => {
  const sql = "SELECT COUNT(*) AS count FROM articles";
  connection.query(sql, (err, results) => {
    if (err) {
      console.error("Database error:", err.message);
      return res.status(500).json({ error: "Failed to retrieve article count" });
    }
    res.json({ count: results[0].count });
  });
});

// קבלת רשימת מחברים (ללא כפילויות)
router.get("/authors", (req, res) => {
  const sql = "SELECT DISTINCT author FROM articles";
  connection.query(sql, (err, results) => {
    if (err) {
      console.error("Database error:", err.message);
      return res.status(500).json({ error: "Failed to retrieve authors" });
    }
    // Return as a flat array of authors
    res.json(results.map(row => row.author));
  });
});

module.exports = router;
