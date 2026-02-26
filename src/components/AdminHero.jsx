import axios from "axios";
import React, { useState } from "react";

import { jwtDecode } from "jwt-decode";

function AdminHero() {
    let token = localStorage.getItem("token")

    const decode = jwtDecode(token)
    // console.log(decode);
    // console.log(decode.id);
    
     
    let [onebhk, setOnebhk] = useState({
        name:"",
        oldprice:"",
        newprice:""
    })

        let [twobhk, setTwobhk] = useState({
        name:"",
        oldprice:"",
        newprice:""
    }) 

    let [address, setAddress] = useState("")


    let onebhkHandleChange = async(e)=>{
        let {name, value} = e.target

        setOnebhk((pre)=>({
            ...pre,
            [name]:value
        }))
    }

    let twobhkHandleChange = async(e)=>{
        let {name, value} = e.target

        setTwobhk((pre)=>({
            ...pre,
            [name]:value
        }))
    }

    let handleSubmit = async(e)=>{
        e.preventDefault()
        // console.log(onebhk);
        // console.log(twobhk);
        // console.log(address);

        let res = await axios.put("http://localhost:8000/api/updateherosection",{
            onebhk,
            twobhk,
            address,
            // id:decode.id
        })
        console.log(res.data);
        
        alert(res.data.message)
    }


  return (
    <div className="container py-5">
        <center>
            <h1>ADMIN DASHBOARD</h1>
        </center>
      <div className="card shadow-lg p-4 rounded-4">
        <h3 className="mb-4 text-center fw-bold">HERO SECTION</h3>

        <form onSubmit={handleSubmit}>
          <div className="row">

            {/* Property Name */}
            <div className="col-md-6 mb-3">
              <label className="form-label">1 BHK</label>
              <input
                type="text"
                name="name"
                value={onebhk.name}
                onChange={onebhkHandleChange}
                className="form-control m-1"
                placeholder="Enter BHK"
                required
              />
              <input
                type="text"
                name="oldprice"
                value={onebhk.oldprice}
                onChange={onebhkHandleChange}
                className="form-control  m-1"
                placeholder="Enter Old Price"
                required
              />

             <input
                type="text"
                name="newprice"
                value={onebhk.newprice}
                onChange={onebhkHandleChange}
                className="form-control  m-1"
                placeholder="Enter New Price"
                required
              />
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label">2 BHK</label>
              <input
                type="text"
                name="name"
                value={twobhk.name}
                onChange={twobhkHandleChange}
                className="form-control  m-1"
                placeholder="Enter BHK"
                required
              />
              <input
                type="text"
                name="oldprice"
                value={twobhk.oldprice}
                onChange={twobhkHandleChange}
                className="form-control  m-1"
                placeholder="Enter Old Price"
                required
              />

             <input
                type="text"
                name="newprice"
                value={twobhk.newprice}
                onChange={twobhkHandleChange}
                className="form-control  m-1"
                placeholder="Enter New Price"
                required
              />
            </div>
          </div>

          <label className="form-label">Address</label>
              <input
                type="text"
                name="name"
                value={address}
                onChange={(e)=>setAddress(e.target.value)}
                className="form-control  m-1"
                placeholder="Enter Address"
                required
              />

          {/* Buttons */}
          <div className="text-center">
            <button type="submit" className="btn btn-success px-4 me-3">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AdminHero;