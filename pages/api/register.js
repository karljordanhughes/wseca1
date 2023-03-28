
export default function handler(req, res) {

    console.log("register api page called...");
   
   // get the client
   const mysql = require('mysql2');

   // create the connection to database
   const connection = mysql.createConnection({
   host: 'localhost',
   user: 'root',
   password: 'Kjjhjsfc2701!',
   port: 3306,
   database: 'wse'
   });

  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const email = req.body.email;
  const address = req.body.address;
  const telephone = req.body.telephone;

  // simple query
  connection.query(
    "INSERT INTO wse.students ('firstname', 'lastname', 'email', 'address', 'telephone') VALUES ("+firstname+", "+lastname+", "+email+", "+address+", "+telephone+");",
    function(err, results, fields) {
      res.status(200).json("ok");
    }

  );




}