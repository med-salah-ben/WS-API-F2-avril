import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Card , ListGroup } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom';



const UserDetails = () => {
    const {id} = useParams();
    const navigate = useNavigate()
    const [user,setUser] = useState({});
    const [loadUser, setLoadUser] = useState(true);

    console.log("User : " ,user)
    console.log("Load User : " ,loadUser)


    const getUserDetails =()=>{
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((result)=>setUser(result.data))
        .then(()=>setLoadUser(false))
        .catch((err)=>console.log(err))
    }

    useEffect(()=>{
        getUserDetails()
        // eslint-disable-next-line
    },[])

  return (
    <div>
            {loadUser ? (<h1>Loading......</h1>)
            :(
            <Card style={{ width: '18rem' , margin:"20px" }}>
            <Card.Header>Name :   {user.name + " " + user.username} </Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item>Email : {user.email}</ListGroup.Item>
              <ListGroup.Item>City : {user.address.city} </ListGroup.Item>
              <ListGroup.Item>Street : {user.address.street}</ListGroup.Item>
              <ListGroup.Item>Phone : {user.phone}</ListGroup.Item>
              <ListGroup.Item>Web site : {user.website}</ListGroup.Item>
            </ListGroup>
            <Button>Posts</Button>
            <Button onClick={()=>navigate(-1)}>Go Back</Button>
          </Card>    )
        }
    </div>
  )
}

export default UserDetails