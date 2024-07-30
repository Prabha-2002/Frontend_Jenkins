import { useState } from "react";
import { useNavigate } from "react-router-dom";
//import axios  from 'axios';
import React from 'react'
function AddOwner() {  
     const [inputData, setInputData] = useState({    
        id:"",
        name:"",
        phone:"",
        aadhaar:"",
        nooflands:""
}
);


const nav = useNavigate();

let handleAdd = (e) => {
e.preventDefault();
let ans = validate(inputData);
if (ans === true) {
  axios
    .post("http://localhost:2000/owner", inputData)
    .then((response) => {
      // alert("Data added Successfully");
      nav("/viewowner");
      console.log(response.data);
    })
    .catch((err) => console.log(err));
} else {
  alert("valid data needed");
}
};

const validate = (inputData) => {
 if (inputData.name.length === 0) {
  alert("Enter the name ");
  return false;
} 
else if (inputData.phone.length === 0) {
    alert("Enter the correct format of phone");
    return false;
  } 
else if (inputData.aadhaar.length === 0) {
  alert("Enter the correct format of aadhaar");
  return false;
} else if (inputData.nooflands.length === 0) {
  alert("Enter the number of lands");
  return false;
} 
else {
  return true;
}
};

return (
<div className="d-flex w-100 vh-100 justify-content-center align-items-center">
  <div className=" w-50  bordered  ">
    <form onSubmit={handleAdd} >
      <h1 role="heading">ADD OWNER </h1>
      <div>
      <span class="badge bg-tertiary" data-testid="name">NAME :</span>
        <input type="text"   data-testid="nameinput" id="name" className="form-control" onChange={(e) =>setInputData({ ...inputData, name: e.target.value })}          onBlur={(e) =>
        setInputData({ ...inputData, name:e.target.value })
      } />
      </div>
      <div>
      <span class="badge bg-tertiary"   role="phone" >PHONE :</span>
        <input type="number" id="phone"  role="phinput" className="form-control" onChange={(e) =>setInputData({ ...inputData, phone: e.target.value })}/>
      </div>

      <div>
      <span class="badge bg-tertiary" role="ad" >AADHAAR NUMBER :</span>
        <input type="number" id="aadhaar" role="aadhaar" className="form-control" onChange={(e) =>setInputData({ ...inputData, aadhaar: e.target.value })} />
      </div>

      <div>
      <span class="badge bg-tertiary"  role="nooflands">NUMBER OF LANDS :</span>
        <input type="number"  role="lands" id="nooflands"   className="form-control" onChange={(e) =>setInputData({ ...inputData, nooflands: e.target.value }) } />
      </div>
    <center>
      
    <button  id="submit" >
Submit
</button>
</center>

 </form>
 </div>
 </div>
  
);
}
export default AddOwner
