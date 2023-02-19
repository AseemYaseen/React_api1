import React from 'react'
import { useEffect, useState} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
   const navigate = useNavigate()
    const [inputs, setInputs]=useState({}); 
    const [users, setUsers]=useState([]);

    useEffect(()=>{
        getUsers();
    }, []);


    const handleChange= (event)=>{

        const name = event.target.name; // to get the name of the input
        const value = event.target.value; // to get the value of the input 
        
        setInputs(values =>({...values, [name]: value})); // to set the values (the name of input then : the value of that input) to values
    }  

    const handleSubmit =(event)=>{
        event.preventDefault(); // to prevent the page from refresh on submit

        console.log(inputs, "My inputs")
    }

    const getUsers = ()=>{

        axios.get('http://localhost:80/React/BackEnd_For_React/theUsers.php').then(function(response){
            // console.log(response.data); // to print the data from database in console
            setUsers(response.data); // add data to my useState
        
        })
     }

    //  const login =()=>
    //  users.map((user)=>{
    //     if(user.Email===inputs.Email && user.firstName===inputs.firstName &&Object.entries(inputs.firstName).length > 0 && Object.entries(inputs.Email).length > 0){
            
    //           console.log("Welcome User");       
    //     }else{
    //         console.log("Not User !"); 
    //     }
     
    // })

    const login = () => {
        for (const user of users) {
          if (user.Email === inputs.Email && user.firstName === inputs.firstName && Object.entries(inputs.firstName).length > 0 && Object.entries(inputs.Email).length > 0) {
            console.log("Welcome User");
            return; // Exit the loop once a matching user is found
          }
        }
        console.log("Not User !");
      }



  return (

    <div>

        {/* {users.map((user, key)=>
        
            {if(user.Email === inputs.Email){
                console.log("Welcome")
            }else{
                console.log("Not user")
            }}

            )} */}
         <div>
        <h1>Edit User</h1>
        <form onSubmit={handleSubmit}> {/* to prevent the page from refresh on submit */}
        <label>Name:</label>
        <input value={inputs.firstName} type="text" name="firstName" onChange={handleChange}/> {/* send data to handleSubmit function , to get the name and the value */}
        <br/>
        <label>Email:</label>
        <input value={inputs.Email} type="text" name="Email" onChange={handleChange}/>
        <br/>
        <button onClick={login} type='submit'>Log In</button>
        </form>

    </div>
    </div>
  )
}

export default Login