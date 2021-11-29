
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {Card , Container, ListGroup} from 'react-bootstrap'
import { GrUserSettings } from 'react-icons/gr';
import {RiFolderUserLine} from 'react-icons/ri'
import {MdEmail} from 'react-icons/md'
import {FiMapPin} from 'react-icons/fi'
import {MdPhoneAndroid} from 'react-icons/md'
import {SiBlazor} from 'react-icons/si'
function UserList() {
    const [user,setUser]=useState([]);
    useEffect(()=>{
        axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then(res=>{
            console.log(res)
            setUser(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    },[])


    return (
        <div>
            <Container>
     <h1 style={{textAlign:'center',color:'red',padding:'20px 0',borderBottom:'5px double red'}}>Users</h1>
      <ul>
     {  user.map(use=>(
      <li key={Math.random()} >
  <Card style={{ width: '18rem' }}>
  <Card.Header className='list'><GrUserSettings/> {use.name}</Card.Header>
  <ListGroup variant="flush">
    <ListGroup.Item><RiFolderUserLine style={{color:'blue'}} /> {use.username}</ListGroup.Item>
    <ListGroup.Item> <MdEmail style={{color:'blue'}}/> {use.email}</ListGroup.Item>
    <ListGroup.Item><FiMapPin style={{color:'blue'}}/> {use.address.city}</ListGroup.Item>
    <ListGroup.Item><MdPhoneAndroid style={{color:'blue'}}/> {use.phone}</ListGroup.Item>
    <ListGroup.Item><SiBlazor style={{color:'blue'}}/> {use.website}</ListGroup.Item>
  </ListGroup>
</Card>
  </li>
       ))
       }
                                         
   </ul>

   </Container>
     </div>
    
    )
}

export default UserList
