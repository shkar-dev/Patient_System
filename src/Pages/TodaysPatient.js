import React from 'react';
import './style/TodaysPatient.css';
function TodaysPatient() {
  return (
    <div class="formContainer" >
      <div class="card ">
        <div class="card-header bg-white border-bottom  ">
            <h2>Today's Patient List</h2>
        </div>
        <div class="card-body"> 
          <div class="table-responsive">
            <table class="table align-items-center mb-0">
              <thead>
                <tr>
                  <th class="text-uppercase text-secondary text-center text-xxs font-weight-bolder opacity-7">#</th>
                  <th class="text-uppercase text-secondary text-xxs text-center font-weight-bolder opacity-7">Code</th>
                  <th class="text-uppercase text-secondary text-xxs text-center font-weight-bolder opacity-7">Fullname</th>
                  <th class="text-uppercase text-secondary text-xxs text-center font-weight-bolder opacity-7">phone number</th>
                  {/* <th class="text-uppercase text-secondary text-xxs text-center  font-weight-bolder opacity-7">Paid</th> */}
                  <th class="text-uppercase text-secondary text-xxs text-center font-weight-bolder opacity-7">Visits</th>
                  {/* <th class="text-uppercase text-secondary text-xxs text-center font-weight-bolder opacity-7">(tests-results)CVs</th> */}
                </tr>
              </thead>
              <tbody >
                <tr>
                  <td class="text-xs font-weight-bold mb-0 text-center">1</td>
                  <td class="text-xs font-weight-bold mb-0 text-center">1211</td>
                  <td class="text-xs font-weight-bold mb-0 text-center">shkar shahab</td>
                  <td  class="text-xs font-weight-bold mb-0 text-center">07511187902</td>
                  {/* <td  class="text-xs font-weight-bold mb-0 text-center"><span class="badge" style={{backgroundColor:" #5cb85c"}} >Paid <i class="fa fa-check-circle mx-2"></i></span></td> */}
                  <td  class="text-xs font-weight-bold mb-0 text-center"><button class="btn btn-info btn-sm mb-0"><i class="fa fa-calendar"></i></button></td>
                </tr>
                <tr>
                  <td class="text-xs font-weight-bold mb-0 text-center">1</td>
                  <td class="text-xs font-weight-bold mb-0 text-center">1211</td>
                  <td class="text-xs font-weight-bold mb-0 text-center">shkar shahab</td>
                  <td  class="text-xs font-weight-bold mb-0 text-center">07511187902</td>
                  {/* <td  class="text-xs font-weight-bold mb-0 text-center"><span class="badge" style={{backgroundColor:" #5cb85c"}} >Paid <i class="fa fa-check-circle mx-2"></i></span></td> */}
                  <td  class="text-xs font-weight-bold mb-0 text-center"><button class="btn btn-info btn-sm mb-0"><i class="fa fa-calendar"></i></button></td>
                </tr>
                <tr>
                  <td class="text-xs font-weight-bold mb-0 text-center">1</td>
                  <td class="text-xs font-weight-bold mb-0 text-center">1211</td>
                  <td class="text-xs font-weight-bold mb-0 text-center">shkar shahab</td>
                  <td  class="text-xs font-weight-bold mb-0 text-center">07511187902</td>
                  {/* <td  class="text-xs font-weight-bold mb-0 text-center"><span class="badge" style={{backgroundColor:" #5cb85c"}} >Paid <i class="fa fa-check-circle mx-2"></i></span></td> */}
                  <td  class="text-xs font-weight-bold mb-0 text-center"><button class="btn btn-info btn-sm mb-0"><i class="fa fa-calendar"></i></button></td>
                </tr>
                <tr>
                  <td class="text-xs font-weight-bold mb-0 text-center">1</td>
                  <td class="text-xs font-weight-bold mb-0 text-center">1211</td>
                  <td class="text-xs font-weight-bold mb-0 text-center">shkar shahab</td>
                  <td  class="text-xs font-weight-bold mb-0 text-center">07511187902</td>
                  {/* <td  class="text-xs font-weight-bold mb-0 text-center"><span class="badge" style={{backgroundColor:" #5cb85c"}} >Paid <i class="fa fa-check-circle mx-2"></i></span></td> */}
                  <td  class="text-xs font-weight-bold mb-0 text-center"><button class="btn btn-info btn-sm mb-0"><i class="fa fa-calendar"></i></button></td>
                </tr>
                <tr>
                  <td class="text-xs font-weight-bold mb-0 text-center">1</td>
                  <td class="text-xs font-weight-bold mb-0 text-center">1211</td>
                  <td class="text-xs font-weight-bold mb-0 text-center">shkar shahab</td>
                  <td  class="text-xs font-weight-bold mb-0 text-center">07511187902</td>
                  {/* <td  class="text-xs font-weight-bold mb-0 text-center"><span class="badge" style={{backgroundColor:" #5cb85c"}} >Paid <i class="fa fa-check-circle mx-2"></i></span></td> */}
                  <td  class="text-xs font-weight-bold mb-0 text-center"><button class="btn btn-info btn-sm mb-0"><i class="fa fa-calendar"></i></button></td>
                </tr>
                <tr>
                  <td class="text-xs font-weight-bold mb-0 text-center">1</td>
                  <td class="text-xs font-weight-bold mb-0 text-center">1211</td>
                  <td class="text-xs font-weight-bold mb-0 text-center">shkar shahab</td>
                  <td  class="text-xs font-weight-bold mb-0 text-center">07511187902</td>
                  {/* <td  class="text-xs font-weight-bold mb-0 text-center"><span class="badge" style={{backgroundColor:" #5cb85c"}} >Paid <i class="fa fa-check-circle mx-2"></i></span></td> */}
                  <td  class="text-xs font-weight-bold mb-0 text-center"><button class="btn btn-info btn-sm mb-0"><i class="fa fa-calendar"></i></button></td>
                </tr>
                <tr>
                  <td class="text-xs font-weight-bold mb-0 text-center">1</td>
                  <td class="text-xs font-weight-bold mb-0 text-center">1211</td>
                  <td class="text-xs font-weight-bold mb-0 text-center">shkar shahab</td>
                  <td  class="text-xs font-weight-bold mb-0 text-center">07511187902</td>
                  {/* <td  class="text-xs font-weight-bold mb-0 text-center"><span class="badge" style={{backgroundColor:" #5cb85c"}} >Paid <i class="fa fa-check-circle mx-2"></i></span></td> */}
                  <td  class="text-xs font-weight-bold mb-0 text-center"><button class="btn btn-info btn-sm mb-0"><i class="fa fa-calendar"></i></button></td>
                </tr>
                <tr>
                  <td class="text-xs font-weight-bold mb-0 text-center">1</td>
                  <td class="text-xs font-weight-bold mb-0 text-center">1211</td>
                  <td class="text-xs font-weight-bold mb-0 text-center">shkar shahab</td>
                  <td  class="text-xs font-weight-bold mb-0 text-center">07511187902</td>
                  {/* <td  class="text-xs font-weight-bold mb-0 text-center"><span class="badge" style={{backgroundColor:" #5cb85c"}} >Paid <i class="fa fa-check-circle mx-2"></i></span></td> */}
                  <td  class="text-xs font-weight-bold mb-0 text-center"><button class="btn btn-info btn-sm mb-0"><i class="fa fa-calendar"></i></button></td>
                </tr>
                <tr>
                  <td class="text-xs font-weight-bold mb-0 text-center">1</td>
                  <td class="text-xs font-weight-bold mb-0 text-center">1211</td>
                  <td class="text-xs font-weight-bold mb-0 text-center">shkar shahab</td>
                  <td  class="text-xs font-weight-bold mb-0 text-center">07511187902</td>
                  {/* <td  class="text-xs font-weight-bold mb-0 text-center"><span class="badge" style={{backgroundColor:" #5cb85c"}} >Paid <i class="fa fa-check-circle mx-2"></i></span></td> */}
                  <td  class="text-xs font-weight-bold mb-0 text-center"><button class="btn btn-info btn-sm mb-0"><i class="fa fa-calendar"></i></button></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div> 
      
  )
}

export default TodaysPatient;