import React from 'react'
import Sidebar from '../Components/Sidebar'
import RoomView from '../Components/RoomView'

function Rooms() {
  return (
<>
<div className="container-fluid">
        <div className="row">
          <div className="col-lg-2 col-md-4">
            <Sidebar />
          </div>
          <div className="col-lg-10 ">
               <RoomView/>
          </div>
        </div>
      </div>

</>  )
}

export default Rooms