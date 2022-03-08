import React from 'react';
import './style/Drugs.css';

function Drugs() {
  return (
    <div class="formContainer" >
      <div class="card ">
        <div class="card-header bg-white border-bottom  ">
            <h2>Drugs</h2>
        </div>
        <form action="">
          <div class="card-body">
            
              <div class="row rowFormInput">
                {/* row 1  */}
                <div class="col-md-4 inputContainer ">
                  <label >Drug Name</label>
                  <div class="form-group">
                      <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Drug Name"/>
                  </div>
                </div>
                <div class="col-md-4 px-2 ">
                  <label >Company Name</label>
                  <div class="form-group">
                      <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Company Name"/>
                  </div>
                </div>
                <div class="col-md-4 px-2  pt-4">
                  
                  <div class="form-group pt-1">
                  <button class="btn btn-dark mx-2"> Save <i class="fa fa-check mx-2"></i></button>
                  </div>
                </div>
              </div> 
          </div>
        </form>
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

export default Drugs;