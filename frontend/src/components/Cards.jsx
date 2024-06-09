import React from 'react'
import list from '../../public/list.json'

function Cards({item}) {
  return (
    <>
    <div className='mt-4 my-3 p-3  '>
    <div className="card w-92 shadow-xl hover:scale-105 duration-300 dark:bg-slate-900 dark:text-white dark:border">
  <figure><img src={item.image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions justify-between mt-1 items-center">
       
        <div className="outline-none border-[0.5px] rounded-full px-3 py-1 ">₹{item.price}</div> 
        <div className="outline-none border-[0.5px] hover:border-none rounded-full   hover:bg-pink-500 hover:text-black p-2 px-2 cursor-pointer">Buy Now</div>
        
      
    </div>
  </div>
</div>
    </div>
    </>
  )
}

export default Cards
