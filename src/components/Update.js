import React, { useState, useEffect } from 'react'
import { Form, Button, Checkbox } from 'semantic-ui-react';
import { API_URL } from '../Constants/URL';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
const Update = () => {
  const [id, setId] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [checked, setChecked] = useState('')

  const navigate = useNavigate();

  /* update to api start*/
  const updateUser = async () =>{
    await axios.put(API_URL + id, {
      firstName,
      lastName,
      email,
      checked
    })
    navigate('/read')
  }
  /* update to api start*/
  useEffect(() => {
    setId(localStorage.getItem('id'))
    setFirstName(localStorage.getItem('firstName'))
    setLastName(localStorage.getItem('lastName'))
    setEmail(localStorage.getItem('email'))
    setChecked(localStorage.getItem('checked'))

  }, [])



  return (
    
    <div className="create">
      <Form className='form'>
        <h1> Update the details</h1>
        <Form.Field className='field'>
        <label htmlFor="">First Name</label>
          <input value={firstName} className='input'
          onChange={(event) => setFirstName(event.target.value)}
          placeholder='Enter the first Name' />
      </Form.Field><br />

        <Form.Field className='field'>
        <label htmlFor="">Last Name</label>
          <input type="text" className='input'
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
          placeholder='Enter the Last Name' />
      </Form.Field> <br />

        <Form.Field className='field'>
        <label htmlFor="">Last Name</label>
          <input type="text" className='input'
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder='Enter the Last Name' />
      </Form.Field> <br />

        <Form.Field className='field'>
        <Checkbox
          checked={checked}
          //setChecked(!false) -- already create toggle  const [checked, setChecked] = useState(false);
          onChange={() => setChecked(!checked)}
          label='Agree the Terms and conditions' />
      </Form.Field>
      <br />

      <button className= 'button' onClick={updateUser} >Update</button>

    </Form>
    </div>
    
  )
}

export default Update