import React from "react";
import "./Audi.css";
import { GrBookmark } from "react-icons/gr";

function Audi() {
  return (
    <div className="main-section">
      <div className="div-section">
        <div>
          <h2 className="main-heading">Model Comparison</h2>
          <p className="text-center">
            To find the right model for you, first choose the car you're
            interested in. Then select up to three models to review and easily
            compare their features.
          </p>
        </div>
        <div
          style={{
            display: "flex",
            margin: "10px",
            width: "100%",
            padding: "50px",
          }}
        >
          <div className="card-container">
            <div>
              <h2
                style={{
                  backgroundColor: "gray",
                  height: "50px",
                  alignItems: "center",
                  margin: "auto",
                  padding: "24px",
                }}
              >
                OUTLANDER
              </h2>
              <img
                src="https://images03.nicepage.com/c461c07a441a5d220e8feb1a/e86caee8c8095f8581913c7a/Untitled-1.jpg"
                alt=""
              />
              <div className="text-1">
                <h4>Starting At <b>$24,895</b></h4>
                <span >
                  <GrBookmark />
                </span>
                <h1 style={{ color: "black" }}>5/7 Seats</h1>
                <span>
                  <GrBookmark />
                </span>
                <h1 style={{ color: "black" }}>velit esse cillum</h1>
                <span>
                  <GrBookmark />
                </span>
                <h1 style={{ color: "black" }}>dolore eu fugiat nulla</h1>
                <span>
                  <GrBookmark />
                </span>
                <h1 style={{ color: "black" }}>non proident</h1>
                
              </div>
              <div><button>LEARN MORE</button></div>
            </div>
          </div>
          <div className="card-container">
            <div>
              <h2
                style={{
                  backgroundColor: "red",
                  height: "50px",
                  alignItems: "center",
                  margin: "auto",
                  padding: "24px",
                }}
              >
                ECLIPSE CROSS
              </h2>
              <img
                src="https://images03.nicepage.com/c461c07a441a5d220e8feb1a/5de50cff20e15c3d832bda73/sad.jpg"
                alt=""
              />
              <div>
               
                <div className="text-1">
                <h4>Starting At <b>$24,895</b></h4>
                <span >
                  <GrBookmark />
                </span>
                <h1 style={{ color: "black" }}>5/7 Seats</h1>
                <span>
                  <GrBookmark />
                </span>
                <h1 style={{ color: "black" }}>velit esse cillum</h1>
                <span>
                  <GrBookmark />
                </span>
                <h1 style={{ color: "black" }}>dolore eu fugiat nulla</h1>
                <span>
                  <GrBookmark />
                </span>
                <h1 style={{ color: "black" }}>non proident</h1>
                
              </div>
              <div><button>LEARN MORE</button></div>
              </div>
            </div>
          </div>
          <div className="card-container">
            <div>
              <h2
                style={{
                  backgroundColor: "gray",
                  height: "50px",
                  alignItems: "center",
                  margin: "auto",
                  padding: "24px",
                }}
              >
                SHOGUN SPORT
              </h2>
              <img
                src="https://images03.nicepage.com/c461c07a441a5d220e8feb1a/4d15b54a54455975b0dd27ad/sa.jpg"
                alt=""
              />
              <div>
                
                <div className="text-1">
                <h4>Starting At <b>$24,895</b></h4>
                <span >
                  <GrBookmark />
                </span>
                <h1 style={{ color: "black" }}>5/7 Seats</h1>
                <span>
                  <GrBookmark />
                </span>
                <h1 style={{ color: "black" }}>velit esse cillum</h1>
                <span>
                  <GrBookmark />
                </span>
                <h1 style={{ color: "black" }}>dolore eu fugiat nulla</h1>
                <span>
                  <GrBookmark />
                </span>
                <h1 style={{ color: "black" }}>non proident</h1>
                
              </div>
              <div><button>LEARN MORE</button></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    
  );
}

export default Audi;
