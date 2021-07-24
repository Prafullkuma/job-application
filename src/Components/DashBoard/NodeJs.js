import React from 'react'
import { Grid ,Segment, Table,Header} from 'semantic-ui-react'
import TableHeader from './TableHeader'
import TableBody from './TableBody'

const NodeJs = (props) => {
    const {nodejs ,editItem }=props
    
    return (
        <div>
            <Header as="h1">Node Js Developer-{nodejs.length}</Header>
            <p>List of candidates applied for Node Js Developer-Job</p>
            <Grid>
                <Grid.Row stretched>
                <Grid.Column>
                    <Segment>
                    <Table singleLine>
                        <TableHeader/>
                        <TableBody tableBodyData={nodejs} editItem={editItem}/>
                    </Table>
                    </Segment>
                 </Grid.Column>
            </Grid.Row>
            </Grid>
            
    </div>

    )
}

export default NodeJs
