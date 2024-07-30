import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import './App.css'
import ViewLand from "./ViewLand";
import AddLandDetails from "./AddLandDetails";
import ViewOwner from "./ViewOwner";
import GetStarted from "./GetStarted";
import AddOwner from "./AddOwner";
import EditLand from "./EditLand";
import EditOwner from "./EditOwner";
import NewPage from "./NewPage";
function AppRouter() {
  return (
    <Router>
    <Routes>
  <Route path="/" element={<Homepage />} />
    <Route path="/view" element={<ViewLand />} />
    <Route path="/get" element={<GetStarted />} />
    <Route path="/viewowner" element={<ViewOwner />} />
    <Route path="/add" element={< AddLandDetails/>} />
    <Route path="/addowner" element={< AddOwner/>} />
    <Route path="/edit/:id" element={<EditLand />} />
    <Route path="/editowner/:id" element={<EditOwner />} /> 
     {/* <Route path="/" element={<NewPage />} /> */}

  

    </Routes>
    </Router>  
  )
}

export default AppRouter
