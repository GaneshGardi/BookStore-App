import React from "react";
import list from "../../public/list.json"
import Cards from './Cards'
import {Link} from 'react-router-dom'

function Course() {
  return (
    <>
      <div className="max-w-screen-2xl dark:bg-slate-900 container mx-auto md:px-20 px-4">
        <div className=" text-center">
          <h1 className="text-2xl md:text-4xl items-center pt-32">
            We are delighted to have you{" "}
            <span className="text-pink-500">Here! :)</span>
          </h1>
          <p className="mt-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
            exercitationem delectus doloremque magnam saepe voluptas
            consequuntur itaque minus nobis. Earum maxime error quisquam
            recusandae quam laborum, id dolore nulla deleniti? Lorem ipsum dolor
            sit amet consectetur, adipisicing elit. Sunt, quia nam illum
            incidunt id autem repellendus ipsam omnis tenetur.
          </p>
          <Link to={'/'}>
            <button className="mt-7 bg-pink-500 text-white px-3 py-2 text-lg rounded-lg hover:bg-pink-400 duration-300">Back</button>
          </Link>
        
        </div>
        <div className="mt-12 grid grid-col-1 md:grid-cols-4">
          {
            list.map((item) => (
              <Cards key={item.id} item={item} />
            ))
          }

        </div>
      </div>
    </>
  );
}

export default Course;
