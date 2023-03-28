
export default function saveGrade(req, res) {

    const cid = req.body.cid;
    const sid = req.body.sid;
    const grade = req.body.grade;

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
    "INSERT INTO wse.grades (sid, courseid, grade) VALUE ('"+sid+"', '"+cid+"', 'NA' ;",
    function(err, results, fields) {
         
        //loop over records

        //return records
        res.status(200).json(results);
        
    }
  ); 
}
  
  
  
  
  
  
      

      