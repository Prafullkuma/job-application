import React ,{ useState} from 'react'
import { Button, Modal, Table ,Container} from 'semantic-ui-react'
import axios from 'axios'
import Moment from 'react-moment';

const TableContent = (props) => {
    const { status,createdAt,name,skills,experience,_id,editItem}=props

    const [view,setView]=useState({})
    const [open, setOpen] = useState(false)
  
    const handleView=(id)=>{
        if(id){
            axios.get(`http://dct-application-form.herokuapp.com/users/application-form/${id}`)
            .then((res)=>{
               const result=res.data
               setView(result)
            }).catch((err)=>{
                console.log(err.message)
            })
        }
    }

    const updateStatus=(id,stat)=>{
        axios.put(` http://dct-application-form.herokuapp.com/users/application-form/update/${id}`,{status:stat})
        .then((res)=>{
            const result=res.data
            editItem(result)
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    return (
        <>
        <Table.Row>
            <Table.Cell>{name}</Table.Cell>
            <Table.Cell>{skills.slice(0,35).concat('...')}</Table.Cell>
            <Table.Cell>{experience}</Table.Cell>
            <Table.Cell><Moment format="DD/MM/YYYY">
                {createdAt}
            </Moment>
                </Table.Cell>  
            <Table.Cell>
                <Modal
                 onClose={() => setOpen(false)}
                 onOpen={() => setOpen(true)}
                 open={open}
                 trigger={<Button color="blue" onClick={()=>handleView(_id)}>View Details</Button>}
                >

                {Object.keys(view).length !==0 && (
                    <Container>
                        <Modal.Header>{view.name} Profile</Modal.Header>
                        <hr/>
                        <Modal.Content image>
                            
                            <Modal.Description>

                            <p>contact-{view.phone}</p>
                            <p>contact-{view.email}</p>
                            <p>Skills-{view.skills}</p>
                            <p>experience-{view.experience}</p>
                            </Modal.Description>
                        </Modal.Content>
                        <hr/>
                        <div style={{marginLeft:'600px'}}>
                                <Modal.Actions>
                                    <Button onClick={() => setOpen(false)} positive>
                                    Close
                                    </Button>
                                </Modal.Actions>
                        </div>
                    </Container>
                  )   
                }
            </Modal>        
            </Table.Cell>
            <td>{(status==="applied" && (
                    <div>
                        <Button  color="green" onClick={()=>updateStatus(_id,"shortlisted")}> shortListed</Button>
                        <Button color="red" onClick={()=>updateStatus(_id,"rejected")}>rejected</Button>
                    </div>
                )) || (status ==="shortlisted" ?( <Button color="green" >shortListed</Button>) : <Button color='red' >Rejected</Button> )}

            </td>
        </Table.Row>
        </>
    )
}

export default TableContent
