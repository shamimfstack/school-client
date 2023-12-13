import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";


export default function MainLayout() {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
}
