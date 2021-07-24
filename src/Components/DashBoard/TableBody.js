import React from 'react'
import {Table} from 'semantic-ui-react'

import TableContent from './TableContent'

const TableBody = (props) => {
    const { tableBodyData ,editItem}=props
    return (
        <Table.Body>
        {tableBodyData.map((ele)=>{
            return <TableContent key={ele._id} {...ele} editItem={editItem} />
        })}
        </Table.Body>
    )
}

export default TableBody
