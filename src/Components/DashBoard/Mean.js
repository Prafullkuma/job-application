import React from 'react'
import { Header ,Grid,Segment, Table} from 'semantic-ui-react'

import TableHeader from './TableHeader'
import TableBody from './TableBody'
const Mean = (props) => {
    const {mean,editItem}=props
    
    return (
        <div>
            <Header as="h1">MEAN Stack Developer-{mean.length}</Header>
            <p>List of candidates applied for Node Js Developer-Job</p>
                
             <Grid.Row stretched>
                <Grid.Column>
                    <Segment>

                <Table singleLine>
                    <TableHeader/>
                    <TableBody tableBodyData={mean} editItem={editItem}/>
                    
                </Table>
                </Segment>
                </Grid.Column>
                </Grid.Row>
    
        </div>
    )
}

export default Mean
