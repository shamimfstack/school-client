

import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";
import PropTypes from 'prop-types'



const AdminRoute = ({children}) => {
    const {user, loading} = useAuth();
    const [ isAdmin, isAdminLoading ] = useAdmin();
    const location = useLocation();
  console.log(location);

  if (loading || isAdminLoading) {
    return <progress className="progress w-56"></progress>;
  }

  if (user && isAdmin) {
    return children;
  }
    return (
        <Navigate state={location.pathname} to="/login" replace></Navigate>
    );
};

AdminRoute.propTypes = {
    children: PropTypes.object
}

export default AdminRoute;
