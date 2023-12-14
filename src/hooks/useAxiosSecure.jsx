import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const axiosSecure = axios.create({
  baseURL: "https://school-management-server-zeta.vercel.app",
});

const useAxiosSecure = () => {
  const navigate = useNavigate();
  const { logOutUser } = useAuth();

  axiosSecure.interceptors.request.use(
    function (config) {
      // request interceptor to add authorization header for every secure call to the api
      const token = localStorage.getItem("access-token");
      console.log('request stopped by interceptor', token);
      config.headers.authorization = `Bearer ${token}`;
      console.log(config.headers.authorization);
      return config;
    },
    function (error) {
      console.log(error);
      return Promise.reject(error);
    }
  );

  // intercepts 401 and 403 status
  axiosSecure.interceptors.response.use(
    function (response) {
      return response;
    },
    async (err) => {
      const status = err.response.status;
      console.log('status error in the interceptors');
      // for 401 or 403 logout the user and move the user to the login page
      if (status === 401 || status === 403) {
        await logOutUser();
        navigate("/login");
      }
      return Promise.reject(err);
    }
  );

  return axiosSecure;
};

export default useAxiosSecure;
