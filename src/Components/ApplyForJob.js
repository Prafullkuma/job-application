import React from 'react'
import ApplyForJobForm from './ApplyForJobForm'
import axios from 'axios'
import swal from 'sweetalert';
 
const ApplyForJob = (props) => {

    const formSubmission=(formData)=>{
        
        axios.post(`http://dct-application-form.herokuapp.com/users/application-form`,formData)
        .then((res)=>{
            const result=res.data
            props.addItem(result)
            if(result.length!==0){
                swal({
                     text: "Thank you for interest",
                });
                props.history.push('/')
            }
        }).catch((err)=>{
            console.log(err.message)
        })
    }
    return (
        <div style={{backgroundColor:'#ed1552',padding:'30px'}}>
            <h1 style={{color:'white'}}> Apply For Job </h1>

             <ApplyForJobForm formSubmission={formSubmission}/>
        </div>
    )
}

export default ApplyForJob
