import api from "../../Api";
import { useEffect, useState, useContext } from 'react';
import { AuthContext } from "../../context/AuthContext"
import UserList from "./UserList/UserList";


export const UsersList = () => {

    const [users, setUsers] = useState(null);

    function getDataUsers() {
        api.get('/api/auth/users/list').then(res => {
            setUsers(res);
            // console.log(res)
        })
    }
    useEffect(() => {
        getDataUsers()
    }, [])

    async function deleteUser(id) {
      const filteredUsers = users.filter(user => user._id !== id)
      setUsers(filteredUsers)
      const response = await fetch(`/api/auth/delete/user/${id}`, {
          method: "DELETE"
      });
  }


    return (
        users !== null ?
        <table style={{position: 'relative', margin: 'auto', width: '70%'}}>
        <thead>
          <tr>
              <th>Name</th>
              <th>Last Name</th>
              <th>Email</th>
          </tr>
        </thead>

        <tbody>
          {
          users.length ?  
          users.map( (user, index) => {
              return (
                <UserList 
                   key={index}
                   user={user}
                   deleteUser={deleteUser}
                />
              )
          }) : 
          <p>List is empty</p> 
        } 
        </tbody>
      </table> : null
    )
}