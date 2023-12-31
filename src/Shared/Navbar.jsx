import { useContext, useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { motion } from "framer-motion"
import { AuthContext } from "../Authentication/AuthProvider";
import Swal from "sweetalert2";




  const Navbar = () => {

  const [photo, setPhoto] =useState('')
  const [userName, setUserName] =useState('')
  const { user, logOut} =useContext(AuthContext)
  const navigate = useNavigate()

  // NavLink classes
  const active = 'btn font-bold bg-[#001524] border-2 lg:w-auto w-full border-[#ffecd1] text-[#ffecd1] rounded-lg hover:bg-[#001524] hover:text-[#ffecd1] hover:border-[#ffecd1]'
  const inActive = 'btn bg-[#001524] text-white border-2 lg:w-auto w-full border-[#ffffff] rounded-lg hover:bg-[#ffecd1] hover:border-[#001524] hover:text-[#001524]'



 //LogOut button handler 
  const handleLogOut = e =>{
    e.preventDefault()
    logOut()
    .then(()=>{
      Swal.fire({position: "top-end",icon: "success", title: "Logged Out", showConfirmButton: false, timer: 1500 });
      navigate('/')
    })
    .catch(()=>{console.log("error")})
  }

  useEffect(()=>{
    if(user){
        if(user.photoURL && user.displayName){
          setPhoto(user.photoURL)   
        setUserName(user.displayName) 
        }  
      }
    
  },[user])
// isSelected ? <motion.div layoutId="underline" /> : null


  // reused
  const navLinks = < div className=" lg:flex items-center gap-6 space-y-1">
      <NavLink className={({ isActive, isPending,  }) =>isPending ? "pending" : isActive ? active : inActive} to="/">Home</NavLink>
      {user? <>
      <NavLink className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? active : inActive} to="/dashboard/createTask">Dashboard</NavLink>
      {/* <NavLink className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? active : inActive} to="/myAssignments">My Assignments</NavLink> */}
      {/* <NavLink className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? active : inActive} to="/submittedAssignments">Submitted Assignments</NavLink> */}
      </>: 
      <></>

        }
       </div>
      

      
    return (
      
      
        <div className="lg:p-5 navbar bg-[#001524] lg:px-10 flex flex-col lg:flex-row justify-center items-center ">
          <div className="lg:navbar-start flex flex-row py-3 lg:py-0 lg:flex-row justify-between">
              <div className="dropdown  overflow-visible">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" className=" h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                  {navLinks}
                </ul>
              </div>
              <img className="overflow-hidden w-1/3 m-0 p-0 lg:w-1/5" src="https://i.ibb.co/87MKh51/taskforge-high-resolution-logo-transparent.png" alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className=" px-1 text-xl text-white space-x-6">
                {navLinks}
              </ul>
            </div>
            <div className="lg:navbar-end justify-center ">
              {!user ?<div>

                <NavLink to="/signIn" className={  ({ isActive, isPending }) =>isPending ? "pending" : isActive ? active : inActive}>Log In</NavLink>


              </div> :
                 
                  <div className="flex  lg:flex-row  justify-center lg:justify-end items-center gap-4  lg:w-full">
                    <div className="flex flex-row justify-center items-center gap-4">
                      <div className="flex  gap-6 justify-center">
                      
                       <div  className="relative group w-[100px]">
                      <motion.img  whileHover={{ borderRadius: "50px", scale: 1.2 }} initial={ { borderRadius: "10px", scale: 1 }}  src={photo}  alt="" className="w-[50px] mx-auto rounded-lg"/>
                        <div className="absolute top-[50px] rounded-lg inset-0 hidden group-hover:block  text-white text-center">
                            <p className="text-sm bg-[#92140c] rounded-lg w-full  font-semibold">{userName}</p>
                        </div>
                        </div>
                     

                      <Link onClick={handleLogOut} className='btn text-black bg-[#FFDDB6] border-[#FFDDB6] font-bold border-2 rounded-2xl hover:bg-[#1e1e24] hover:border-[#FFDDB6] hover:text-[#FFDDB6]'>Log out</Link>
                    
                    </div>

                    </div>

                    </div>
                  }
          </div>
        </div>
          );
                
};

export default Navbar;