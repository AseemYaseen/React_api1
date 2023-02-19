import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const CreateUser = () => {
    const navigate = useNavigate(); // i used it in line-22 to go back to home page after data get saved
   const[inputs, setInputs]= useState({}) 



    const handleChange= (event)=>{
        const name = event.target.name; // to get the name of the input
        const value = event.target.value; // to get the value of the input 
        
        setInputs(values =>({...values, [name]: value})); // to set the values (the name of input then : the value of that input) to values
    }  

    const handleSubmit =(event)=>{
        event.preventDefault(); // to prevent the page from refresh on submit

        axios.post('http://localhost:80/React/BackEnd_For_React/theUsers.php', inputs).then(function(response){
         console.log(response.data); 
         
         navigate('/');
        }) // to go to this api link (My Backend) , with my inputs data .then show message in console.log then go to homePage


        console.log(inputs)
    }

  return (
    <div>
        <h1>Create a new user</h1>
        <form onSubmit={handleSubmit}> {/* to prevent the page from refresh on submit */}
        <label>Name:</label>
        <input type="text" name="name" onChange={handleChange}/> {/* send data to handleSubmit function , to get the name and the value */}
        <br/>
        <label>Email:</label>
        <input type="text" name="email" onChange={handleChange}/>
        <br/>
        <label>Mobile:</label>
        <input type="text" name="mobile" onChange={handleChange}/>
        <br/>
        <button type='submit'>Save</button>
        </form>

    </div>
  )
}

export default CreateUser