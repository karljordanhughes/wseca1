import Link from 'next/link'
import {useRouter} from 'next/router'
import { Container, Card, Row, Col, Spacer } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import { Button, Grid } from "@nextui-org/react";
import { Image } from '@nextui-org/react';
import { createTheme, NextUIProvider, Text } from "@nextui-org/react"




export default function Home({data}) {
  const router = useRouter()


  // Handle the submit for the form
  async function handleSubmit(event) {

       alert("The form was submitted");
       event.preventDefault();
    

       // grab the variables from the form.
       const name = document.querySelector('#username').value

       console.log("username is " + name);

       const pass = document.querySelector('#password').value

       console.log("password is " + pass);


        // Get data from the form.
        const data = {
          username: event.target.username.value,
          password: event.target.password.value,
        }
    
        // Send the data to the server in JSON format.
        const JSONdata = JSON.stringify(data)
    
        // API endpoint where we send form data.
        const endpoint = '/api/login'

    
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

        router.push("listAllCourses")
      
  }

  const theme = createTheme({
    type: "light", // it could be "light" or "dark"
    theme: {
      colors: {
        // brand colors
        primaryLight: '$green200',
        primaryLightHover: '$green300',
        primaryLightActive: '$green400',
        primaryLightContrast: '$green600',
        primary: '#4ADE7B',
        primaryBorder: '$green500',
        primaryBorderHover: '$green600',
        primarySolidHover: '$green700',
        primarySolidContrast: '$white',
        primaryShadow: '$green500',
  
        gradient: 'linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple500 80%)',
        link: '#5E1DAD',
  
        // you can also create your own color
        myColor: '#ff4ecd'
  
        // ...  more colors
      },
      space: {},
      fonts: {}
    }
  })
  
  
  return (

    <NextUIProvider theme={theme}>
    <Container gap={0}>
      <Row gap={1}>
        <Col>
          <Card>
            <Card.Body>
            <div class="backdrop"></div>
<header class="main-header">
    <nav class="main-header__nav">
        <ul class="main-header__item-list">
            <li class="main-header__item">
                <a class="<%= path === '/' ? 'active' : '' %>" href="/">Login</a>
            </li>
            
            <li class="main-header__item">
                <a class="<%= path === '/registerstudent' ? 'active' : '' %>" href="/registerstudent">Register Student</a>
            </li>

            <li class="main-header__item">
                <a class="<%= path === '/listAllCourses' ? 'active' : '' %>" href="/listAllCourses">Courses </a>
            </li>

            <li class="main-header__item">
                <a class="<%= path === '/studentlist' ? 'active' : '' %>" href="/studentlist">Student List </a>
            </li>

            
            </ul>

    </nav>
</header>
            </Card.Body>
          </Card>
        </Col>

      </Row>
      <Spacer y={1} />
      <Row gap={1}>
        <Col>
          <Card>
            <Card.Body>
              <Text h6 size={15} color="white" css={{ m: 0 }}>
              </Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Text h1 size={30} color="white" css={{ m: 0 }} >
                Login
              </Text>

              <Spacer y={2.5} />

              <form onSubmit={handleSubmit}>
               
              <Input id="username" clearable bordered labelPlaceholder="Username" initialValue="" />
              <Spacer y={2} />
              <Input id="password" clearable bordered labelPlaceholder="Password" initialValue="" />
              <Spacer y={2} />
              <Button type= "sumbit" color="white" auto>
                Login
              </Button>
              </form>
              <Spacer y={2}/> 
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
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