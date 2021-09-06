import axios from 'axios'
import React, { useState } from 'react'
import {Header} from 'semantic-ui-react'
import validator from 'validator'

const Register = (props) => {
    const [username,setUsername]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    
    const [setFormError]=useState({})
    const error={}
    
    const handleChange=(e)=>{
        const attr=e.target.name
        if(attr==="username"){
            setUsername(e.target.value)
        }
        else if(attr==="email"){
            setEmail(e.target.value)
        }
        else if(attr==="password"){
            setPassword(e.target.value)
        }
    }
    const runValidator=()=>{
        if(username.length ===0){
            error.username="Username can't be blank"
        }
        if(email.length===0){
            error.email="Email can't be blank"
        }else if(!validator.isEmail(email)){
            error.email="Email must be valide"
        }
        else if(password.length===0){
            error.password="Password can't be blank"
        }
    }
    const handleSubmit=(e)=>{
         e.preventDefault()
         runValidator()
         if(Object.keys(error).length===0){
             setFormError({})
             const formData={
                    username:username,
                    email:email,
                    password:password
              }
             axios.post(`http://dct-user-auth.herokuapp.com/users/register`,formData)
              .then((res)=>{
                  const result=res.data
                  if(result.hasOwnProperty('errors')){
                      alert(result.message)
                  }
                  else{
                      alert("Successefully registered")
                      props.history.push('/login') // when sucessfull go the login page 
                  }
              }).catch((err)=>{
                  console.log(err.message)
              })

         }else{
             setFormError(error)
         }
    }

    return (
        <div>
            <Header as="h1">Register</ Header>
            <form onSubmit={handleSubmit}>
                <input type="text"
                       name="username"
                       value={username}
                       onChange={handleChange}
                       /><br/>
                <input type="text"
                       name="email"
                       value={email}
                       onChange={handleChange}
                       />
                <input type="text"
                       name="password"
                       value={password}
                       onChange={handleChange}/>

                <input type="submit" value="register"/>
            </form>
        </div>
    )
}

export default Register
