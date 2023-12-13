
import { Helmet } from "react-helmet-async";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import SocialLogin from "../../components/SocialLogin";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { signInUser } = useAuth();
    // const location = useLocation();
    const navigate = useNavigate();

    // let from = location?.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    // reset,
    // watch,
    // formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // console.log(data);
    signInUser(data.email, data.password)
    .then(res => {
        console.log(res);
        // navigate(from, { replace: true });
        navigate("/");
    })
    .catch(err => {
        console.log(err);
    })

  };

  // const handleGoogleLogin = () => {
  //   signInWithGoogle()
  //   .then(() => {
  //     navigate(from, { replace: true });
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   })
    
  // }

  return (
    <div>
      <Helmet>
        <title>online-forum | login</title>
      </Helmet>
      <div
        className="hero min-h-[calc(100vh-68px)]"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/Bf9578s/network-3139201-1280.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-90"></div>
        <div className="hero-content flex-col lg:flex-row-reverse gap-8">
          <div className="text-center w-full md:w-1/2 lg:text-left">
            <img src="https://i.ibb.co/MZvKB2B/3426526-removebg-preview.png" alt="" />
          </div>
          <div className="card shrink-0 w-full md:w-1/2 border-2 shadow-2xl">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <h2 className="text-3xl text-white font-bold text-center uppercase">
                Login Here
              </h2>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  {...register("email", { required: true })}
                  className="input input-bordered border-white focus:border-white w-full text-white bg-transparent focus:bg-transparent"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Password</span>
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="password"
                    {...register("password", { required: true })}
                    className="input input-bordered border-white focus:border-white w-full text-white bg-transparent focus:bg-transparent"
                  />
                  <span
                    className="absolute top-4 right-5"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <FaRegEye className="text-white" />
                    ) : (
                      <FaRegEyeSlash className="text-white" />
                    )}
                  </span>
                </div>
              </div>
              {/* <div className="form-control">
                <label className="label w-full">
                  <LoadCanvasTemplate />
                </label>
                <input
                  type="text"
                  ref={captchaRef}
                  // onChange={handleValidateCaptcha}
                  name="captcha"
                  placeholder="type the captcha"
                  className="input input-bordered border-white w-full text-white bg-transparent focus:bg-transparent"
                />
                <button
                  onClick={handleValidateCaptcha}
                  className="btn btn-xs btn-info mt-2"
                >
                  Validate
                </button>
              </div> */}
              <div className="form-control mt-6">
                <input
                  type="submit"
                //   disabled={disabled}
                  className="btn btn-info"
                  value="Login"
                />
              </div>
              <div>
                {/* <input
                  type="submit"
                  onClick={handleGoogleLogin}
                  className="btn btn-primary"
                  value="Login with Google"
                /> */}
                <SocialLogin></SocialLogin>
              </div>
              {/* <div className="form-control mt-6">
                <input
                  onClick={handleGoogleLogin}
                  type="submit"
                  className="btn btn-primary"
                  value="Login with Google"
                />
              </div> */}
              <p className="text-center text-white">
                New here? Please{" "}
                <Link className="text-white font-bold" to="/register">
                  Register
                </Link>{" "}
                Here
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

