import React, { useState ,useEffect} from 'react'
import { Link, Route } from 'react-router-dom'

import { Menu, Segment ,Header} from 'semantic-ui-react'

import Home from './Home'
import ApplyForJob from './ApplyForJob'
import Register from './Register'
import Login from './Login'
//For now i am added dashboard here later need to render it via contionally
import DashBoard from './DashBoard/AdminHome'
import axios from 'axios'

const NavBar = (props) => {
    const [user,setUser]=useState([])
    
    const addItem=(singleUser)=>{
        const result=[...user,singleUser]        
        setUser(result)

    }
    const editItem=(data)=>{
        const result=user.map((ele)=>{
            if(ele._id===data._id){
                return {...ele,...{status:data.status}}
            }else{
                return {...ele}
            }
        })
        setUser(result)
    }

    useEffect(()=>{
       axios.get(`http://dct-application-form.herokuapp.com/users/application-forms`)
       .then((res)=>{
           const result=res.data
           setUser(result)
       })
       .catch((err)=>{
           alert(err.message)
           console.log(err.message)
       }) 
    },[])

    return (
        <div>
           <div style={{margin:'20px'}}>
           <Menu pointing secondary>
                <Menu.Item>
                     <Link to="/"> <Header as="h1" color="blue">Home</Header></Link> 
                </Menu.Item>
                <Menu.Item>
                     <Link to="/applyforjob"> <Header as="h1">Apply For Job</Header></Link> 
                </Menu.Item>
                <Menu.Item>
                         <Link to="/register"><Header as="h1">Register</Header></Link> 
                </Menu.Item>
                <Menu.Item>
                        <Link to="/dashboard"><Header as="h1">DashBoard</Header></Link>
                </Menu.Item>
                <Menu.Item>
                   <Link to="/login"><Header as="h1">Login</Header></Link>
                </Menu.Item>
                </Menu>
           </div>
            
                  
        <hr/>

            <Route path="/" component={Home} exact/>
            <Route path="/applyforjob" render={(props)=> <ApplyForJob addItem={addItem} {...props}/>}/>
            <Route path="/register" component={Register}/>
            <Route path="/login" component={Login}/>
            <Route path='/dashboard' render={(props)=> <DashBoard users={user} editItem={editItem} {...props} />}/>
           
        </div>
    )
}

export default NavBar
