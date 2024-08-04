import React,{useState} from 'react'

import { useNavigate } from 'react-router-dom';

const Navbar = () => {

  const navigate = useNavigate();
  const [open,setOpen] = useState(false)

  return (
    <div className="shadow-md w-full fixed top-0 left-0">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800">
          <span className="text-3xl text-red-600 mr-1 pt-2">
            <ion-icon name="fast-food-outline"></ion-icon>
          </span>
          Cooing BOB
        </div>
        <div className="flex">
          <div className="right-6 top-5 absolute text-3xl cursor-pointer md:hidden" onClick={() => setOpen(!open)}>
            <ion-icon name={open ? "close" : "menu"}></ion-icon>
          </div>
          <ul className = {`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 tarnsition-all duration-500 ease-in ${open ? 'top-20 opacity-100':'top-[-490px]'} md:opacity:100`}>
              <div className="md:ml-8 text-xl md:my-0 my-7">
                <button
                onClick={()=>navigate("/login")} 
                className="text-gray-800 hover:text-gray-400 duration-500 cursor-pointer">
                  Login
                </button>
              </div>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar