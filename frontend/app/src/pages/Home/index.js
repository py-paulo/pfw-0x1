import React, { useEffect, useState } from 'react';
import {
  Menu,
  Container,
  Segment,
  Header,
  Icon,
  Divider,
  Table,
} from 'semantic-ui-react';

import 'semantic-ui-css/semantic.min.css';

import { useNavigate } from 'react-router-dom';
import api from '../../api';

function Home() {
  const navigate = useNavigate();
  const [data, setData] = useState([])

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await api.get("")

        if (res.status === 200){
          setData(res.data.students)
        }
      } catch (err) {
        console.log(err)
      }
    }

    fetch()
  }, [])

  return (
    <div>
      <Menu widths={2}>
        <Menu.Item
          name='Home'
          onClick={() => navigate("/")}
        />
        <Menu.Item
          name='Register Student'
          onClick={() => navigate("/register")}
        />
      </Menu>
      <Container>
        <Segment raised>
          <Header as='h3'>
            <Icon name='address book' />
            <Header.Content>
              Students
              <Header.Subheader>List of Average</Header.Subheader>
            </Header.Content>
          </Header>
          <Divider />
          <Table celled padded>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell singleLine>Evidence Rating</Table.HeaderCell>
                <Table.HeaderCell>Efficacy</Table.HeaderCell>
                <Table.HeaderCell>Consensus</Table.HeaderCell>
                <Table.HeaderCell>Name</Table.HeaderCell>
                <Table.HeaderCell>Grade</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
            { data.length > 0 ? (data.map((item, index) => {
              return (
                  <Table.Row key={index}>
                    <Table.Cell>
                      <Header as='h2' textAlign='center'>
                      {item.rating}
                      </Header>
                    </Table.Cell>
                    <Table.Cell>
                    </Table.Cell>
                    <Table.Cell textAlign='right'>
                      {item.averagePercent}% <br />
                      <a href='/'>{item.length} questions</a>
                    </Table.Cell>
                    <Table.Cell>
                      <Header as='h4'>
                        <Header.Content>{item.name}</Header.Content>
                        <Header.Subheader>Student</Header.Subheader>
                      </Header>
                    </Table.Cell>
                    <Table.Cell> {item.average}</Table.Cell>
                  </Table.Row>
              )
            })) : (<Table.Row> vazio </Table.Row>)}
            </Table.Body>
          </Table>
        </Segment>
      </Container>
    </div>
  );
}

export default Home;
