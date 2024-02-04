import React, { useState } from "react";
import { AddPeopleDataApi } from "../services/allApi";
import axios from "axios";
import { BASEURL } from "../services/baseUrl";
import PeopleList from "./PeopleList";
import { useNavigate } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

function Adduser() {
  //
  const [peopleData, setPeopleData] = useState({
    id: "",
    name: "",
    email: "",
    number: "",
    room: "",
    joinedDate: "",
    Rent: "",
  });
  //
  const navigate = useNavigate();
  //
  const handleDateChange = (event) => {
    const { name, value } = event.target;
    console.log(peopleData);

    if (name === 'joinedDate') {
      // Parse the selected date
      const parsedDate = new Date(value);

      // Format the date as DD-MM-YYYY
      const formattedDate = parsedDate.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
      });

      // Update the state with the formatted date
      setPeopleData({ ...peopleData, [name]: formattedDate });
    } else {
      // For other fields, update the state directly
      setPeopleData({ ...peopleData, [name]: value });
    }
  };

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setPeopleData({...peopleData,[name]: value});
  // };

  const clearData = (peopleData) => {
    // alert("cancel data")
    setPeopleData("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make a POST request to store form data in JSON Server
      const res = await axios.post(`${BASEURL}/user/register`, peopleData);
      console.log(res.status);
      if (res.status === 200) {

        alert(`Details of ${peopleData.name} Added Successfully!`)
        navigate("/list")

        setPeopleData({
          id: "",
          name: "",
          email: "",
          number: "",
          room: "",
          joinedDate: "",
          Rent: "",
        });
       

      } else if (res.status === 404) {
        alert(res.data);
      }
      //  handle success message goes here   ;
    } catch (error) {
      // Handle errors
      alert("Error happend! try again")
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
            Enter Resident Details
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
                      value={peopleData.name}
                      onChange={handleDateChange}
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
                      value={peopleData.number}
                      onChange={handleDateChange}
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
                      value={peopleData.email}
                      onChange={handleDateChange}
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
                      value={peopleData.room}
                      onChange={handleDateChange}
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
                      Joined Date
                    </label>
                    <input
                      type="date"
                      name="joinedDate"
                      value={peopleData.formattedDate}
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
                      name="Rent"
                      value={peopleData.Rent}
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
                <button onClick={clearData} class="btn mx-3  btn-danger">
                  Cancel
                </button>
              </div>
            </form>
          </div>
          <div className="col-lg-3"></div>
        </div>

      </div>

      {/* Same as */}
      <ToastContainer
        position="top-center"
        autoClose={1100}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>

  );

}

export default Adduser;
