import { NavLink, Outlet } from "react-router-dom";

import useAdmin from "../hooks/useAdmin";
import { Helmet } from "react-helmet-async";

const Dashboard = () => {

 

  //TODO: get isAdmin value from database
  const [isAdmin] = useAdmin();
    // const isAdmin = true
  // const { user } = useAuth();
  // console.log(user);

  return (
    <div className="flex flex-col md:flex-row">
      <Helmet>
        <title>
          dashboard updated
        </title>
      </Helmet>
      {/* dashboard sidebar */}
      <div className="w-full md:w-64 min-h-screen bg-orange-400">
        <ul className="menu p-4">
          { isAdmin ? <>
            <li>
              <NavLink>Admin Profile</NavLink>
            </li>
          </> : <>
            <li>
              <NavLink>User Profile</NavLink>
            </li>
          </>}
          
        </ul>
      </div>
      {/* dashboard content */}
      <div className="flex-1 p-8 w-full md:flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
