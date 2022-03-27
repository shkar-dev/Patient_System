import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NewPatient from './../Pages/NewPatient';
import Dashboard from '../Pages/Dashboard';
import Footer from '../Pages/Footer';
import Drugs from './../Pages/Drugs';
import Login from './../Pages/Login';
import Profile from './../Pages/Profile';
import Register from './../Pages/Register';
import Search from './../Pages/Search';
import TodaysPatient from '../Pages/TodaysPatient';
import PatientList from '../Pages/PatientList';
import Details from '../Pages/Details';
 

function Main() {
  return (
    <main class="main-content border-radius-lg " >
        <Routes>
            <Route path="/" element={<Dashboard/>} />
            <Route path="/NewPatient" element={<NewPatient/>  }/>
            <Route path="/Drugs" element={<Drugs/>} />
            <Route path="/Login" element={<Login/>} />
            <Route path="/Register" element={<Register/>} />
            <Route path="/Profile" element={<Profile/>} />
            <Route path="/Search" element={<Search/>} />
            <Route path="/TodaysPatient" element={<TodaysPatient/>} />   
            <Route path="/PatientList" element={<PatientList/>} />   
            <Route path='/Details/:id' element={<Details/>} />
        </Routes>
        <Footer/>
    </main> 
  )
}

export default Main;