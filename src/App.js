import { useState , useEffect } from "react";
import axios from "axios";
import { Routes , Route } from "react-router-dom";
import './App.css';
import Home from './Pages/Home';
import UserDetails from "./Pages/UserDetails";

function App() {
  const [users , setUsers] = useState([]);
  const [loadUsers , setLoadUsers]= useState(true);

  console.log(loadUsers)
  console.log(users)

  const getUsers = async()=>{
    try {
      const result = await axios.get("https://jsonplaceholder.typicode.com/users")
      setLoadUsers(false)
      setUsers(result.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    getUsers()
    // eslint-disable-next-line
  },[])


  return (
    <div>
      <Routes>
        <Route path="/" element={ <Home loadUsers={loadUsers} users={users} />} />
        <Route path="/userDetails/:id" element={<UserDetails />} />
      </Routes>
    </div>
  );
}

export default App;
