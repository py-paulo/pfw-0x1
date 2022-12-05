import React from 'react';
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
import './index.css';

function App() {
  return (
    <div>
      <Menu widths={2}>
        <Menu.Item
          name='Home'
        />
        <Menu.Item
          name='Register Student'
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
              <Table.Row>
                <Table.Cell>
                  <Header as='h2' textAlign='center'>
                    A
                  </Header>
                </Table.Cell>
                <Table.Cell>

                </Table.Cell>
                <Table.Cell textAlign='right'>
                  80% <br/>
                  <a href='#'>18 questions</a>
                </Table.Cell>
                <Table.Cell>
                  <Header as='h4'>
                    <Header.Content>Paulo</Header.Content>
                    <Header.Subheader>Student</Header.Subheader>
                  </Header>
                </Table.Cell>
                <Table.Cell>8.5</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>

        </Segment>
      </Container>
    </div>
 );
}

export default App;
