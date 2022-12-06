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
import { useState } from 'react';
import api from '../../api/';
import { useNavigate } from 'react-router-dom';

const initialState = {
  name: '',
  firstGrade: 0,
  secondGrade: 0
}

const Register = () => {
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState(initialState)

  function handleChange(e) {
    const { name, value } = e.target

    setFormValues({ ...formValues, [name]: value })
  }

  function submitForm(e) {
    const { name, firstGrade, secondGrade } = formValues
    if(e) e.preventDefault()

    void (async () => {
      try {
        const res = await api.post("register", {
          name,
          firstGrade,
          secondGrade
        })

        if(res) console.log(res.statusText)
      } catch (err) {
        console.log(err)
      }
      
    })()
    setFormValues(initialState)
  }
    return(
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
              <Header.Subheader>Add</Header.Subheader>
            </Header.Content>
          </Header>

          <Divider />

          <Form onSubmit={submitForm}>
            <Form.Field className='form-nam'>
              <label>Name</label>
              <input placeholder='Name' name='name' value={formValues.name} onChange={handleChange} required />
            </Form.Field>
            <Form.Field>
              <label>First Grade</label>
              <input placeholder='First Grade' type='number' name='firstGrade' value={formValues.firstGrade} onChange={handleChange} required />
            </Form.Field>
            <Form.Field>
              <label>Second Grade</label>
              <input placeholder='Second Grade' type='number' name='secondGrade' value={formValues.secondGrade} onChange={handleChange} required />
            </Form.Field>
            <Button type='submit' fluid primary>Submit</Button>
          </Form>

        </Segment>
      </Container>
        </div>
    )
}

export default Register;