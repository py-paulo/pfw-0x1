import {
  Menu,
  Container,
  Segment,
  Header,
  Icon,
  Divider,
  Button,
  Form
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
              <Header.Subheader>Add</Header.Subheader>
            </Header.Content>
          </Header>

          <Divider />

          <Form>
            <Form.Field>
              <label>Name</label>
              <input placeholder='Name' name='name' required />
            </Form.Field>
            <Form.Field>
              <label>First Grade</label>
              <input placeholder='First Grade' type='number' name='firstGrade' required />
            </Form.Field>
            <Form.Field>
              <label>Second Grade</label>
              <input placeholder='Second Grade' type='number' name='secondGrade' required />
            </Form.Field>
            <Button type='submit' fluid primary>Submit</Button>
          </Form>

        </Segment>
      </Container>
    </div>
 );
}

export default App;
