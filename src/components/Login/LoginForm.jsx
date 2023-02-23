import React from "react";
import { useForm } from "react-hook-form";
import {toast} from "react-toastify"
import PropTypes from 'prop-types';

function LoginForm(props) {
  
  const { handleLogin } = props
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      handleLogin(data)
     
    } catch (error) {
      toast.error(error)
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex h-[80vh] m-5">
        <div className="bg-gray-100 p-12 border-2 rounded-lg m-auto  grid grid-cols-4 gap-6 w-md">
          <div className="col-span-4 text-center">
            <h3 className=" md:text-4xl text-2xl  font-semibold text-gray-700 m-6">
              Log in to HRM
            </h3>
          </div>
          <div className="col-span-4 flex flex-col gap-6">
            <div>
              <input
                type="text"
                name="email"
                id=""
                autoComplete="off"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value:
                      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: "Please enter a valid email",
                  },
                })}
                placeholder="Email address"
                className="md:text-base text-sm h-10 rounded-md p-2 border-2 border-gray-400 w-full"
              />
              {errors.email ? (
                <p className="text-red-600 text-sm mt-2">
                  {errors.email?.message}
                </p>
              ) : null}
            </div>
            <div>
              <input
                type="text"
                name="password"
                placeholder="Password"
                autoComplete="off"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must have at least 8 characters",
                  },
                })}
                className="md:text-base text-sm h-10 rounded-md p-2 border-2 border-gray-400 w-full"
              />
              {errors.password ? (
                <p className="text-red-600 text-sm mt-2">
                  {errors.password?.message}
                </p>
              ) : null}
            </div>
            <button
              type="submit"
              className=" bg-gray-900 border-gray-300 py-2 px-3 lg:px-5 font-bold text-gray-100 rounded-2xl hover:bg-gray-800 "
            >
              Login
            </button>
          </div>

          <div className="col-span-4">
            <p className="flex flex-row items-center justify-center mt-10 gap-2 text-center">
              <span>Dont have an account?</span>
              <a href="/signup" className="underline">
                Signup!
              </a>
            </p>
          </div>
        </div>
      </div>
    </form>
  );
}

LoginForm.propTypes = {
  handleLogin: PropTypes.func.isRequired,
};

export default LoginForm;
