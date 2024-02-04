import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import { BASEURL } from "../services/baseUrl";

function AddExpense() {
  //js goes here

  const [expenseData, setExpenseData] = useState({
    id: "",
    currentBill: "",
    waterBill: "",
    messBill: "",
    staffSalary: "",
    selectedMonth: "",
  });

  const navigate = useNavigate();

  const handleDateChange = (e) => {
  //  e.preventDefault();
    const selectedDate = e.target.value;
    // Extract the month name from the selected date
    const selectedMonth = new Date(selectedDate).toLocaleString("default", {
      month: "long",
    });
    setExpenseData({ ...expenseData, selectedMonth });
    //console.log(selectedDate);
    console.log(expenseData);
 //   console.log(requestData);
  };


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setExpenseData({
      ...expenseData,
      [name]: value,
    });

    // console.log(expenseData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make a POST request to store form data in JSON Server
      const res = await axios.post(`${BASEURL}/expense/add`, expenseData);
      // console.log(res.status);
      console.log(res.data);
      if (res.status === 200) {
        alert(
          `Details of month ${expenseData.selectedMonth} Added Successfully!`
        );
        console.log(res);

        navigate("/expenses");
      } else if (res.status === 404) {
        alert(res.data);
      }
      //  handle success message goes here
    } catch (error) {
      // Handle errors
      alert("error occureed try again");
      console.error("Error :", error);
    }
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <h1
            style={{ marginBottom: "-50px", paddingTop: "100px" }}
            className="justify-content-center d-flex"
          >
            Add New Expense Details
          </h1>

          <div className="col-lg-3"></div>
          <div className="col-lg-6 mt-5 py-5">
            <form>
              <div className="g-2 row">
                {/* ist row */}
                <div className="col-sm-6">
                  {/* current bill*/}

                  <div class="mb-3">
                    <label for="exampleInputcurrent" class="form-label">
                      Current Bill
                    </label>
                    <input
                      placeholder="eg:5000"
                      type="number"
                      name="currentBill"
                      value={expenseData.currentBill}
                      onChange={handleInputChange}
                      class="form-control"
                      id="exampleInputcurrent"
                      aria-describedby="nameHelp"
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  {/* waterbill*/}

                  <div class="mx-4 mb-3">
                    <label for="exampleInputwater" class="form-label">
                      Water Bill
                    </label>
                    <input
                      type="number"
                      placeholder="eg : 50XXX"
                      name="waterBill"
                      value={expenseData.waterBill}
                      onChange={handleInputChange}
                      class="form-control"
                      id="exampleInputwater"
                    />
                  </div>
                </div>
              </div>
              {/* 2nd row */}
              <div className="g-2 row">
                <div className="col-sm-6">
                  {/* messbill */}
                  <div class=" mb-3">
                    <label for="exampleInputmess" class="form-label">
                      Mess Bill
                    </label>
                    <input
                      placeholder="eg : 500XX"
                      type="text"
                      name="messBill"
                      value={expenseData.messBill}
                      onChange={handleInputChange}
                      class="form-control"
                      id="exampleInputmess"
                      aria-describedby="roomHelp"
                    />
                  </div>
                </div>
                {/* staffsalary*/}
                <div className="col-sm-6">
                  <div class="mb-3 mx-4 ">
                    <label for="examplestaff" class="form-label">
                      Staff Salary
                    </label>
                    <input
                      placeholder="eg : 50XXX"
                      type="number"
                      name="staffSalary"
                      value={expenseData.staffSalary}
                      onChange={handleInputChange}
                      class="form-control"
                      id="examplestaff"
                      aria-describedby="roomHelp"
                    />
                  </div>
                </div>
              </div>
              {/*3 rd row*/}
              <div className="g-3 row">
                {/* month */}
                <div className="col-sm-6">
                  {" "}
                  <div class="mb-3 ">
                    <label for="exampleInputdate" class="form-label">
                      Month
                    </label>
                    <input
                      type="month"
                      name="selectedDate"
                      value={expenseData.selectedDate}
                      onChange={handleDateChange}
                      class="form-control"
                      id="exampleInputdate"
                      aria-describedby="roomHelp"
                    />
                  </div>
                </div>
              </div>
              <div className="div py-2">
                <button
                  onClick={handleSubmit}
                  type="submit"
                  class="btn btn-primary"
                >
                  Submit
                </button>
                <button class="btn mx-3  btn-danger">Cancel</button>
              </div>
            </form>
          </div>
          <div className="col-lg-3"></div>
        </div>
      </div>
    </>
  );
}

export default AddExpense;
