import React from "react";
import Sidebar from "../Components/Sidebar";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { BASEURL } from "../services/baseUrl";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

function Edituser() {
  //
  const [peopleData,setPeopleData] = useState({
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
  const { id } = useParams();

  const getUserData = async () => {
    try {
      // Make a get request to get form data from JSON Server
      const res = await axios.get(`${BASEURL}/user/edit/${id}`);
      //   console.log(id);
      setPeopleData(res.data[0]);
      // console.log(res.data[0]);
      if (res.status === 200) {
       console.log( `Details of ${peopleData.name} fetched Successfully!`);
        
      } else if (res.status === 404) {
        alert(res.data);
      }
      //  handle success message goes here
    } catch (error) {
      // Handle errors
      alert("couldnt update data ,check code ");
      console.error("Error :", error);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPeopleData({
      ...peopleData,
      [name]: value,
    });
    //  console.log(peopleData);
  };

  const clearData = (peopleData) => {
    // alert("cancel data")
    setPeopleData("");
  };

  const updateUser = async (e) => {
     e.preventDefault()
   // console.log(id);
    //  console.log(peopleData);
    try {
      // Make a POST request to store form data in JSON Server
      const res = await axios.post(`${BASEURL}/user/edit/${id}`, peopleData);
      console.log(res.status);
      setPeopleData(res.data);
      if (res.status === 200) {
        console.log(res.status);
         
        alert(`Details of ${peopleData.name} updated Successfully!`);
        navigate("/list")
      } else if (res.status === 404) {
        alert(res.data);
      }
      // e.preventDefault()

      //handle success message goes here
    } catch (error) {
      //Handle errors
      alert("cannot update user data , try again");
      console.log(error);
      // console.log(id);
      console.error("Error :", error);
    }
  };
  //end
  
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-2 ">
            <Sidebar />
          </div>
          <div className="col-lg-10 ">
            <div className="Parent mt-3 div">
              {/*----header-----*/}
              <div className="header d-flex mt-5 flex-row justify-content-between">
                <h1 className=" text-info ">Edit user</h1>
              </div>
              {/*----table-----*/}
              <div className="container-fluid">
                <div className="row  ">
                  <h1
                    style={{ marginBottom: "-50px", paddingTop: "10px" }}
                    className="justify-content-center d-flex"
                  >
                    Enter Resident Details
                  </h1>

                  <div className="col-lg-2"></div>
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
                              value={peopleData.number}
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
                              value={peopleData.email}
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
                              value={peopleData.room}
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
                              Joined Date
                            </label>
                            <input
                              type="date"
                              name="joinedDate"
                              value={peopleData.joinedDate}
                              onChange={handleInputChange}
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
                          onClick={updateUser}
                          type="submit"
                          class="btn btn-success"
                        >
                          Update User
                        </button>
                        <button
                          onClick={clearData}
                          class="btn mx-3  btn-danger"
                        >
                          Cancel
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="col-lg-2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Edituser;
