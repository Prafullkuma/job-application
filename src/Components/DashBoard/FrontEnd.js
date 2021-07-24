import React from 'react'
import { Header ,Grid,Segment, Table} from 'semantic-ui-react'
import TableHeader from './TableHeader'
import TableBody from './TableBody'

const FrontEnd = (props) => {
    const { forntend ,editItem}=props

    return (
        <div>
              <Header as="h1">Front-End Developer-{forntend.length}</Header>
              <p>List of candidates applied for FrontEnd Developer-Job</p>

            <Grid>
                <Grid.Row stretched>
                <Grid.Column>
                    <Segment>
                    <Table singleLine style={{marginLeft:'5px'}}>
                         <TableHeader/>
                         <TableBody tableBodyData={forntend} editItem={editItem}/>
                    </Table>
                    </Segment>
                </Grid.Column>
                </Grid.Row>
            </Grid>
            </div>
    )
}

export default FrontEnd
