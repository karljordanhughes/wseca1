
export default function ListAllCoursesQuery(req, res) {

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
    "SELECT * FROM wse.courses;",
    function(err, results, fields) {
         
        //loop over records

        //return records
        res.status(200).json(results);
        
    }
  ); 
}
  
  
  
  
  
  
      

      