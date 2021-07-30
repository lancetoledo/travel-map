
import Signup from "./components/Signup"
import { Container } from 'react-bootstrap'
// import firebase from "./firebase";
import { AuthProvider } from "./contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Dashboard from "./components/Dashboard";
import Login from "./components/Login"
import PrivateRoute from "./components/PrivateRoute";
import ForgotPassword from "./components/ForgotPassword.jsx"


// firebase.firestore().collection("times").add({
//   title: "Rubix Cube",
//   time_seconds: 45
// })
export default function Home() {

  return (
    <div className="app">


      
        <Container className="d-flex align-items-center justify-content-center" style = {{minHeight : "100vh"}}>
          <div className ="w-100" style = {{minWidth: "400px"}}>
            <Router>
              <AuthProvider>
                <Switch>
                  <PrivateRoute exact path = "/" component = {Dashboard}/>
                  <Route path ="/signup" component = {Signup} />
                  <Route path = "/login" component = {Login}/>
                  <Route path="/forgot-password" component = {ForgotPassword}/>
                </Switch>
              </AuthProvider>
            </Router>
          </div>   
        </Container>
      

      
    </div>
  );
}