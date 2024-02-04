import React from "react";

function Cards() {
  return (
    <>
      <div className="container-fluid">
        <div className="row px-4">
            <h1 className="text-center text-primary fw-bold pb-3">We Provide</h1>
          <div className="col-lg-4 p-3">
          <div class="card">
              <img
               style={{height:"%",width:"75%"}}
                src="https://www.reshot.com/preview-assets/illustrations/QZPDGHKC38/man-doing-financial-work-QZPDGHKC38-w1600.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title text-center  text-primary  fw-bold mt-3">Money Management</h5>
                <p class="card-text text-center ">
                Track and manage hostel expenses, payments, and financial records with a robust system ensuring accuracy and transparency.
                </p>
                
              </div>
            </div>
          {/* <div class="card" style={{height:"150px",width:"150px"}}>
              <img
src=""              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div> */}
          </div>
          <div className="col-lg-4 p-3">
          <div class="card">
              <img
               style={{height:"%",width:"80%"}}
               src="https://img.freepik.com/free-vector/diverse-crowd-people-different-ages-races_74855-5235.jpg?w=740&t=st=1704445799~exp=1704446399~hmac=fcfc2cc65567d0bbfc7a2bee219394529e0b88bfb3afd82d2abe91e25329ae2f"            
               class="card-img-top"
               alt="..."
              />
              <div class="card-body">
                <h5 class="card-title text-center text-primary fw-bold">People Management</h5>
                <p class="text-center  card-text">
                Effortlessly navigate through student details, assignments, and academic progress for informed decision-making                </p>
                
              </div>
            </div>
          </div>
          <div className="col-lg-4 p-3">
          <div class="card">
              <img
               style={{height:"",width:"75%"}}
                src="https://elements-cover-images-0.imgix.net/0bff4986-3181-4394-acaa-e691077d7a21?auto=compress%2Cformat&w=900&fit=max&s=0c302042ddbe45711df4f6d7cf888537"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title text-primary text-center  fw-bold">Secured Data storage </h5>
                <p class="card-text text-center ">
                Safeguard hostel data with our state-of-the-art storage solutions. Ensure data security for efficient operations.</p>       
              </div>
            </div>
          </div>

        </div>
        
      </div>
    </>
  );
}

export default Cards;
