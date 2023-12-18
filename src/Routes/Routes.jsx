import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Dashboard from "../Layout/Dashboard";
import About from "../Pages/About/About/About";
import Contact from "../Pages/Contact/Contact/Contact";
import Register from "../Pages/Register/Register";
import AdminProfile from "../Pages/Dashboard/AdminProfile/AdminProfile";
import ManageTeachers from "../Pages/Dashboard/ManageTeachers/ManageTeachers";
import ManageStudents from "../Pages/Dashboard/ManageStudents/ManageStudents";
import CreateAnnouncements from "../Pages/Dashboard/CreateAnnouncements/CreateAnnouncements";
import ClassSchedule from "../Pages/Dashboard/ClassSchedule/ClassSchedule";



const Routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'about',
                element: <About></About>
            },
            {
                path: 'contact',
                element: <Contact></Contact>
            }
        ]
    },
    {
        path: 'login',
        element: <Login></Login>
    },
    {
        path: 'register',
        element: <Register></Register>
    },
    {
        path: 'dashboard',
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: "adminProfile",
                element: <AdminProfile></AdminProfile>
            },
            {
                path: "manageTeachers",
                element: <ManageTeachers></ManageTeachers>
            },
            {
                path: "manageStudents",
                element: <ManageStudents></ManageStudents>
            },
            {
                path: "createAnnouncements",
                element: <CreateAnnouncements></CreateAnnouncements>
            },
            {
                path: "classSchedule",
                element: <ClassSchedule></ClassSchedule>
            }
        ]
    }
])

export default Routes;
