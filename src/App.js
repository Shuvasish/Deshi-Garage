import "./App.css";
import GlobalStyle from "./components/GlobalStyle";
import { createContext, useState } from "react";

// routing
import { Switch, Route, useLocation } from "react-router-dom";

//Animation
import { AnimatePresence } from "framer-motion";

//pages
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import PrivateRoute from "./components/Login/PrivateRoute";

// CONTEXT SETUP
export const UserContext = createContext();

function App() {
  const [user, setUser] = useState({
    displayName: "",
    email: "",
    photoURL: "",
  });
  const location = useLocation();
  return (
    <div className="App">
      <UserContext.Provider value={{ user, setUser }}>
        <GlobalStyle></GlobalStyle>

        <Navbar></Navbar>
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
          </Switch>
        </AnimatePresence>
      </UserContext.Provider>
    </div>
  );
}

export default App;
