import React from 'react'

function RoomView() {
  return (
<>

<div className="div mt-5 p-1">
        {/*----header-----*/}

        <div className="heading d-flex justify-content-between">
          <h2 className="text-info">Bed Availability</h2>
          <div className="search-month mt-2">
          </div>
          <h4>Hostel Name</h4>
        </div>
        {/*----cards-----*/}

        <div className="Cards-section mt-4 p-2">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div class="card" style={{ width: "18rem" }}>
                  <div class="card-body">
                    <h5 class="card-title">
                      110
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
                      100
                    </h5>
                    <h6 class="mt-2 card-subtitle mb-2 text-body-secondary">
                      Occupied
                    </h6>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div class="card" style={{ width: "18rem" }}>
                  <div class="card-body">
                    <h5 class="card-title">
                  20
                    </h5>
                    <h6 class="mt-2 card-subtitle mb-2 text-body-secondary">
                      Vacant
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*----chart goes here-----*/}
      </div>
</>  )
}

export default RoomView