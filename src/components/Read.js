import React, { useState, useEffect } from 'react'
import { Table, Button } from 'semantic-ui-react';
import axios from 'axios'
import { API_URL } from '../Constants/URL';
import { useNavigate } from 'react-router-dom';
import '../styles/read.css';
const Read = () => {

  const [apiData, setApiData] = useState([]);
  const navigate = useNavigate();

  /* delete the user details start*/
  const deleteUser = async (id) => {
    await axios.delete(API_URL+id)
    callGetApi()
  }
  /* delete the user details end*/

  /* update the user details start*/
  /* what kind change that must be passed to update.js -> cookies method (local storage)*/
  // 
  const updateUser = ({ id, firstName, lastName, email, checked}) => {
    localStorage.setItem('id',id)
    localStorage.setItem('firstName', firstName)
    localStorage.setItem('lastName', lastName)
    localStorage.setItem('email', email)
    localStorage.setItem('checked', checked)
   
    navigate('/update')
  }
  /* update the user details start*/

  const callGetApi = async () => {
    const resp = await axios.get(API_URL);
    setApiData(resp.data);
  }

  useEffect(() => {
    callGetApi();
  }, [updateUser])

  
  return (
    <div className="read">
      <Table singleLine>
       
      <Table.Header>
        {/* <Table.HeaderCell>ID</Table.HeaderCell> */}
        <Table.HeaderCell>First Name</Table.HeaderCell>
        <Table.HeaderCell>Last Name</Table.HeaderCell>
        <Table.HeaderCell>Email</Table.HeaderCell>
        <Table.HeaderCell>Checked</Table.HeaderCell>
        <Table.HeaderCell>Delete</Table.HeaderCell>
        <Table.HeaderCell>Edit</Table.HeaderCell>
      </Table.Header>

      <Table.Body>
        {
          apiData.map(data => (
            <Table.Row key={data.id}>
              <Table.Cell>{data.firstName}</Table.Cell>
              <Table.Cell>{data.lastName}</Table.Cell>
              <Table.Cell>{data.email}</Table.Cell>
              {/* <Table.Cell>{data.checked}</Table.Cell>  -> value is not displayed
            because of table cannot display the boolean values
            */}

              {/* its above the problem overcome to use ternary opeator */}
              <Table.Cell>{data.checked ?"checked":"not checked"}</Table.Cell>


              {/* delete the items  */}
              <Table.Cell>
                <Button
                  onClick={() => deleteUser(data.id)}>
                  Delete</Button>
              </Table.Cell>

              <Table.Cell>
                <Button
                  onClick={() => updateUser(data)}>
                  Update</Button>
              </Table.Cell>

            </Table.Row>
          ))
        }
      </Table.Body>
    </Table>
    </div>
    
  )
}

export default Read
