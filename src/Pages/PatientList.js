import axios from 'axios'
import React, { useEffect, useState } from 'react'

function PatientList() {
    const [Patients , setPatient] = useState([]);
    var increment =1;
    useEffect(()=>{
        axios.get("http://localhost:85/patient_system/project/patient_system_backend/FetchPatients.php").then((res)=>{
            console.log(res.data);
            setPatient(res.data);
        })
    }, [] )
  return (
   <>
    <div className="formContainer">
      <div className="card ">
        <div className="card-header bg-white border-bottom  ">
          <h2>Today's Patient List</h2>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table align-items-center mb-0">
              <thead>
                <tr>
                  <th className="text-uppercase text-secondary text-center text-xxs font-weight-bolder opacity-7">
                    #
                  </th>
                  <th className="text-uppercase text-secondary text-xxs text-center font-weight-bolder opacity-7">
                    Code
                  </th>
                  <th className="text-uppercase text-secondary text-xxs text-center font-weight-bolder opacity-7">
                    Fullname
                  </th>
                  <th className="text-uppercase text-secondary text-xxs text-center font-weight-bolder opacity-7">
                    phone number
                  </th>
                  <th className="text-uppercase text-secondary text-xxs text-center font-weight-bolder opacity-7">
                    Visits
                  </th>
                </tr>
              </thead>
              <tbody>
                {Patients.map((a) => (
                  <tr key={a.Id}>
                    <td className="text-xs font-weight-bold mb-0 text-center">
                      {increment++}
                    </td>
                    <td className="text-xs font-weight-bold mb-0 text-center">
                     {a.Id}
                    </td>
                    <td className="text-xs font-weight-bold mb-0 text-center">
                      {a.FirstName +" "+a.LastName}
                    </td>
                    <td className="text-xs font-weight-bold mb-0 text-center">
                      {a.PhoneNumber}
                    </td>
                    <td className="text-xs font-weight-bold mb-0 text-center">
                      <button className="btn btn-info btn-sm m-0"><i className="fa fa-calendar"></i></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
   </>
  )
}

export default PatientList