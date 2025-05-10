const mysql = require("mysql2");

class DB {
  constructor() {
    if (!DB.instance) {
      this.connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "", // שנה אם יש סיסמה
        database: "task2", 
      });
      this.connection.connect((err) => {
        if (err) {
          console.error("Error connecting to the database:", err.message);
        } else {
          console.log("Connected to the database.");
        }
      });
      DB.instance = this;
    }

    return DB.instance;
  }

  getConnection() {
    return this.connection;
  }
}

module.exports = new DB();
