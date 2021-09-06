import React, { useState } from 'react'
import { Container, Grid, Segment,Input,Label,TextArea,Button} from 'semantic-ui-react';

import validator from 'validator';

const ApplyForJobForm = (props) => {
    const { formSubmission }=props

    const jobTitleOption=["Node.js Developer","Front-End Developer","MEAN Stack Developer","FULL Stack Developer"]

    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [contact,setContact]=useState('')
    const [job,setJob]=useState('')
    const [experience,setExperience]=useState('')
    const [skills,setSkills]=useState('')

    const [formError,setFormError]=useState({})

    let error={}

    const handleChange=(e)=>{

        const attr=e.target.name
        if(attr==="fullName"){
            setName(e.target.value)
        }else if(attr==="email"){
            setEmail(e.target.value)
        }else if(attr==="contact"){
            setContact(e.target.value)
        }else if(attr==="job"){
            setJob(e.target.value)
        }else if(attr==="experience"){
            setExperience(e.target.value)
        }
        else if(attr==="skills"){
            setSkills(e.target.value)
        }
    }

    const runValidator=()=>{
        
        if(name.length ===0){
            error.name="Name can't be blank"
        }

        if(!validator.isEmail(email)){
            error.email="Email is not valid"
        }else if(email.length === 0){
            error.email="Email can't be blank"
        }

        if(contact.length===0 ){
            error.contact="Contact can't be blank"
        }
        else if(contact.length !==10){
            error.contact="Contact length must be 10"
        }

        if(job.length===0){
            error.job="Job must be Selected "
        }

        if(experience.length===0){
              error.experience="Experience can't be blank"
        }

        if(skills.length===0){
            error.skills="Skills can't be blank"
        }
    }

    const handleSubmit=(e)=>{

        e.preventDefault()

        runValidator()
        
        if(Object.keys(error).length ===0){
            setFormError({})
            const formData={
                status:'applied',
                name:name,
                email:email,
                phone:contact,
                jobTitle:job,
                experience:experience,
                skills:skills,
            }
            formSubmission(formData)
        }else {
            setFormError(error)
        }
    }
    return (
        <div >
        
            <Container style={{backgroundColor:'white'}}>
           
            <form onSubmit={handleSubmit}>

                <Segment >
                    <Grid columns={2} relaxed='very' centered>

                    <Grid.Column style={{marginTop:'10px'}}>
                        <>
                            <Label size="large" style={{width:"400px",padding:'15px'}} > Full Name</Label> 
                        </>
                        <br/>
                        <br/>
                        <>
                        <Label size="large" style={{width:"400px",padding:'15px'}}>Email</Label> 
                        </>
                        <br/>
                        <br/>
                        <>
                        <Label size="large" style={{width:"400px",padding:'15px'}}>Contact</Label> 
                        </>
                        <br/>
                        <br/>
                        <>
                            <Label size="large" style={{width:"400px",padding:'15px'}}>Applying for job</Label> 
                        </>
                        <br/>
                        <br/>
                        <>
                        <Label size="large" style={{width:"400px",padding:'15px'}}>Experience</Label> 
                            
                        </>
                        <br/>
                        <br/>
                        <>
                        <Label size="large" style={{width:"400px",padding:'15px'}}>Technical Skills</Label> 
                            
                        </>
                        
                    </Grid.Column>

                    <Grid.Column style={{marginTop:'10px'}}>
                        
                            <Input type="text"
                                style={{width:'400px'}} 
                                name="fullName" 
                                value={name} 
                                onChange={handleChange} 
                                placeholder="Enter your full name"/>
                                {formError.name && <Label basic color='red' pointing>{formError.name} </Label>}
                        <br/>
                        <br/>
                                <Input type="text" 
                                    name="email" 
                                    style={{width:'400px'}}                          
                                    value={email} 
                                    onChange={handleChange} 
                                    placeholder="Enter Your Email"/><br/>
                                    {formError.email && <Label basic color='red' pointing>{formError.email} </Label>}                  
                         <br/>

                            <Input type="text" 
                                name="contact" 
                                style={{width:'400px'}}
                                value={contact} 
                                onChange={handleChange} 
                                placeholder="Enter Phone number"/>
                            {formError.contact && <Label basic color='red' pointing>{formError.contact}</Label>}
                            <br/>
                       
                        
                            <select value={job} style={{width:'400px',marginTop:'15px',padding:'10px'}} onChange={handleChange} name="job">
                                <option value="">----Select-----</option>
                                {
                                jobTitleOption.map((ele,i)=>{
                                    return <option value={ele} key={i}> {ele} </option>
                                })
                                }

                            </select>
                            {formError.job &&<Label basic color='red' pointing>{formError.job}</Label>}
                            <br/>
                        <br/>
                         <Input  type="text"
                                value={experience}

                                style={{width:'400px'}}
                                name="experience"
                                onChange={handleChange}
                                placeholder="Enter experience[2 years,2 months]"    
                        />
                        {formError.experience && <Label basic color='red' pointing>{formError.experience}</Label>}
                        <br/>
                        
                            <TextArea value={skills}  
                                style={{width:'400px',marginTop:'20px'}} name="skills" onChange={handleChange}>
                            </TextArea>
                            {formError.skills &&<Label basic color='red' pointing>{formError.skills}</Label>}
                            <br/>
                    </Grid.Column>
                    </Grid>

                        </Segment>
                    <p style={{margin:'40px',width:'500px'}}>
                    <Button type="submit" color="blue" style={{margin:'30px'}}>send Application</Button>
                    </p>
                    
            </form>
            </Container>
        </div>
    )
}

export default ApplyForJobForm
