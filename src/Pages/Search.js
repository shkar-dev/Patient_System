import React from 'react';
import './style/Search.css';

function Search() {
  return (
    <div className="formContainer">
        <div className="card ">
          <div className="card-header bg-white border-bottom  ">
              <h2>Search Patient Form</h2>
          </div>
        <form>
          <div className="card-body">
            <div className="row rowFormInput">
              
                <div className="col-md-6 inputContainer ">
                  <label >Firstname</label>
                  <div className="form-group">
                      <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Firstname"/>
                  </div>
                </div>
                <div className="col-md-6 px-2 ">
                  <label >Lastname</label>
                  <div className="form-group">
                      <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Lastname"/>
                  </div>
                </div>
                <div className="col-md-6 px-2 ">
                  <label >Spouse Name</label>
                  <div className="form-group">
                      <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Spousename"/>
                  </div>
                </div>
 
                 
                <div className="col-md-6 px-2 ">
                  <label >Phone Number</label>
                  <div className="form-group">
                      <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Phone Number"/>
                  </div>
                </div>
                <div className="col-md-4 px-2 ">
                  <label >You want to Search by Date ? </label>
                  <div className="form-check form-switch">
                  <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" checked=""/>
                  <label className="form-check-label" for="flexSwitchCheckDefault">Checked switch</label>
                </div>
                </div>

                <div className="col-md-4 px-2 ">
                  <label >From </label>
                  <div className="form-group">
                      <input type="date" className="form-control" id="exampleFormControlInput1" placeholder="Phone Number" disabled />
                  </div>
                </div>
                <div className="col-md-4 px-2 ">
                  <label >To</label>
                  <div className="form-group">
                      <input type="date" className="form-control" id="exampleFormControlInput1" placeholder="Phone Number" disabled/>
                  </div>
                </div>   
            </div>        
          </div>
          <div className="card-footer">
            <button className="btn btn-dark mx-2" type="submit">Search <i className="fa fa-search mx-2"></i></button> 
            <button className="btn " type="reset">Clear All <i className="fa fa-eraser mx-2"></i></button>
          </div>
        </form>
    </div>
    </div>
  )
}
export default Search