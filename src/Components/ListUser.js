import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const ListUser = () => {

    const [users, setUsers]=useState([]) // to set data into mypage

    useEffect(()=>{
        getUsers();
    }, []);

    const getUsers = ()=>{

    axios.get('http://localhost:80/React/BackEnd_For_React/theUsers.php').then(function(response){
        console.log(response.data); // to print the data from database in console
        setUsers(response.data); // add data to my useState
    })
 }
 const deleteUser = (id)=>{
    axios.delete(`http://localhost:80/React/BackEnd_For_React/theUsers.php/${id}/delete`).then(function(response){
        console.log(response.data)
        getUsers();
    })
 }
  return (
    <div>
    <h3>List of users</h3>
    <table>
        <thead>
            <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
        
            {users.map((user, key)=>
            <tr key={key}>
                <td>{user.id}</td>
                <td>{user.firstName}</td>
                <td>{user.Email}</td>
                <td>{user.Mobile}</td>
                <td>
                <Link to={`user/${user.id}/edit`}>Edit</Link>
                <button onClick={()=>deleteUser(user.id)}>Delete</button>
                </td>
            </tr>
            )}
            
        </tbody>
    </table>

    </div>
  )
}

export default ListUser