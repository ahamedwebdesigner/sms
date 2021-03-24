// get single user details
app.get("/api/user/:id", (req, res, next) => {
    var sql = "select * from user where id = ?"
    var params = [req.params.id]
    db.get(sql, params, (err, row) => {
        if (err) {
          res.status(400).json({"error":err.message});
          return;
        }
        res.json({
            "message":"success",
            "data":row
        })
      });
});



// jquery

 forEach(let row in array) {
  $('#my_table').append(`<tr>
        <td>${row.name}</td>
        <td>${row.surname}</td>
        <td>${row.age}</td>
    </tr>`);
}