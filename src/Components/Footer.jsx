import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
{/* <div className="conatiner-fluid">
  <div style={{ height: "200px"}} className="row bg-light  d-flex align-items-center justify-content-center footer">
    <div className="col-lg-4 d-flex flex-column align-items-center justify-content-center footer ">
    <h4>
              <i class="fa-solid mx-2  fa-hotel"></i>
              Hostel Management System
            </h4>
            <p className="px-5 mt-3">
              Designed and built with all love in the world by React , bootsrtap and Node team.
              code liceaned by MIT
            </p>
    </div>
    <div className="col-lg-4 d-flex align-items-center justify-content-center">
    <h4 className="d-flex flex-column">Links</h4>
        <h4>Links</h4>
        <Link to={'/'}   className='text-primary' style={{textDecoration:'none',}}> Landing  Page  </Link> 
        <Link to={'/home'}  className='text-primary'  style={{textDecoration:'none', }}> Home </Link> 
        <Link to={'/Watch-history'}  className='text-primary'  style={{textDecoration:'none',}}> Watch History </Link> 


    </div>
    <div className="col-lg-4 d-flex align-items-center justify-content-center ">
    <h4>Guides</h4>

    </div>
  </div>
</div> */}
<div style={{backgroundColor:'#002E47', width:'100%',height:'350px'}} className='footer mt-5 pt-5 d-flex text-light  flex-column align-items-center justify-content-center'>
    <div className='d-flex justify-content-around w-100' >
      <div style={{width:'250px'}} className='website d-flex flex-column '>
        <h1> <i class="fa-brands fa-react mx-3 fa-fade"></i>      
       Hostel Management System</h1>
       <p>Designed and built with all love in the world by bootsrtap team. code liceaned by MIT </p>
      </div>

      <div className="links d-flex  flex-column">
        <h4>Links</h4>
        <Link to={'/login'}   className=' text-light' style={{textDecoration:'none',}}> Login  </Link> 
        <Link to={'/'}  className=' text-light '  style={{textDecoration:'none', }}> Home </Link> 
        <Link to={'/Watch-history'}  className=' text-light'  style={{textDecoration:'none',}}> login</Link> 


      </div>
      <div className="guides d-flex flex-column">
        <h4>Guides</h4>
        <Link to={'/'} className=' text-light' style={{textDecoration:'none'}}>React</Link> 
        <Link to={'/home'}  className=' text-light' style={{textDecoration:'none', color:'black'}}> Github </Link> 


      </div>

    </div>
    <p style={{marginTop:'25px',color:"dark"}}>Copyright @2023 hostel Management sysytem. Build using React</p>
   </div>

    </>
  );
}

export default Footer;
