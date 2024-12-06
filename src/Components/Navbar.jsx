import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { Tooltip } from "react-tooltip";
import toast from "react-hot-toast";

const Navbar = () => {

    const { user, LogOut } = useContext(AuthContext);



    const navigate = useNavigate()
    


    const hendelSignOutButton = () => {
        LogOut()
            .then(() => {
                toast.success("Log Out Success");
                navigate("/")
            
            })
            .catch((error) => {
                console.log(error);
                
              });
    }


    return (
        <div className="lg:w-10/12 mx-auto w-11/12">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <NavLink to={'/'}><li className="hover:bg-pink-600 font-semibold uppercase rounded-full"><a>HOME</a></li></NavLink>
                            <NavLink to={'/allvisa'}><li className="hover:bg-pink-600 font-semibold uppercase rounded-full"><a>All visas</a></li></NavLink>
                            <NavLink to={'/addvisa'}><li className="hover:bg-pink-600 font-semibold uppercase rounded-full"><a>Add Visa</a></li></NavLink>
                            <NavLink to={'/addedvisa'}><li className="hover:bg-pink-600 font-semibold uppercase rounded-full"><a>My added visas</a></li></NavLink>
                            <NavLink to={'/visaapplications'}><li className="hover:bg-pink-600 font-semibold uppercase rounded-full"><a>My Visa applications</a></li></NavLink>
                        </ul>
                    </div>
                    <a className="text-pink-600 font-bold text-2xl">E-visa</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <NavLink to={'/'}><li className="hover:bg-pink-600 font-semibold uppercase rounded-full"><a>HOME</a></li></NavLink>
                        <NavLink to={'/allvisa'}><li className="hover:bg-pink-600 font-semibold uppercase rounded-full"><a>All visas</a></li></NavLink>
                        <NavLink to={'/addvisa'}><li className="hover:bg-pink-600 font-semibold uppercase rounded-full"><a>Add Visa</a></li></NavLink>
                        <NavLink to={'/addedvisa'}><li className="hover:bg-pink-600 font-semibold uppercase rounded-full"><a>My added visas</a></li></NavLink>
                        <NavLink to={user?.email ? `/visaapplications/${user.email}` : '/login'}><li className="hover:bg-pink-600 font-semibold uppercase rounded-full"><a>My Visa applications</a></li></NavLink>

                    </ul>
                </div>
                <div className="navbar-end">



                    {
                        user && user?.email ?
                            <div className="flex gap-3">
                                <div 
                                    className="hidden lg:block"
                                    data-tooltip-id="my-tooltip"
                                    data-tooltip-content={`${user.email}`}
                                    data-tooltip-place="top"
                                >
                                    <div className="avatar online pt-2">
                                        <div className="w-10 rounded-full cursor-pointer">
                                            <img src={user?.photoURL} />
                                        </div>
                                    </div>
                                <Tooltip id="my-tooltip" />
                                </div>
                                <Link to={'/login'}><a onClick={hendelSignOutButton} className="btn bg-pink-600 hover:bg-pink-400 text-black rounded-full lg:px-7">Log Out</a></Link>

                            </div>
                            :

                            <div className="flex gap-3">
                                <Link to={'/login'}><a className="btn bg-pink-600 hover:bg-pink-400 text-black rounded-full lg:px-7">Log In</a></Link>
                                <Link to={"/register"}><a className="btn bg-pink-600 hover:bg-pink-400 text-black rounded-full lg:px-7 lg:block lg:pt-4 hidden">Register</a></Link>
                            </div>



                    }
                </div>
            </div>

        </div>
    );
};

export default Navbar;