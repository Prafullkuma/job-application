
import React from 'react'
import { Tab } from 'semantic-ui-react'

import FrontEnd from './FrontEnd'
import FullStack from './FullStack'
import Mean from './Mean'
import Nodejs from './NodeJs'

const AdminHome = (props) => {

    const { users,editItem }=props
    
    // frontend
    const result1=users.filter((ele)=>{
        return ele.jobTitle.trim().toLowerCase()==="Front-End Developer".trim().toLowerCase()
    })

    //node js
    const result2=users.filter((ele)=>{
        return ele.jobTitle.trim().toLowerCase()==="Node.js Developer".trim().toLowerCase()
    })
    //mean Stack
    const result3=users.filter((ele)=>{
        return ele.jobTitle.trim().toLowerCase()==="MEAN Stack Developer".trim().toLowerCase()
    
    })
    //Full stack
    const result4=users.filter((ele)=>{
        return ele.jobTitle.trim().toLowerCase()==="FULL Stack Developer".trim().toLowerCase()
    })
    const panes = [
        {
          menuItem: 'FrontEnd Developer',
          render: () => <Tab.Pane attached={false}><FrontEnd forntend={result1} editItem={editItem}/></Tab.Pane>,
        },
        {
          menuItem: 'Node Js Developer',
          render: () => <Tab.Pane attached={false}><Nodejs nodejs={result2} editItem={editItem}/></Tab.Pane>,
        },
        {
          menuItem: 'MEAN Stack Developer',
          render: () => <Tab.Pane attached={false}><Mean mean={result3} editItem={editItem}/></Tab.Pane>,
        },
        {
            menuItem: 'FullStack Developer',
            render: () => <Tab.Pane attached={false}><FullStack fullstack={result4} editItem={editItem}/></Tab.Pane>,
        },
      ]
    return (
        <div>
            <h1>Admin DashBoard</h1>
            <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
        </div>
    )
}

export default AdminHome
