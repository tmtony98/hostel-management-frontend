import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Sidebar() {
 // <Link  style={{textDecoration:"none",color:"white"}} to={"/dashboard"}> 
  //<Link style={{textDecoration:"none",color:"white"}} to={"/rooms"}><li> <i class="fa-solid mx-2 fa-bed"></i> Dashboard</li></Link>

 // <li><i class="fa-solid mx-2 fa-house-use"></i>Rent</li></Link>

  return (
<>









<div style={{height:"100vh"}} className=" d-flex justify-content-center align-items-center">
    <div style={{height:"90%", borderRadius:"15px",backgroundColor:"#0b4373"}} className='list-items  py-5 px-4'>
    <div className="div d-flex  justify-content-end flex-column ">
      <ul className='px-2' 
    style={{listStyle:"none",lineHeight:"45px"}}>
     <Link style={{textDecoration:"none",color:"white"}} to={"/analytics"}><li><i class="fa-solid mx-2 fa-bed"></i>Dashboard</li></Link>
     <Link style={{textDecoration:"none",color:"white"}} to={"/list"}><li><i class="fa-solid mx-2 fa-users"></i>Residents</li></Link>
     <Link style={{textDecoration:"none",color:"white"}} to={"/rentlist"}><li><i class="fa-solid mx-2 fa-sack-dollar"></i>Rent</li></Link>
     <Link style={{textDecoration:"none",color:"white"}} to={"/expenses"}><li><i class="fa-solid mx-2 p-1 fa-receipt"></i>Expenses</li></Link>
<div style={{marginTop:"300px"}} className=''>
<Link style={{textDecoration:"none",color:"white"}} to={"/login"}><i class="fa-solid mx-2 fa-right-from-bracket"></i>Log out</Link>     

</div>
    </ul>
    </div>
    </div>
</div>
</>)
}

export default Sidebar