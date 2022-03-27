import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
function PatientList() {
    const [Patients , setPatient] = useState([]);
    var increment =1;
    useEffect(()=>{
        axios.get("http://localhost:85/patient_system/project/patient_system_backend/FetchPatients.php").then((res)=>{
            setPatient(res.data);
        })
    },[])
  return (
   <>
    <div className="formContainer">
      <div className="card ">
        <div className="card-header bg-white border-bottom  ">
          <h2>Patient List</h2>
        </div>
        <div className="card-body">
          {Patients.length != 0  ?  (
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
                     Details
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
                       <Link to={'/Details/'+a.Id} >
                       <button className="btn btn-info btn-sm m-0"><i className="fa fa-file"></i></button>
                       </Link>
                      
                     </td>
                   </tr>
                 ))}
               </tbody>
             </table>
           </div>
          ) : (
            <div class="alert alert-secondary alert-dismissible fade show" role="alert">
                <span class="alert-icon mx-2"><i class="fa fa-warning "></i></span>
                <span class="alert-text"><strong>Alert </strong> There is no patient found !</span>
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
          ) }
        </div>
      </div>
    </div>
   </>
  )
}

export default PatientList