import React from 'react'
import ExpenseView from '../Components/ExpenseView'
import Sidebar from '../Components/Sidebar'

function Expenses() {
  return (
<>

<div className="container-fluid">
        <div className="row">
          <div className="col-lg-2 col-md-4">
            <Sidebar />
          </div>
          <div className="col-lg-10 ">
            <ExpenseView/>
          
          </div>
        </div>
      </div>
</>  )
}

export default Expenses