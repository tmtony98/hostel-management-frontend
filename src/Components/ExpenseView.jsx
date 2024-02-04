import React from 'react'
import AddExpense from './AddExpense'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { BASEURL } from "../services/baseUrl";


 function ExpenseView() {
  //js
  const [data, setData] = useState([]);


  //api call fn to display data
  const fetchData = async () => {
    try {
      const response = await axios.get(`${BASEURL}/expense/list`);
      setData(response.data);
  //    console.log(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  //api call to delete user

  const deleteUser = async (_id) => {
    try {
       // Make a POST request
      const res = await axios.post(`${BASEURL}/expense/delete/${_id}`);
       console.log(res.status);
       if(res.status===200){
         alert(` Deleted Successfully!`);
        fetchData()
         
       }else if(res.status===404){
        alert(res.data);
        console.log(res.data)
       }
 
     } catch (error) {
       // Handle errors
       alert("cant delete errorr occured")
       console.error("Error :", error);
     }
   };
  return (
<>


<div className="div mt-5 p-1">
        {/*----header-----*/}

        <div className="heading d-flex justify-content-between">
          <h2 className="text-info">Expenses</h2>        
          <div className="search-month mt-2">
                {/* <input type="month"/> */}

          </div>
          <Link to={"/expense/add"}> <button className="btn px-4 py-2 btn-success">
                    Add New Expense{" "}
                  </button>{" "}</Link>
        </div>
        {/*----cards-----*/}
        {/*----chart goes here-----*/}
       <div className='p-2'>
       <table class="table mt-4  shadow table-secondary">
                <thead >
                  <tr>
                    <td>No</td>
                    <td>Current Bill</td>
                    <td>Water Bill</td>
                    <td>Mess Bill</td>
                    <td>Staff Salary</td>
                    <td>Month</td>
                    <td>ACTIONS</td>
                  </tr>
                </thead>
                <tbody>
                {data.map((item, index) => (
                    <tr key={index}>
                        <td>{index + 1}</td>
                      <td>{item.currentBill}</td>
                      <td>{item.waterBill}</td>
                      <td>{item.messBill}</td>
                      <td>{item.staffSalary}</td>
                     <td>{item.selectedMonth}</td>
                      <td>
                     
                      {/* <Link to={`/expenses/edit/${item._id}`}> <button  className="btn btn-secondary ">
                        <i class="fa-solid fa-user-pen"></i>
                        </button></Link> */}
                        <button
                          onClick= 
                          {() => deleteUser(item._id)}
                          className="btn btn-danger mx-2"
                        >
                          <i class="fa-solid fa-trash"></i>
                        </button>
                      </td>
                      {/* Add more table cells based on your data structure */}
                    </tr>
                  ))}
                </tbody>
              </table>
             
       </div>
      </div>
</>  )
}

export default ExpenseView