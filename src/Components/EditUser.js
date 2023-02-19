import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const EditUser = () => {
    const navigate = useNavigate(); // i used it in line-22 to go back to home page after data get saved
   const[inputs, setInputs]= useState({}) 

   const {id}= useParams(); // when we use use param it will get the id from the link to the id parameter

   useEffect(()=>{
    getUser();
}, []);


const getUser = ()=>{

axios.get(`http://localhost:80/React/BackEnd_For_React/theUsers.php/${id}`).then(function(response){ // because we need the id from the link
    console.log(response.data); // to print the data from database in console
    setInputs(response.data); // add data to my useState
})
}

    const Timer =()=>{
         setTimeout(() => {
                alert('The Values have been updated succesfully')
                  navigate('/');
            }, 2000);
    }
           
    const handleChange= (event)=>{
        const name = event.target.name; // to get the name of the input
        const value = event.target.value; // to get the value of the input 
        
        setInputs(values =>({...values, [name]: value})); // to set the values (the name of input then : the value of that input) to values
    }  
    

    const handleSubmit =(event)=>{
        event.preventDefault(); // to prevent the page from refresh on submit

        axios.put(`http://localhost:80/React/BackEnd_For_React/theUsers.php/${id}/edit`, inputs).then(function(response){
         console.log(response.data); 
         Timer()
         
        }) // to go to this api link (My Backend) , with my inputs data .then update user based on id when we use put message in console.log then go to homePage


        // console.log(inputs)
        
    }

  return (
    <div>
        <h1>Edit User</h1>
        <form onSubmit={handleSubmit}> {/* to prevent the page from refresh on submit */}
        <label>Name:</label>
        <input value={inputs.firstName} type="text" name="firstName" onChange={handleChange}/> {/* send data to handleSubmit function , to get the name and the value */}
        <br/>
        <label>Email:</label>
        <input value={inputs.Email} type="text" name="Email" onChange={handleChange}/>
        <br/>
        <label>Mobile:</label>
        <input value={inputs.Mobile} type="text" name="Mobile" onChange={handleChange}/>
        <br/>
        <button type='submit'>Save</button>
        </form>

    </div>
  )
}

export default EditUser


