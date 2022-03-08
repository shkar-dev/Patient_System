import React from 'react';
import './style/Search.css';

function Search() {
  return (
    <div class="formContainer">
        <div class="card ">
          <div class="card-header bg-white border-bottom  ">
              <h2>Search Patient Form</h2>
          </div>
        <form>
          <div class="card-body">
            <div class="row rowFormInput">
              
                <div class="col-md-6 inputContainer ">
                  <label >Firstname</label>
                  <div class="form-group">
                      <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Firstname"/>
                  </div>
                </div>
                <div class="col-md-6 px-2 ">
                  <label >Lastname</label>
                  <div class="form-group">
                      <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Lastname"/>
                  </div>
                </div>
                <div class="col-md-6 px-2 ">
                  <label >Spouse Name</label>
                  <div class="form-group">
                      <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Spousename"/>
                  </div>
                </div>
 
                 
                <div class="col-md-6 px-2 ">
                  <label >Phone Number</label>
                  <div class="form-group">
                      <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Phone Number"/>
                  </div>
                </div>
                <div class="col-md-4 px-2 ">
                  <label >You want to Search by Date ? </label>
                  <div class="form-check form-switch">
                  <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" checked=""/>
                  <label class="form-check-label" for="flexSwitchCheckDefault">Checked switch</label>
                </div>
                </div>

                <div class="col-md-4 px-2 ">
                  <label >From </label>
                  <div class="form-group">
                      <input type="date" class="form-control" id="exampleFormControlInput1" placeholder="Phone Number" disabled />
                  </div>
                </div>
                <div class="col-md-4 px-2 ">
                  <label >To</label>
                  <div class="form-group">
                      <input type="date" class="form-control" id="exampleFormControlInput1" placeholder="Phone Number" disabled/>
                  </div>
                </div>   
            </div>        
          </div>
          <div class="card-footer">
            <button class="btn btn-dark mx-2" type="submit">Search <i class="fa fa-search mx-2"></i></button> 
            <button class="btn " type="reset">Clear All <i class="fa fa-eraser mx-2"></i></button>
          </div>
        </form>
    </div>
    </div>
  )
}
export default Search