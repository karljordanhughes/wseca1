import Link from 'next/link'
import { Grid, Card, Text, Table, Button, Spacer } from "@nextui-org/react";
import { Input } from "@nextui-org/react";

import {useRouter} from 'next/router'

export default function ViewAll({data, courseid}) {

    const router = useRouter()

    const {cid} = router.query    


    //Send back data
    return (
      <>
      <Table 
          aria-label="Example table with static content"
          css={{
            height: "auto",
            minWidth: "100%"
          }}

          >
            <Table.Header>
              <Table.Column>ID</Table.Column>
              <Table.Column>Grade</Table.Column>
              <Table.Column>First Name</Table.Column>
              <Table.Column>Last name</Table.Column>
              <Table.Column>Email</Table.Column>
              <Table.Column>Address</Table.Column>
              <Table.Column>Phone</Table.Column>
              <Table.Column>Enrolled in</Table.Column>
            </Table.Header>

            <Table.Body >
              <Table.Row key="1">
                <Table.Cell></Table.Cell>
                <Table.Cell></Table.Cell>
                <Table.Cell></Table.Cell>
                <Table.Cell></Table.Cell>
                <Table.Cell></Table.Cell>
                <Table.Cell></Table.Cell>
                <Table.Cell></Table.Cell>
                <Table.Cell></Table.Cell>
              
              </Table.Row>

              {data &&
                        data.map((item, i) => (
                  
                  <Table.Row key="1">
                    <Table.Cell>{item.id}</Table.Cell>
                    <Table.Cell><input id={'grade_' +item.id} labelPlaceholder={'grade_'+item.id} />
                      <Button type= "button" onClick={(save) => saveData(item.id, courseid)} color="white" size="xs">Submit</Button>
                    </Table.Cell>
                    <Table.Cell>{item.firstname}</Table.Cell>
                    <Table.Cell>{item.lastname}</Table.Cell>
                    <Table.Cell>{item.email}</Table.Cell>
                    <Table.Cell>{item.address}</Table.Cell>
                    <Table.Cell>{item.telephone}</Table.Cell>
                    <Table.Cell>{item.enrolledin}</Table.Cell>
                  </Table.Row>
                        ))
                      }
            </Table.Body>
            </Table>
  
  
      </>
    )
  }

async function saveData(id) {

  let gradeValue = document.getElementById('grade_'+id).value;
  alert(id + " " + gradeValue);

  const router = useRouter()

  const {cid} = router.query    

  //
  const data = {
    sid: id,
    grade: gradeValue,
    cid: cid
  }

  // Send the data to the server in JSON format.
  const JSONdata = JSON.stringify(data)

  // API endpoint where we send form data.
  const endpoint = '/api/saveGrade'


  // Form the request for sending data to the server.
  const options = {
    // The method is POST because we are sending data.
    method: 'POST',
    // Tell the server we're sending JSON.
    headers: {
      'Content-Type': 'application/json',
    },
    // Body of the request is the JSON data we created above.
    body: JSONdata,
  }


  

  // Send the form data to our forms API on Vercel and get a response.
  const response = await fetch(endpoint, options)

  // Get the response data from server as JSON.
  // If server returns the name submitted, that means the form works.
  const result = await response.json()

  alert('Saved!');

}

  export async function getServerSideProps(context) {
    let id = context.query.id
    let courseId = context.query.id;

  
    const res = await fetch(`http://localhost:3000/api/getEnrolledStudents?id=`+id);
    const data = await res.json()
 
  
    return {
      props: { data, courseId }, // will be passed to the page component as props
    }
  }