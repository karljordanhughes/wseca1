import Link from 'next/link'

import {useRouter} from 'next/router'
import { NextUIProvider } from '@nextui-org/react';
import { Container, Card, Row, Text, Col, Spacer } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import { Button, Grid } from "@nextui-org/react";
import { Image } from '@nextui-org/react';


export default function Home({data}) {
  const router = useRouter()


  // Handle the submit for the form
  async function handleSubmit(event) {

       alert("The form was submitted");
       event.preventDefault();
    

       // grab the variables from the form.
       const firstname = document.querySelector('#firstname').value

       console.log("first name is " + firstname);

       const lastname = document.querySelector('#lastname').value

       console.log("last name is " + lastname);

       const email = document.querySelector('#email').value

       console.log("email is " + email);

       const address = document.querySelector('#address').value

       console.log("address is " + address);

       const telephone = document.querySelector('#telephone').value

       console.log("telephone is " + telephone);





        // Get data from the form.
        const data = {
          firstname: event.target.firstname.value,
          lastname: event.target.lastname.value,
          email: event.target.email.value,
          address: event.target.address.value,
          telephone: event.target.telephone.value,
        }
    
        // Send the data to the server in JSON format.
        const JSONdata = JSON.stringify(data)
    
        // API endpoint where we send form data.
        const endpoint = '/api/register'


    
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
        alert(`server result: ${result}`)

        // redirect based on the result
      if(result.includes("ok")){
 
        router.push("/studentlist");
      }
    
  }

      return (

<NextUIProvider>
<Container gap={0}>
  <Row gap={1}>
    <Col>
      <Card css={{ $$cardColor: '$white' }}>
        <Card.Body>
        </Card.Body>
      </Card>
    </Col>

  </Row>
  <Spacer y={1} />
  <Row gap={1}>
    <Col>
      <Card css={{ $$cardColor: '$white' }}>
        <Card.Body>
          <Text h6 size={15} color="white" css={{ m: 0 }}>
          </Text>
        </Card.Body>
      </Card>
    </Col>
    <Col>
      <Card css={{ $$cardColor: '#cc083e' }}>
        <Card.Body>
          <Text h1 size={30} color="white" css={{ m: 0 }} >
            Student Registration Form
          </Text>

          <Spacer y={2.5} />

          <form onSubmit={handleSubmit}>
           
          <Input id="firstname" clearable bordered labelPlaceholder="First Name" initialValue="" />
          <Spacer y={2} />
          <Input id="lastname" clearable bordered labelPlaceholder="Last Name" initialValue="" />
          <Spacer y={2} />
          <Input id="email" clearable bordered labelPlaceholder="Email" initialValue="" />
          <Spacer y={2} />
          <Input id="address" clearable bordered labelPlaceholder="Address" initialValue="" />
          <Spacer y={2} />
          <Input id="telephone" clearable bordered labelPlaceholder="Telephone" initialValue="" />
          <Spacer y={2} />
          <Button type= "sumbit" color="white" auto>
            Submit
          </Button>
          </form>
          <Spacer y={2}/> 

        </Card.Body>
      </Card>
    </Col>
    <Col>
      <Card css={{ $$cardColor: '$white' }}>
        <Card.Body>
          <Text h6 size={15} color="white" css={{ m: 0 }}>
        
          </Text>
        </Card.Body>
      </Card>
    </Col>
  </Row>
</Container>
</NextUIProvider>

)
    

    
  
}
