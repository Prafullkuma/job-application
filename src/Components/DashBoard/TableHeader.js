import React from 'react'
import {Table } from 'semantic-ui-react'
const TableHeader = (props) => {
    
    return (
        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>Name</Table.HeaderCell>
                                <Table.HeaderCell>Technical Skills</Table.HeaderCell>
                                <Table.HeaderCell> Experience</Table.HeaderCell>
                                <Table.HeaderCell>Applied date</Table.HeaderCell>
                                <Table.HeaderCell>View Details</Table.HeaderCell>
                                <Table.HeaderCell>Update Application status</Table.HeaderCell>
                            </Table.Row>
        </Table.Header>
    )
}

export default TableHeader
