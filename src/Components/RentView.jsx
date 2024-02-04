import React from "react";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from "axios";
import { BASEURL } from "../services/baseUrl";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Sidebar from "./Sidebar";

function RentView() {
  //js fn 
const [rentData,setRentData]= useState([])

  const fetchData = async () => {
    try {
      const response = await axios.get(`${BASEURL}/rent/list`);
     //console.log(response.data);
     setRentData(response.data)
   //console.log(rentData);
    } catch (error) {
      console.error("Error fetching rent  data:", error);
    }
  };
  useEffect(() => {
    fetchData();
   // console.log(rentData);
  }, []);

  //delete rent 
  const deleteUser = async(_id) => {
    try{
      //Make a POST request
      const res = await axios.post(`${BASEURL}/rent/delete/${_id}`);
       console.log(res.status);
       if(res.status===200){
         alert(`Details of ${res.data.name} Deleted Successfully!`);
         console.log(rentData);
        fetchData()
       }else if(res.status===404){
        alert(res.data);
       }
       //handle success message goes here
     } catch (error) {
       // Handle errors
       alert("cant delelete now! error occurred")
       console.error("Error :", error);
     }
   };
  return (
    <>

<div className="container-fluid">
        <div className="row">
          <div className="col-lg-2 col-md-4">
            <Sidebar />
          </div>
          <div className="col-lg-10 ">
           
          <div className="div mt-5 p-1">
        {/*----header-----*/}

        <div className="heading d-flex justify-content-between">
          <h2 className="text-info">Rent Collection</h2>
          <div className="search-month mt-2">

          </div>
         <Link to={"/addrent"}> <button className="btn px-4 py-2 btn-success">
                    Add New Rent Entry{" "}
                  </button>{" "}</Link>
        </div>
        {/*----cards-----*/}

        {/* <div className="Cards-section mt-4 p-2">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div class="card" style={{ width: "18rem" }}>
                  <div class="card-body">
                    <h5 class="card-title">
                    <i class="fa-solid mx-2 fa-person-booth"></i>70
                    </h5>
                    <h6 class="mt-2 card-subtitle mb-2 text-body-secondary">
                      Total Rooms
                    </h6>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div class="card" style={{ width: "18rem" }}>
                  <div class="card-body">
                    <h5 class="card-title">
                    <i class="fa-solid mx-2 fa-bed"></i>129
                    </h5>
                    <h6 class="mt-2 card-subtitle mb-2 text-body-secondary">
                      Total Beds
                    </h6>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div class="card" style={{ width: "18rem" }}>
                  <div class="card-body">
                    <h5 class="card-title">
                    <i class="fa-solid mx-2  fa-users"></i>89
                    </h5>
                    <h6 class="mt-2 card-subtitle mb-2 text-body-secondary">
                      Total Residents
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
       
        {/*----rent list goes here-----*/}
        <div className="table data">
        <table class="table mt-5 shadow table-secondary">
                <thead>
                  <tr>
                    <td>No</td>
                    <td>RESIDENT NAME</td>
                    <td>EMAIL</td>
                    <td>MOB NO</td>
                    <td>ROOM NO</td>
                    <td>MONTH</td>
                    <td> AMOUNT </td>
                    <td>ACTIONS</td>
                  </tr>
                </thead>
                
                <tbody>
                {rentData.map((item, index) => (
                    <tr key={index}>
                        <td>{index + 1}</td>
                      <td>{item.name}</td>
                      <td>{item.email}</td>
                      <td>{item.number}</td>
                      <td>{item.room}</td>
                      <td>{item.selectedMonth}</td>
                      <td>{item.rentAmount}</td>
                      <td>
                        <button
                          onClick={()=>deleteUser(item._id)}
                          className="btn btn-danger mx-2"
                        >
                          <i class="fa-solid fa-trash"></i>
                        </button>
                      </td>
                    </tr>
                  ))}   
                </tbody>
                
              </table>
        </div>
      </div>



          </div>
        </div>
      </div>
    
    
    </>
  );
}

export default RentView;
