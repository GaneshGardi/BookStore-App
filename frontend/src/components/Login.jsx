import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form"

function Login() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit=(data)=>console.log(data)

  const navigate = useNavigate();

  const closeModal = () => {
    const modal = document.getElementById('my_modal_3');
    modal.close();
    navigate('/');
  };

  return (
    <div className="dark:text-black">
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box md:w-full h-auto">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button
              type="button"
              onClick={closeModal}
              className="hover:border rounded-xl btn-sm absolute right-2 top-2"
            >
              ✕
            </button>
          </form>
          <div>
            <h3 className="font-sembold text-4xl text-center dark:text-black">Login</h3>
            <div className="my-8 mx-4">
              <h1 className="text-base text-md font-thin">Email</h1>
              <input
                type="text"
                className="px-3 py-1 mt-1 w-full border border-slate-300"
                placeholder="name@email.com"
                {...register("email", { required: true })}
              />
              <br/>
              {errors.email && <span className="text-red-500 text-sm">This field is required</span>}
              <br />
              <h1 className="text-base text-md font-thin mt-6">Password</h1>
              <input
                type="password"
                className="px-3 py-1 mt-1 w-full border border-slate-300"
                placeholder="Enter Password"
                {...register("password", { required: true })}
              />
              <br/>
              {errors.password && <span className="text-red-500 text-sm">This field is required</span>}
            </div>
            <div className="items-center text-center mx-4 my-8">
              <button className="bg-pink-500 px-3 py-2 rounded-lg text-xl text-white w-full hover:bg-pink-400">
                Login
              </button>
              <div className="mt-5 items-start text-start">
                <p>
                  Don't have an account? 
                  <Link to="/signup" className="ml-2 underline text-blue-500 cursor-pointer">
                    SignUp
                  </Link>
                </p>
                
              </div>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
