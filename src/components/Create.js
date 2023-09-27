import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, Checkbox } from 'semantic-ui-react';
import { API_URL } from '../Constants/URL';
import { useNavigate } from 'react-router-dom';
import '../styles/create.css'

const Create = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [checked, setChecked] = useState(false);

  /*click the submit button route the read pages*/

  const navigate = useNavigate();

  // add the data into update in mockapi
  // create handlefunction  -postdata

  /* 
  const postData = () =>{
    console.log(firstName); dinesh
    console.log(lastName); sekar
    console.log(checked); true
  }
  */
  const postData = () =>{
    axios.post(API_URL,{
      firstName,
      lastName,
      email,
      checked
    })
    navigate('/read');
  }
  return (
    <div className='create'>
    <Form className='form'>
      <h1>Create a account</h1>
      <Form.Field>
        <label htmlFor="">First Name</label>
        <input type="text" className='input' required
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
          placeholder='Enter the first Name' />
      </Form.Field><br />

      <Form.Field className='field'>
        <label htmlFor="">Last Name</label>
          <input type="text" className='input'required
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
          placeholder='Enter the Last Name' />
      </Form.Field> <br />

        <Form.Field className='field'>
          <label htmlFor="">Email</label>
          <input type="email" className='input' required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder='Enter the email' />
        </Form.Field> <br />

      <Form.Field>
        <Checkbox 
        checked={checked}
          //setChecked(!false) -- already create toggle  const [checked, setChecked] = useState(false);
          onChange={() => setChecked(!checked)}
           label='Agree the Terms and conditions' />
      </Form.Field>
      <br />

      <button className='button' onClick={postData}>Submit</button>

    </Form>
    </div>
  )
}

export default Create