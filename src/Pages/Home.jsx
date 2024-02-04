import React, { useState } from 'react'
import { Col,Row,Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Cards from '../Components/Cards'
import Footer from '../Components/Footer'
import Header from '../Components/Header'

function Home() {
    //

  return (
   <>
   <Header/>
<div style={{backgroundColor:"F6F0E6"}} className="container-fluid  " >
        <Row className="align-items-center p-5">
          <Col className="" sm={12} md={6}>
            <div className="div mx-5 ">
              <h1 className="text-primary fw-bold mb-4" style={{ fontSize: "50px" }}>
                Hostel Management System
              </h1>
              <p className="text-primary mb-4">
              Now Equipped With All new Features starting from Rent collection, Resident Management, Expense Tracker etc
              </p>
              <Link to={"login"}>
              <Button variant="primary mt-3 px-4  py-3">
                  GET STARTED{" "}
                  <i class="fa-solid fa-arrow-right mx-2 fa-fade"></i>
                </Button>
              </Link>
            </div>
          </Col>
          <Col sm={12} md={6}>
            <img
              className="mx-4  p-3 img-fluid"
              style={{ borderRadius:"80px" ,height: "420px", width: "460px" }}
src='https://img.freepik.com/free-vector/cheap-inn-affordable-guesthouse-college-dormitory-motel-check_335657-3156.jpg?w=740&t=st=1704438730~exp=1704439330~hmac=8a169254299084576fc568a8c4b9f271f6477fe353f8efe5d24e0623fef97009'              alt="Hostel managemnt image"
            />
          </Col>
        </Row>
      </div>
      <Cards/> 

      <Footer/>

   </>
  )
}

export default Home