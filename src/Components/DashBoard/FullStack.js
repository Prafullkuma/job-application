import React from 'react'
import TableBody from './TableBody'

import { Header ,Grid,Segment, Table} from 'semantic-ui-react'
import TableHeader from './TableHeader'

const FullStack = (props) => {
    const {fullstack,editItem} =props
    
    return (
        <div>
            <Header as="h1">Full stack Developer-{fullstack.length}</Header>
            <p>List of candidates applied for Full Stack Developer-Job</p>

            <Grid>
                <Grid.Row stretched>
                <Grid.Column>
                    <Segment>
                    <Table singleLine >
                        <TableHeader/>
                        <TableBody tableBodyData={fullstack} editItem={editItem}/>
                    </Table>
                    </Segment>
               </Grid.Column>
               </Grid.Row>
            </Grid>
          
        </div>
    )
}

export default FullStack
