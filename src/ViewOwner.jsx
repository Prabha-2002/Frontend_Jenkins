import React from 'react'
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
function ViewOwner() { 
    
    const [col, setCol] = useState([]);
    const [rec, setRec] = useState([]);
    const nav = useNavigate();
  
    // useEffect(() => { 
    //   axios
    //     .get("http://localhost:2000/owner/all")
    //     .then((response) => {
    //       setCol(Object.keys(response.data[0]));
    //       setRec(response.data);
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // }, []);

    let handleDelete = (id) => {
      const conf = window.confirm("Do you want to delete the owner records?");
      if (conf) {
        axios
          .delete("http://localhost:2000/owner/" + id)
          .then((res) => {
            alert("Owner data is  deleted");
            nav("/viewowner");
            window.location.reload();
          })
          .catch((error) => {
            console.log(error)
          });
      }
    };
  
  
    return (
      <div id="body">
        <div className="container-fluid bg-dark ">
          <h1 className="text-center bg-dark " data-testid="heading">
REAL ESTATE MANAGEMENT SYSTEM        
                    </h1>
                <br/>
                <h1 role='sub' >  OWNER DETAILS</h1>
  

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
                  <td>{d.name}</td>
                  <td>{d.phone}</td>
                  <td>{d.aadhaar}</td>
                  <td>{d.nooflands}</td>
                  <td>
                    <Link
                      to={`/editowner/${d.id}`}
                      className="btn btn-success "
                    >
                      Update
                    </Link>
                    &nbsp;&nbsp;&nbsp;
                    <button
                      onClick={(e) => handleDelete(d.id)}
                      className="btn  btn-danger"   id='delete'
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="text-center">
            <Link to="/addowner" className="btn btn-success w-40 " >
              Add the Owner 
            </Link>
          </div>
        </div>
      </div>
    );
  }

export default ViewOwner













