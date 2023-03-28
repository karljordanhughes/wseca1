
export default function getEnrolledStudents(req, res) {

    console.log("get enrolled page ID for query " + req.query.id);

    let currentID = req.query.id;

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
  
  
  // simple query
  connection.query(
    "SELECT * FROM wse.students WHERE enrolledin = '"+currentID+"' ;",
    function(err, results, fields) {
         
        //loop over records
        console.log("sending back the results");
        console.log(results);
        //return records
        res.status(200).json(results);
        
    }
  ); 
}
  
  
  
  
  
  
      

      