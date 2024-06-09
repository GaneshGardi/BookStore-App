import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form"

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit=(data)=>console.log(data)
  return (
    <>
      <div className="h-screen flex justify-center items-center dark:bg-slate-400 bg-slate-400">
        <div className="w-[600px]">
          <div className="md:w-full h-auto modal-box">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <Link
                to={"/"}
                className=" hover:border hover:rounded-md btn-sm absolute right-3 top-3 dark:text-black"
              >
                ✕
              </Link>
            
            <div className="dark:text-black ">
              <h3 className="font-sembold text-4xl text-center dark:text-black">
                SignUp
              </h3>
              <div className="mt-6">
                <h1 className="text-base text-md font-thin ">Name</h1>
                <input
                  type="text"
                  className="px-3 py-1 mt-1 w-full border border-slate-300"
                  placeholder="Enter Full Name"
                  {...register("name", { required: true })}
                />
                <br/>
                {errors.name && <span className="text-red-500 text-sm">This field is required</span>}
                
                <br />
                <h1 className="text-base text-md font-thin ">Email</h1>
                <input
                  type="text"
                  className="px-3 py-1 mt-1 w-full border border-slate-300"
                  placeholder="name@email.com"
                  {...register("email", { required: true })}
                />
               
                <br/>
                  {errors.email && <span className="text-red-500 text-sm">This field is required</span>}
                <h1 className="text-base text-md font-thin mt-6 ">Password</h1>
                <input
                  type="password"
                  className="px-3 py-1 mt-1 w-full border border-slate-300"
                  placeholder="Enter Password"
                  {...register("password", { required: true })}
                />
                
                <br/>
              {errors.password && <span className="text-red-500 text-sm">This field is required</span>}
              </div>
              <div className="items-center text-center my-8">
                <button className="bg-pink-500 py-2 rounded-lg text-xl text-white w-full hover:bg-pink-400">
                  SignUp
                </button>
                <div className="mt-5 items-start text-start">
                  <p>
                    Alredy have a account ?
                    <button
                      to={"/"}
                      className="ml-2 underline text-blue-500 cursor-pointer"
                      onClick={() =>
                        document.getElementById("my_modal_3").showModal()
                      }
                    >
                      Login
                    </button>
                    <Login />
                  </p>
                </div>
                
              </div>
            </div>
            </form>
          </div>
          
        </div>
      </div>
    </>
  );
}

export default Signup;
