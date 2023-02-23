import React from "react";
import { useForm } from "react-hook-form";
import PropTypes from 'prop-types';

function SignupForm({handleSignup}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    handleSignup(data)
  };
  return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex h-[80vh] m-5">
          <div className="bg-gray-100 p-12 border-2 rounded-lg m-auto  grid grid-cols-4 gap-6 max-w-md">
            <div className="col-span-4 text-center">
              <h3 className=" md:text-4xl text-2xl  font-semibold text-gray-700 m-6">
                Sign up to HRM
              </h3>
            </div>
            <div className="col-span-2 flex flex-col ">
            <input type="text" name="role" value="client" hidden {...register("role")}/>
              <input
                type="text"
                name="firstName"
                id=""
                placeholder="First Name"
                className="md:text-base text-sm h-10 rounded-md p-2 border-2 border-gray-400"
                {...register("firstName", {
                  required: "First Name is required",
                  minLength: {
                    value: 3,
                    message: "Firstname must have at least 3 characters",
                  },
                })}
              />
              {errors.firstName ? (
                <p className="text-red-600 text-sm mt-2">
                  {errors.firstName?.message}
                </p>
              ) : null}
            </div>
            <div className="col-span-2 flex flex-col">
              
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                className="md:text-base text-sm h-10 rounded-md p-2 border-2 border-gray-400"
                {...register("lastName", {
                  required: "Last Name is required",
                 
                })}
              />
              {errors.lastName ? (
                <p className="text-red-600 text-sm mt-2">
                  {errors.lastName?.message}
                </p>
              ) : null}
            </div>
            <div className="col-span-4 flex flex-col">
              <input
                type="text"
                name="email"
                id=""
                placeholder="Email address"
                className="md:text-base text-sm h-10 rounded-md p-2 border-2 border-gray-400"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value:
                      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: "Please enter a valid email",
                  },
                })}
              />
              {errors.email ? (
                <p className="text-red-600 text-sm mt-2">
                  {errors.email?.message}
                </p>
              ) : null}
            </div>
            <div className="col-span-4 flex flex-col">
            <input
                type="text"
                name="password"
                placeholder="Password"
                className="md:text-base text-sm h-10 rounded-md p-2 border-2 border-gray-400"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must have at least 8 characters",
                  },
                })}
              />
              {errors.password ? (
                <p className="text-red-600 text-sm mt-2">
                  {errors.password?.message}
                </p>
              ) : null}
            </div>
            <div className="col-span-4 flex flex-col">  
              
              <button className=" bg-gray-900 border-gray-300 py-2 px-3 lg:px-5 font-bold text-gray-100 rounded-2xl hover:bg-gray-800">
                Create My Account
              </button>
              <div className="col-span-4">
                <p className="flex flex-row items-center justify-center mt-10 gap-2 text-center">
                  <span>You have an account?</span>
                  <a href="/login" className="underline">
                    Login!
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </form>
  );
}

export default SignupForm;


SignupForm.propTypes = {
    handleSignup: PropTypes.func.isRequired,
  };