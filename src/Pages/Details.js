import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
function Details() {
    let {id} = useParams();
    // const [patientDetails ,setPatieintDetails ] = useState([]);
    
  return (
    <>
    <div className="formContainer">
        {/* visits */}
      <div className="card ">
        <div className="card-header bg-white border-bottom  ">
          <h3>Visits </h3>
        </div>
        <div className="card-body">
          {/* {Patients.length != 0  ?  ( */}
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
                 {/* {Patients.map((a) => (
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
                       <button className="btn btn-info btn-sm m-0"><i className="fa fa-file"></i></button>
                     </td>
                   </tr>
                 ))} */}
               </tbody>
             </table>
           </div>
        {/* //   ) : (
        //     <div class="alert alert-secondary alert-dismissible fade show" role="alert">
        //         <span class="alert-icon mx-2"><i class="fa fa-warning "></i></span>
        //         <span class="alert-text"><strong>Alert </strong> There is no patient found !</span>
        //         <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">
        //             <span aria-hidden="true">&times;</span>
        //         </button>
        //     </div>
        //   ) } */}
        </div>
      </div>
      {/* history */}
      <div className="card my-5">
          <div className="card-header">
            <h3>History</h3>
          </div>
          <div className="card-body">
            <div class="form-group">
                <label for="exampleFormControlTextarea1">History</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" placeholder='History' rows="3"></textarea>
            </div>
            <div class="form-group">
                <label for="exampleFormControlTextarea1">Plan</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" placeholder='Plan' rows="3"></textarea>
            </div>
            <div class="form-group">
                <label for="exampleFormControlTextarea1">Diagnoses</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" placeholder='Diagnoses' rows="3"></textarea>
            </div>
            <div class="form-group">
                <label for="exampleFormControlTextarea1">Allergy</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" placeholder='Allergy' rows="3"></textarea>
            </div>
          </div>
      </div>

      {/* treatment */}
      <div className="card my-5">
          <div className="card-header">
              <h3>Treatment</h3>
          </div>
          <div className="card-body">
              <form action=""> 
                <div className="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/> 
                        </div>
                    </div>
                    <div className="col-md-4">
                        <button class="btn btn-dark mx-2">Save <i class="fa fa-check mx-2"></i> </button>
                    </div>
                </div>
              </form>
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
                        Details
                    </th>
                    </tr>
                </thead>
                <tbody style={{textAlign : 'center'}}>
                    <tr>
                        <td>1</td>
                        <td>121</td>
                        <td>aaaa</td>
                        <td><button className='btn btn-info btn-sm'> <i className='fa fa-plus mx-2' ></i> </button></td>
                    </tr>
                </tbody>
                </table>
            </div>   
          </div>
      </div>
      {/* report  */}

       <div className="card">
           <div className="card-header">
               <h3>Report</h3>
           </div>
           <div className="card-body">
                <form action="">
                   <div className="row">
                       <div className="col-md-6">
                           <div className="form-group">
                               <input className='form-control ' placeholder='Description' />
                           </div>
                       </div>
                       <div className="col-md-4">
                           <button className='btn btn-dark'> Save <i className='fa fa-check mx-2'></i></button>
                       </div>
                    </div>
                </form>
           </div>
       </div>
    </div>
    </>
  )
}

export default Details