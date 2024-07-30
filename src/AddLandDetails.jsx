import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import axios from "axios";

function AddLandDetails() {
  const [records, setRecords] = useState([]);
  const [inputData, setInputData] = useState({
    id: "-1",
    landsqft: "",
    landaddress: "",
    owner: {
      id: "",
      name: "",
      phone: "",
      aadhaar: "",
      nooflands: ""
    }
  });

  const nav = useNavigate();

  // useEffect(() => {
  //   loadData();
  // }, []);

  // const loadData = async () => {
  //   try {
  //     const response = await axios.get("http://localhost:2000/owner/getOwners");
  //     setRecords(response.data);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  const handleAdd = (e) => {
    e.preventDefault();
    if (validate(inputData)) {
      axios
        .post("http://localhost:2000/Land", inputData)
        .then((response) => {
          alert("Data added Successfully");
          nav("/view");
          console.log(response.data);
        })
        .catch((err) => console.error(err));
    }  else {
      alert("valid data needed");
    }
  };

  const handleSelectChange = async (e) => {
    const id = e.target.value;
    try {
      const response = await axios.get(`http://localhost:2000/owner/all/${id}`);
      setInputData((prevState) => ({
        ...prevState,
        owner: {
          ...prevState.owner,
          ...response.data,
          id: id
        }
      }));
    } 
    catch (err) {
      console.error("Error fetching Owner data:", err);
    }
  };

  const validate = (inputData) => {
    if (inputData.landsqft.trim() === "") {
      alert("Enter a valid land square feet");
      return false;
    } else if (inputData.landaddress.trim() === "") {
      alert("Enter the land address");
      return false;
    } else {
      return true;
    }
  };

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <div className="w-50 bordered">
        <form onSubmit={handleAdd}>
          <h1>ADD LAND DETAILS</h1>
          <div>
            <span className="badge bg-tertiary" role="lsqft">LAND SQUARE FEET:</span>
            <input
              type="number"
              data-testid="landsqft"
              id="landsqft"
              className="form-control"
              value={inputData.landsqft}
              onChange={(e) =>
                setInputData({ ...inputData, landsqft: e.target.value })
              }
            />
          </div>
          <div>
            <span className="badge bg-tertiary"  role="address" >LAND ADDRESS:</span>
            <input
              type="text"
              data-testid="landaddress"
              id="landaddress"
              className="form-control"
              value={inputData.landaddress}
              onChange={(e) =>
                setInputData({ ...inputData, landaddress: e.target.value })
              }
            />
          </div>
          <div>
            <span className="badge bg-tertiary"    data-testid="id-heading">Select Owner:</span>
            <select
              onChange={handleSelectChange}
              className="form-control"
              id="ids"
            >
              <option value="" id="se" >Select a record</option>
              {records.map((record) => (
                <option key={record.id} value={record.id}>
                  {record.id}
                </option>
              ))}
            </select>
          </div>
          <br />
          <center>
            <button className="btn btn-success text-center justify-content-center w-30" id="add"  role="addbtn"  >
              ADD
            </button>
          </center>
        </form>
      </div>
    </div>
  );
}

export default AddLandDetails;
