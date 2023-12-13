import { NavLink, Outlet } from "react-router-dom";
// import { FaBook, FaCartPlus, FaEnvelope, FaList, FaUsers, FaUtensils } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa6";
// import { FaCalendarAlt, FaHome, FaSearch } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
// import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";
import { AiFillProfile } from "react-icons/ai";
import { MdPostAdd } from "react-icons/md";
import { BsFilePostFill } from "react-icons/bs";
import { TfiAnnouncement } from "react-icons/tfi";
import { FiActivity } from "react-icons/fi";
// import useAnnouncements from "../hooks/useAnnouncements";
import { Helmet } from "react-helmet-async";
// import useAuth from "../hooks/useAuth";
import { useEffect, useState } from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";

const Dashboard = () => {
  const [ announcements, setAnnouncements ] = useState([]);
  // console.log(announcements.length);
  const axiosSecure = useAxiosSecure();

  useEffect( () => {
    axiosSecure.get('/announcements')
    .then(res => {
      // console.log(res.data);
      setAnnouncements(res.data)
    })
  }, [axiosSecure]);

  //TODO: get isAdmin value from database
  const [isAdmin] = useAdmin();
    // const isAdmin = true
  // const { user } = useAuth();
  // console.log(user);

  return (
    <div className="flex flex-col md:flex-row">
      <Helmet>
        <title>
          dashboard
        </title>
      </Helmet>
      {/* dashboard sidebar */}
      <div className="w-full md:w-64 min-h-screen bg-orange-400">
        <ul className="menu p-4">
          { isAdmin ?  <>
          <li>
            <NavLink to="/dashboard/adminProfile">
              <AiFillProfile />Admin Profile
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/manageUsers">
            <FaUsers />Manage Users
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/reportedActivities">
              <FiActivity />Report Activities
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/makeAnnouncement">
              <TfiAnnouncement />Make Announcement
              <div className="badge badge-primary">+{announcements.length}</div>
            </NavLink>
          </li>
          </> : <>
            <li>
            <NavLink to="/dashboard/myProfile">
              <AiFillProfile />My Profile
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/addPost">
              <BsFilePostFill />Add Post
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/myPost">
              <MdPostAdd />My Post
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/payment">
              <MdPostAdd />Payment
            </NavLink>
          </li>

          </> }
          
          {/* shared nav links */}
          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <FaHome></FaHome>
              Home
            </NavLink>
          </li>
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
