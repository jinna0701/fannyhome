import React from 'react'
import Dashboard from './Dashboard'
import Calendar2 from './Calendar2'
import ChildProfile from './Component/ChildProfile'
import Payment from './Payment'
 
import EditChildProfile from './Component/EditChildProfile'
import AddChildProfile from './Component/AddChildProfile'
import AddSchedule from './Component/AddSchedule'




function Admin() {
  return (
    <div style={{ color: 'black' }}>
      
      <Dashboard/>
      <Calendar2/>
    
      <Payment/>
      <ChildProfile/>
      <EditChildProfile/>
      <AddChildProfile/>
      <AddSchedule/>
    </div>
  )
}

export default Admin
