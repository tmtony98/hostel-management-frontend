import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { BASEURL } from "../services/baseUrl";



function AddRent() {
  //js code goes here
  const [rentData, setRentData] = useState({
    id: "",
    name: "",
    email: "",
    number: "",
    room: "",
    selectedMonth: "",
    rentAmount: "",
    rentStatus: "",
  });

  const navigate = useNavigate();

  const handleDateChange = (e) => {
    //  e.preventDefault();
      const selectedDate = e.target.value;
      // Extract the month name from the selected date
      const selectedMonth = new Date(selectedDate).toLocaleString("default", {
        month: "long",
      });
      setRentData({ ...rentData, selectedMonth });
      //console.log(selectedDate);
      console.log(rentData);
   //   console.log(requestData);
    };
  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRentData({
      ...rentData,
      [name]: value,
    });
    console.log(rentData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make a POST request to store form data in JSON Server
      const res = await axios.post(`${BASEURL}/rent`, rentData);
      // console.log(res.status);
      console.log(res.data);
      if (res.status === 200) {
        alert(`Rent of ${rentData.name} Added Successfully!`);
        console.log(res);

        navigate("/rentlist");
      } else if (res.status === 404) {
        alert(res.data);
      }
      //  handle success message goes here
    } catch (error) {
      // Handle errors
      alert("user already exists");
      console.error("Error :", error);
    }
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row  ">
          <h1
            style={{ marginBottom: "-50px", paddingTop: "100px" }}
            className="justify-content-center d-flex"
          >
            Enter New Rent Details
          </h1>

          <div className="col-lg-3"></div>
          <div className="col-lg-6 mt-5 py-5">
            <form>
              <div className="g-2 row">
                {/* ist row */}
                <div className="col-sm-6">
                  {/* name*/}

                  <div class="mb-3">
                    <label for="exampleInputname" class="form-label">
                      Full Name
                    </label>
                    <input
                      placeholder="eg:Tony Mathew"
                      type="text"
                      name="name"
                      value={rentData.name}
                      onChange={handleInputChange}
                      class="form-control"
                      id="exampleInputname"
                      aria-describedby="nameHelp"
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  {/* number*/}
                  <div class="mx-4 mb-3">
                    <label for="exampleInputno" class="form-label">
                      Mobile Number
                    </label>
                    <input
                      placeholder="eg : 9526XXXXXX"
                      name="number"
                      value={rentData.number}
                      onChange={handleInputChange}
                      class="form-control"
                      id="exampleInputno"
                    />
                  </div>
                </div>
              </div>
              {/* 2nd row */}
              <div className="g-2 row">
                <div className="col-sm-6">
                  {/* email */}
                  <div class=" mb-3">
                    <label for="exampleInputemail" class="form-label">
                      Email ID
                    </label>
                    <input
                      placeholder="eg : Tony@gmail.com"
                      type="email"
                      name="email"
                      value={rentData.email}
                      onChange={handleInputChange}
                      class="form-control"
                      id="exampleInputemail"
                    />
                  </div>
                </div>
                {/* room no*/}
                <div className="col-sm-6">
                  <div class="mb-3 mx-4 ">
                    <label for="exampleInputroom" class="form-label">
                      Room No
                    </label>
                    <input
                      placeholder="eg : A3"
                      type="text"
                      name="room"
                      value={rentData.room}
                      onChange={handleInputChange}
                      class="form-control"
                      id="exampleInputroom"
                      aria-describedby="roomHelp"
                    />
                  </div>
                </div>
              </div>
              {/* 3 rd row  */}
              <div className="g-3 row">
                {/* date */}
                <div className="col-sm-6">
                  {" "}
                  <div class="mb-3 ">
                    <label for="exampleInputdate" class="form-label">
                      Month
                    </label>
                    <input
                      type="month"
                      name="selectedDate"
                      value={rentData.selectedDate}
                      onChange={handleDateChange}
                      class="form-control"
                      id="exampleInputdate"
                      aria-describedby="roomHelp"
                    />
                  </div>
                </div>
                {/* Rent amount */}
                <div className="col-sm-6">
                  <div class="mb-3 mx-4">
                    <label for="exampleInputdate" class="form-label">
                      Rent Amount
                    </label>
                    <input
                      placeholder="eg : 5000"
                      type="number"
                      name="rentAmount"
                      value={rentData.rentAmount}
                      onChange={handleInputChange}
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

export default AddRent;
