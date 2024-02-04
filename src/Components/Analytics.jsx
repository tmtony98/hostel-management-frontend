import React, { useState } from "react";
import axios from "axios";
import { BASEURL } from "../services/baseUrl";
import { useEffect } from "react";
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

function Analytics() {
  //
  const [peopleCount, setPeopleCount] = useState(null);
  const [totalRent, setTotalRent] = useState(null);
  const [expense, setExpense] = useState([])
  const [rentData, setRentData] = useState([]);
  // const [selectedMonth, setSelectedMonth] = useState("All");
  const summedRentByMonth = {}
  rentData.forEach((entry) => {
    const { selectedMonth, rentAmount } = entry;
    if (!summedRentByMonth[selectedMonth]) {
      // If selectedMonth is not yet in the object, initialize it with the current rentAmount
      summedRentByMonth[selectedMonth] = rentAmount;
    } else {
      // If selectedMonth is already in the object, add the current rentAmount to it
      summedRentByMonth[selectedMonth] += rentAmount;
    }
  });
  // Convert the object to an array of objects with selectedMonth and summed rentAmount
  const summedRentArray = Object.keys(summedRentByMonth).map((selectedMonth) => ({
    selectedMonth,
    summedRentAmount: summedRentByMonth[selectedMonth],
  }));

  // js api call to get rent collection datab
  const rentCollection = async () => {
    try {
      const response = await axios.get(`${BASEURL}/rent/list`);
      // console.log(response.data);
      setRentData((prevRentData) => {
        const newRentData = response.data;
        // console.log(newRentData);
        // Return the updated state
        return newRentData;
      });
    } catch (error) {
      console.error("Error fetching rent data:", error);
    }
  };

  //js api call to get expense data 
  const fetchExpense = async () => {
    try {
      const response = await axios.get(`${BASEURL}/expense/list`);
      setExpense(response.data);
      //  console.log(response.data);
      //  console.log(expense);
    } catch (error) {
      console.error("Error fetching expense data:", error);
    }
  };

  useEffect(() => {
    fetchExpense()
    //console.log(summedRentByMonth);
    console.log(summedRentArray);
    // This will run when rentData is updated
    // console.log(rentData);
    //console.log(totalRent);
  }, [rentData]);

  //chart data for rent collection
  const chartData = {
    labels: summedRentArray.map(item => item.selectedMonth),
    datasets: [
      {
        label: 'Total Rent Collected',
        data: summedRentArray.map(item => item.summedRentAmount),
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(20,192,192,1)',
        borderWidth: 1.5,
      },
    ],
  };

  //localstorage
  var storedData = localStorage.getItem("adminData");

  // Parse the JSON string back to a JavaScript object
  var retrievedData = JSON.parse(storedData);

  // Now 'retrievedData' contains the original object
  //console.log(retrievedData);
  //api call to get count of people
  const residentCount = async () => {
    try {
      const response = await axios.get(`${BASEURL}/users/count`);
      // console.log(response.data);
      setPeopleCount(response.data);
      //  console.log(response.status);
    } catch (error) {
      console.error("Error fetching resident count:", error);
    }
  };

  const totalRentCollected = async () => {
    try {
      const response = await axios.get(`${BASEURL}/rent/collection`);
      // console.log(response.status);
      setTotalRent(response.data);
      // console.log(response.status);
    } catch (error) {
      console.error("Error fetching resident count:", error);
    }
  };

  useEffect(() => {
    totalRentCollected();
    residentCount();
    rentCollection();
    //console.log(rentData);

  }, []);

  return (
    <>
      <div className="div mt-5 p-1">
        {/*----header-----*/}
        <div className="heading d-flex justify-content-between">
          <h2 className="text-info">Dashboard</h2>
          <div className="search-month mt-2"></div>
          <h4 className="text-primary">
            Welcome <span className=""> {retrievedData.email}</span>
          </h4>
        </div>
        {/*----cards-----*/}

        <div className="Cards-section mt-5 p-2">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div class="card p-2" style={{ width: "17rem", height:"7rem" }}>
                  <div class="card-body">
                    <h5 class="card-title text-primary fw-bold">{peopleCount}</h5>
                    <h6 class="mt-2 card-subtitle mb-2 text-body-secondary">
                      Total Residents
                    </h6>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div class="card p-2" style={{ width: "17rem",height:"7rem" }}>
                  <div class="card-body ">
                    <h5 class="card-title  text-primary fw-bold">{totalRent} </h5>
                    <h6 class="mt-2 card-subtitle mb-2 text-body-secondary">
                      Total Rent Collected
                    </h6>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div class="card p-2" style={{ width: "17rem",height:"7rem" }}>
                  <div class="card-body">
                    <h5 class="card-title text-primary fw-bold">{totalRent} </h5>
                    <h6 class="mt-2 card-subtitle mb-2 text-body-secondary">
                      Total Expenses 
                    </h6>
                  </div>
                </div>
              </div>
              {/* <div className="col-lg-4 col-md-6">
                <div class="card" style={{ width: "18rem" }}>
                  <div class="card-body">
                    <h5 class="card-title">2,20,000</h5>
                    <h6 class="mt-2 card-subtitle mb-2 text-body-secondary">
                      Total Expense
                    </h6>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
        {/*----chart goes here-----*/}
        <div className="container pt-1 mt-3">
          <div className="row">
            <div className="col-lg-8 col-md-10">
              <div>
                <h1 className="p-1 text-primary">Rent Data Analysis</h1>
                <Bar className="p-3"
                  data={chartData}
                  options={{
                    scales: {
                      y: {
                        beginAtZero: true,
                      },
                    },
                  }}
                />
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}

export default Analytics;
