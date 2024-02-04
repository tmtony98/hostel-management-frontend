import React from "react";
import Sidebar from "../Components/Sidebar";
import RentView from "../Components/RentView";
import Analytics from "../Components/Analytics";
function Dashboard() {
  


  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-2 col-md-4">
            <Sidebar />
          </div>
          <div className="col-lg-10 ">
           <Analytics/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
