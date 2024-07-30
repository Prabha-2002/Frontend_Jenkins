import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditOwner() {
    // const { id }= useParams();
const [data, setData] = useState([]);
const navigate = useNavigate();

// useEffect(() => {
//   axios
//     .get("http://localhost:2000/owner/" + id)
//     .then((response) => {
//         setData(response.data);
//         console.log(data);
//       })
//     .catch((err) => console.log(err));
// }, []);

let handleSubmit = (d) => {
  d.preventDefault();
  axios.put("http://localhost:2000/owner", data)
  .then((res) => {
    alert("Owner details Updated Successfully");
    navigate("/viewowner");
  });
};

return (

    <div  className="d-flex w-100 vh-100 justify-content-center align-items-center " >
      <div className="w-50   p-5">
        <form onSubmit={handleSubmit}>
          <h1 role="heading">Update Owner details </h1>
          <div>
          <span class="badge bg-tertiary">ID :</span>
            <input
              type="number"
              disabled
              name="id"
              className="form-control"
              value={data.id}
              onChange={(e) => setData({ ...data, id: e.target.value })}
            />
          </div>

          <div>
          <span class="badge bg-tertiary" role="name">NAME :</span>
            <input
              type="text"
              id="name"
              role="nameinput"
              className="form-control"
              value={data.name}
              
              onChange={(e) => setData({ ...data, name: e.target.value })}
            />
          </div>
          <div>
          <span class="badge bg-tertiary"  role="phone" >PHONE :</span>
            <input
              type="text"
              id="phone"
              data-testid="phinput"
              className="form-control"
              value={data.phone}
              onChange={(e) => setData({ ...data, phone: e.target.value })}
            />
          </div>
          <div>
          <span class="badge bg-tertiary" role="ad" >AADHAAR NUMBER :</span>
            <input
              type="number"
              id="aadhaar"
              role="aadhaar"
              className="form-control"
              value={data.aadhaar}
              onChange={(e) => setData({ ...data, aadhaar: e.target.value })}
            />
          </div>

          <div>
          <span class="badge bg-tertiary"  role="nooflands" >NUMBER OF LANDS :</span>
            <input
              type="number"
              id="nooflands"
              data-testid="lands"
              className="form-control"
              value={data.nooflands}
              onChange={(e) => setData({ ...data, nooflands: e.target.value })}
            />
          </div>

          <br />

          <button  id="upd" className="btn btn-info ">Update</button>
        </form>
      </div>
    </div>
    

);
}


export default EditOwner
