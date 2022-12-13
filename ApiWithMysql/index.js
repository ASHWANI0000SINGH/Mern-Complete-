const express = require("express");
const app = express();
const connection = require("./config");
app.get("/", (req, res) => {
  connection.query("select * from products", (err, result) => {
    if (err) {
      console.log("error");
    } else {
      res.send(result);
    }
  });
});

app.use(express.json());

app.post("/users", (req, res) => {
  const data = req.body;
  connection.query("INSERT INTO products SET ?", data, (err, result) => {
    if (err) throw err;
    else {
      res.send(result);
    }
  });
});

app.put("/users/:id", (req, res) => {
  const data = [req.body.name, req.body.age, req.body.email, req.params.id];
  connection.query(
    "UPDATE products SET name = ?, age = ?, email = ? WHERE id = ?",
    data,
    (error, results, fields) => {
      if (error) throw error;
      res.send(results);
    }
  );
});

app.delete("/users/:id", (req, res) => {
  connection.query(
    "DELETE FROM products  WHERE id =" +req.params.id,
    (error, results, fields) => {
      if (error) throw error;
      res.send(req.params.id);
    }
  );
});


app.listen(4000);
