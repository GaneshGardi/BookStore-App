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
      <div className="h-screen flex justify-center items-center dark:bg-slate-800 ">
        <div className="w-[600px] ">
          <div className="md:w-full h-auto modal-box">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              
            
            <div className="dark:text-black ">
              <h3 className="text-start font-sembold text-4xl dark:text-black">
                Contact Us:
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
                <h1 className="text-base text-md font-thin mt-6 ">Message</h1>
                <input
                  type="text"
                  className="px-3 py-20 relative mt-1 w-full border border-slate-300"
                  placeholder="Type your message" required
                  {...register("text", { required: true })}
                />
                
                
                
              
              </div>
              <div className="items-center text-center my-8">
                <button className="bg-sky-500 py-2 rounded-lg text-xl text-white w-full hover:bg-sky-600">
                  Submit
                </button>
                
                
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
