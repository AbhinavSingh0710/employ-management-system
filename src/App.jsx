import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/localStorage";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const authData = useContext(AuthContext);

  // useEffect(() => {
  //   if (authData) {
  //     const loggedInUser = localStorage.getItem("loggedInUser");
  //     if(loggedInUser){
  //       setUser(loggedInUser.role)
  //     }
  //   }
  // }, [authData]);

  const handleLogin = (email, password) => {
    if (email == "a@a.com" && password == "123") {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else if (authData) {
      const employee = authData.employees.find(
        (e) => email == e.email && e.password == password
      );
      if (employee) {
        setUser("employee");
        setLoggedInUserData(employee);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee" })
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
        <AdminDashboard />
       : 
        <EmployeeDashboard data={loggedInUserData} />
      }
    </div>
  );
};

export default App;

// import React, { useContext, useEffect, useState } from "react";
// import Login from "./components/Auth/Login";
// import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
// import AdminDashboard from "./components/Dashboard/AdminDashboard";
// import { getLocalStorage, setLocalStorage } from "./utils/localStorage";
// import { AuthContext } from "./context/AuthProvider";

// const App = () => {
//   const [user, setUser] = useState(null);
//   const [loggedInUserData, setLoggedInUserData] = useState(null);
//   const [loading, setLoading] = useState(true); // New state for loading
//   const authData = useContext(AuthContext);

//   const handleLogin = (email, password) => {
//     if (email === "a@a.com" && password === "123") {
//       setUser("admin");
//       localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
//       setLoading(false);
//     } else if (authData && authData.employees) {
//       const employee = authData.employees.find(
//         (e) => email === e.email && e.password === password
//       );
//       if (employee) {
//         setUser("employee");
//         setLoggedInUserData(employee);
//         localStorage.setItem(
//           "loggedInUser",
//           JSON.stringify({ role: "employee", email: employee.email })
//         );
//         setLoading(false);
//       } else {
//         alert("Invalid credentials");
//         setLoading(false);
//       }
//     }
//   };

//   useEffect(() => {
//     const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
//     if (loggedInUser) {
//       setUser(loggedInUser.role);
//       if (loggedInUser.role === "employee" && authData && authData.employees) {
//         const employee = authData.employees.find(
//           (e) => e.email === loggedInUser.email
//         );
//         setLoggedInUserData(employee);
//       }
//     }
//     setLoading(false); // Stop loading after initialization
//   }, [authData]);

//   if (loading) return <div>Loading...</div>; // Display loading while waiting for updates

//   return (
//     <div>
//       {!user ? (
//         <Login handleLogin={handleLogin} />
//       ) : user === "admin" ? (
//         <AdminDashboard />
//       ) : (
//         user === "employee" &&
//         loggedInUserData && <EmployeeDashboard data={loggedInUserData} />
//       )}
//     </div>
//   );
// };

// export default App;
