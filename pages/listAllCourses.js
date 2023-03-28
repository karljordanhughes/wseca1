import { Grid, Card, Text, Table } from "@nextui-org/react";
import { createTheme, NextUIProvider } from "@nextui-org/react"
import { Container, Row, Col, Spacer } from "@nextui-org/react";

import Link from 'next/link'


export default function ListAllCourses({data}) {

    const MockItem = ({ text }) => {
        return (
          <Card css={{ h: "$24", $$cardColor: '$colors$primary' }}>
            <Card.Body>
              <Text h6 size={15} color="white" css={{ mt: 0 }}>
                {text}
              </Text>
            </Card.Body>
          </Card>
        );
      };

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

    
    <Card css={{ h: "500px", $$cardColor: '#FFFFFF'}}>
      <Card.Body>
        <Table 
          aria-label="Example table with static content"
          css={{
            height: "auto",
            minWidth: "100%"
          }}

          >
            <Table.Header>
              <Table.Column>ID</Table.Column>
              <Table.Column>Title</Table.Column>
              <Table.Column>Description</Table.Column>
              <Table.Column>NFQ</Table.Column>
              <Table.Column>Year</Table.Column>
              <Table.Column>Option</Table.Column>
            </Table.Header>

            <Table.Body >
              <Table.Row key="1">
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
                    <Table.Cell>{item.title}</Table.Cell>
                    <Table.Cell>{item.description}</Table.Cell>
                    <Table.Cell>{item.nfq}</Table.Cell>
                    <Table.Cell>{item.courseyear}</Table.Cell>
                    <Table.Cell><Link href={"viewAll?id=" +item.id}>View</Link></Table.Cell>
                  </Table.Row>
                        ))
                      }
            </Table.Body>
            </Table>
        </Card.Body>
        </Card>

    </Container>
    </NextUIProvider>

    )
  }
 


export async function getServerSideProps(context) {
    const res = await fetch(`http://localhost:3000/api/listCourses`)
    const data = await res.json()
 
  
    return {
      props: { data }, // will be passed to the page component as props
    }
  }