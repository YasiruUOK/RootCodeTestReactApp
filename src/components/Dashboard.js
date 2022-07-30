import { Outlet, Link } from "react-router-dom";
import React from 'react'

const Dashboard = () => {
    return (
        <>
        <nav>
          <ul>
            <li>
              <Link to="/">Login</Link>
            </li>
            {/* <li>
              <Link to="/Login">Blogs</Link>
            </li> */}
            <li>
              <Link to="/Reg">Registration</Link>
            </li>
          </ul>
        </nav>
  
        <Outlet />
      </>
    )
  };
  
export default Dashboard;