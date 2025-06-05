import './App.css'
import {  Route } from "wouter";
import MainPage from "./pages/MainPage.tsx";
import Login from "./pages/Login.tsx";
import Register from "./pages/Register.tsx";

function App() {
    if(sessionStorage.getItem('logged') != null){
        console.log(sessionStorage.getItem('logged'))
    }
    else {
        sessionStorage.setItem('logged', 'false')
    }
  return (
    <>
        <MainPage/>
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register}/>
    </>
  )
}

export default App
