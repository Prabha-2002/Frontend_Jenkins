import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";



function EditLand() { 
    
// const { id }= useParams();
const [data, setData] = useState([]);
const navigate = useNavigate();

// useEffect(() => {
  // axios
    // .get("http://localhost:2000/Land/" + id)
//     .then((response) => {
//         setData(response.data);
//         console.log(data);
//       })
//     .catch((err) => console.log(err));
// }, []);

let handleSubmit = (d) => {
  d.preventDefault();
  axios.put("http://localhost:2000/Land", data)
  .then((res) => {
    alert("Land Details Updated Successfully !!!!");
    navigate("/view");
  });
};

return (

    <div  className="d-flex w-100 vh-100 justify-content-center align-items-center " >
      <div className="w-50  p-5">
        <form onSubmit={handleSubmit}>
          <h1>UPDATE LAND DETAILS </h1>
          <div>
            <lable >ID :</lable>
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
            <lable  role="lsqft" >LAND SQUARE FEET :</lable>
            <input
              type="number"
              name="landsqft"
              data-testid="landsqft"
              className="form-control"
              value={data.landsqft}
              onChange={(e) => setData({ ...data, landsqft: e.target.value })}
            />
          </div>
          <div>
            <lable  role="address"  >LAND ADDRESS:</lable>
            <input
              type="text"
              name="landaddress"
              className="form-control"
              data-testid="landaddress"
              value={data.landaddress}
              onChange={(e) => setData({ ...data, landaddress: e.target.value })}
            />
          </div>

          <br />

          <button className="btn btn-info " id="upd" role="upd" >Update</button>
        </form>
      </div>
    </div>

);
}

export default EditLand

