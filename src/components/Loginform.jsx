import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };

    try {
      const res = await axios.post("https://finalprojectback-2.onrender.com//user/login", userInfo);
      console.log(res.data);
      if (res.data) {
        toast.success("Logged in Successfully");
        localStorage.setItem("Users", JSON.stringify(res.data.user));
        setTimeout(() => {
          navigate("/course");
          window.location.reload();
        }, 1000);
      }
    } catch (err) {
      if (err.response) {
        console.log(err);
        toast.error("Error: " + err.response.data.message);
      }
    }
  };

  return (
    <>
     <Navbar />
     <div className="min-h-screen d-flex justify-content-center align-items-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="login-box p-4 border rounded shadow">
              {/* form content */}
              <form onSubmit={handleSubmit(onSubmit)}>
                <h3 className="font-bold text-lg mb-4">Login</h3>
                {/* Email */}
                <div className="mb-3">
                  <label>Email</label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="form-control"
                    {...register("email", { required: true })}
                  />
                  {errors.email && (
                    <span className="text-danger">
                      This field is required
                    </span>
                  )}
                </div>
                {/* Password */}
                <div className="mb-3">
                  <label>Password</label>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    className="form-control"
                    {...register("password", { required: true })}
                  />
                  {errors.password && (
                    <span className="text-danger">
                      This field is required
                    </span>
                  )}
                </div>
                {/* Button */}
                <div className="d-flex justify-content-between align-items-center mt-4">
                  <button className="btn btn-primary">
                    Login
                  </button>
                  <p>
                    Not registered?{" "}
                    <Link to="/signup" className="text-primary">
                      Signup
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
    
  );
}

export default Login;
