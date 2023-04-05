import React from 'react'
import { Spinner } from "react-bootstrap";
import UserCard from './UserCard';

const UsersList = ({loadUsers , users}) => {
  return (
    <div style={{display:'flex' , justifyContent:"center" , flexWrap:"wrap"}}>
        {loadUsers ? (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : (
        users.map((user) => <UserCard user={user} key={user.id} />)
      )}
    </div>
  )
}

export default UsersList