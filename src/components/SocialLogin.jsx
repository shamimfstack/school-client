import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";


const SocialLogin = () => {
    const {signInWithGoogle} = useAuth();

    const location = useLocation();
    const navigate = useNavigate();

    let from = location?.state?.from?.pathname || "/";


    const handleGoogleLogin = () => {
        signInWithGoogle()
        .then(() => {
          navigate(from, { replace: true });
        })
        .catch((err) => {
          console.log(err);
        })
        
      }

    return (
        <div className="form-control mt-6">
            <input
                  type="submit"
                  onClick={handleGoogleLogin}
                  className="btn btn-info"
                  value="Login with Google"
                />
        </div>
    );
};

export default SocialLogin;