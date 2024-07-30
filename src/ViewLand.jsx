import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";


function ViewLand() {
    const [col, setCol] = useState([]);
    const [rec, setRec] = useState([]);
    const nav = useNavigate();
  
    // useEffect(() => { 
    //   axios
    //     .get("http://localhost:2000/Land/all")
    //     .then((response) => {
    //       setCol(Object.keys(response.data[0]));
    //       setRec(response.data);
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // }, []);
  
    let handleDelete = (id) => {
      const conf = window.confirm("Do you want to delete the Land details?");
      if (conf) {
        axios
          .delete("http://localhost:2000/Land/" + id)
          .then((res) => {
            alert("Land data is  deleted");
            nav("/view");
            window.location.reload();
          })
          .catch((error) => {
            console.log(error)
          });
      }
    };
  
    return (
      <div id="body">
        <div className="container-fluid  bg-dark">
          <h1 className="text-center text-bg-dark " data-testid="heading"  >
         REAL ESTATE MANAGEMENT SYSTEM
          </h1>
  <br>
  </br>
  <h1 role="sub" >          LAND DETAILS
</h1>

          <br />

          <table className="table table-dark table-borderless w-100  ">
            <thead>
              <tr>
                {col.map((c) => (
                  <th>{c}</th>
                ))}
                <th>Action</th>
              </tr>
            </thead>
  
            <tbody>
              {rec.map((d) => (
                <tr>
                  <td>{d.id}</td>
                  <td>{d.landsqft}</td>
                  <td>{d.landaddress}</td>
                  <td>{d.landsqft}</td>

                  <td>
                    <Link
                      to={`/edit/${d.id}`}
                      className="btn btn-success "  data-testid="update" 
                    >
                      Update
                    </Link>
                    &nbsp;&nbsp;&nbsp;
                    <button
                      onClick={(e) => handleDelete(d.id)}
                      className="btn  btn-danger" id="delete"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="text-center">
            <Link to="/add" className="btn btn-success w-40 " >
              Add the Land  
            </Link>
          </div>
        </div>
      </div>
    );
  }

export default ViewLand
