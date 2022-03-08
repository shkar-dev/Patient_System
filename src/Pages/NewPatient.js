import React from 'react'
import './style/NewPatient.css';
export default function NewPatient() {
  return (
    <div class="formContainer">
        <div class="card ">
          <div class="card-header bg-white border-bottom  ">
              <h2>New Patient Form</h2>
          </div>
        <form>
          <div class="card-body">
            <div class="row rowFormInput">
              {/* row 1  */}
                <div class="col-md-4 inputContainer ">
                  <label >Firstname</label>
                  <div class="form-group">
                      <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Firstname"/>
                  </div>
                </div>
                <div class="col-md-4 px-2 ">
                  <label >Lastname</label>
                  <div class="form-group">
                      <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Lastname"/>
                  </div>
                </div>
                <div class="col-md-4 px-2 ">
                  <label >Spouse Name</label>
                  <div class="form-group">
                      <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Spousename"/>
                  </div>
                </div>
                {/* row 2 */}
                <div class="col-md-4 px-2 ">
                  <label >Weight</label>
                  <div class="form-group">
                      <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Weight"/>
                  </div>
                </div>
                <div class="col-md-4 px-2 ">
                  <label >Height</label>
                  <div class="form-group">
                      <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Height"/>
                  </div>
                </div>
                <div class="col-md-4 px-2 ">
                  <label >Occupation</label>
                  <div class="form-group">
                      <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Occupation"/>
                  </div>
                </div>
                {/* row  3 */}
                <div class="col-md-4 px-2 ">
                  <label >Spouse Name</label>
                  <div class="form-group">
                      <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Spousename"/>
                  </div>
                </div>
                <div class="col-md-4 px-2 ">
                  <label >Gender </label>
                  <div class="form-group">
                      <select class="form-control">
                        <option disabled selected>None</option>
                        <option value="male">Male</option>
                        <option value="Female">Female</option>
                        <option value="others">Others</option>
                      </select>
                  </div>
                </div>
                <div class="col-md-4 px-2 ">
                  <label >Status </label>
                  <div class="form-group">
                      <select class="form-control">
                        <option disabled selected>None</option>
                        <option value="male">Married</option>
                        <option value="Female">Single</option>
                      </select>
                  </div>
                </div>

                {/* row 4 */}

                <div class="col-md-4 px-2 ">
                  <label >Blood Group </label>
                  <div class="form-group">
                      <select class="form-control">
                        <option disabled selected>None</option>
                        <option value="AB+">AB+</option>
                        <option value="AB-">AB-</option>
                        <option value="O+">O+</option>
                        <option value="O-">O-</option>
                        <option value="A+">A+</option>
                        <option value="A-">A-</option>
                        <option value="B+">B+</option>
                        <option value="B-">B-</option>
                      </select>
                  </div>
                </div>
                <div class="col-md-4 px-2 ">
                  <label >Age</label>
                  <div class="form-group">
                      <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Age"/>
                  </div>
                </div>
                <div class="col-md-4 px-2 ">
                  <label >Phone Number</label>
                  <div class="form-group">
                      <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Phone Number"/>
                  </div>
                </div>
                {/* row 5 */}
                <div class="col-md-4 px-2 ">
                  <label >Address </label>
                  <div class="form-group">
                      <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Address"/>
                  </div>
                </div>

                <div class="col-md-4 px-2 ">
                  <label >Old Patinet CVs</label>
                  <div class="form-group">
                      <input type="file" class="form-control" />
                  </div>
                </div>
                <div class="col-md-4 px-2 ">
                  <label >New Patinet CVs(Test/Result)</label>
                  <div class="form-group">
                      <input type="file" class="form-control" />
                  </div>
                </div>
            </div>        
          </div>
          <div class="card-footer">
            <button class="btn btn-dark mx-2" type="submit">Save <i class="fa fa-check mx-2"></i></button> 
            <button class="btn " type="reset">Clear All <i class="fa fa-eraser mx-2"></i></button>

          </div>
        </form>
    </div>
    </div>
    
    
  )
}

  