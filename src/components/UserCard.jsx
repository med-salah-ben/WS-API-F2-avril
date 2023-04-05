import React from 'react'
import { Card , ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const UserCard = ({user}) => {
  return (
    <Link to={`/userDetails/${user.id}`}>
    <Card style={{ width: '18rem' , margin:"20px" }}>
    <Card.Header>Name :   {user.name + " " + user.username} </Card.Header>
    <ListGroup variant="flush">
      <ListGroup.Item>Email : {user.email}</ListGroup.Item>
      <ListGroup.Item>City : {user.address.city} </ListGroup.Item>
      <ListGroup.Item>Street : {user.address.street}</ListGroup.Item>
      <ListGroup.Item>Phone : {user.phone}</ListGroup.Item>
      <ListGroup.Item>Web site : {user.website}</ListGroup.Item>
    </ListGroup>
  </Card>
  </Link>
  )
}

export default UserCard