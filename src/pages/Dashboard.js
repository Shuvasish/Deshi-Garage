import React, { useContext } from "react";
import { UserContext } from "../App";

function Dashboard(props) {
  const { user, setUser } = useContext(UserContext);

  return <div>dashboard</div>;
}

export default Dashboard;
