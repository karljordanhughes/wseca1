import { Grid, Card, Text, Table } from "@nextui-org/react";
import { createTheme, NextUIProvider } from "@nextui-org/react";
import Link from 'next/link'


export default function StudentList({data}) {

    const MockItem = ({ text }) => {
        return (
          <Card>
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
              <Table.Column>First Name</Table.Column>
              <Table.Column>Last Name</Table.Column>
              <Table.Column>Email</Table.Column>
              <Table.Column>Address</Table.Column>
              <Table.Column>Telephone</Table.Column>
              <Table.Column>Course Enrolled</Table.Column>
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
                <Table.Cell></Table.Cell>
                <Table.Cell></Table.Cell>
              </Table.Row>

              {data &&
                        data.map((item, i) => (
                  
                  <Table.Row key="1">
                    <Table.Cell>{item.id}</Table.Cell>
                    <Table.Cell>{item.firstname}</Table.Cell>
                    <Table.Cell>{item.lastname}</Table.Cell>
                    <Table.Cell>{item.email}</Table.Cell>
                    <Table.Cell>{item.address}</Table.Cell>
                    <Table.Cell>{item.telephone}</Table.Cell>
                    <Table.Cell>{item.enrolledin}</Table.Cell>
                    <Table.Cell><Link href={"addCourse?id=" +item.id}>View</Link></Table.Cell>
                  </Table.Row>
                        ))
                      }
            </Table.Body>
            </Table>
        </Card.Body>
        </Card>


    </NextUIProvider>

    )
  }
 


export async function getServerSideProps(context) {
    const res = await fetch(`http://localhost:3000/api/liststudents`)
    const data = await res.json()
 
  
    return {
      props: { data }, // will be passed to the page component as props
    }
  }