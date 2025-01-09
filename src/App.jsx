import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/localStorage";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const [authData] = useContext(AuthContext);

  // const handleLogout = () => {
  //   setUser(null);
  //   setLoggedInUserData(null);
  //   localStorage.removeItem("loggedInUser");

    
  // };

 useEffect(()=>{
  const loggedInUser = localStorage.getItem('loggedInUser')

  if(loggedInUser){
    const userData = JSON.parse(loggedInUser)
    setUser(userData.role)
    setLoggedInUserData(userData.data)
  }


  
 },[])

  const handleLogin = (email, password) => {
    if (email == "a@a.com" && password == "123") {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else if (authData) {
      const employee = authData.find(
        (e) => email == e.email && e.password == password
      );
      if (employee) {
        setUser("employee");
        setLoggedInUserData(employee);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee" , data: employee})
        );
      }
    } else {
      alert("Invalid credentials");
    }
  };


  useEffect(() => {
    // setLocalStorage()
    getLocalStorage();
  });

  return (
    <div>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user == "admin" ?   
        <AdminDashboard data = {loggedInUserData} changeUser = {setUser} />
       : 
        <EmployeeDashboard data ={loggedInUserData} changeUser = {setUser} />
      }
    </div>
  );
};

export default App;


