import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";
import img from "../../src/assets/login-image.png"
const Register = () => {
    const navigate = useNavigate();
    const { createUser, setuser, upDaterofile } = useContext(AuthContext);


    const [Err, setError] = useState("")
    

    const henselSubmission = e => {


        setError("")

        e.preventDefault()
        const form = new FormData(e.target)
        const name = form.get("name");
        const photo = form.get("photo");
        const email = form.get("email");
        const password = form.get("password");


        createUser(email, password)
            .then((result) => {
                const user = result.user;
                setuser(user)
                toast.success("Register Is success")
                upDaterofile({ displayName: name, photoURL: photo })
                    .then(() => {
                    navigate("/")
                    e.target.reset();
                    }).catch((err) => {
                        const errorCode = err.code;
                        toast.error(errorCode)
                    })


            })
            .catch((error) => {
                const errorCode = error.code;
                toast.error(errorCode)

                // ..
            });


        if (password.length < 5) {
            setError("Password must be at 6 character")
            return;
        }
        if (!/[a-z]/.test(password)) {
            setError("Must have a lowercase letter in the password")
            return;
        }
        if (!/[A-Z]/.test(password)) {
            setError("Must have a Uppercase letter in the password")
            return;
        }
    }
    return (
        <div className="lg:w-10/12 mx-auto flex lg:justify-between">
            <div className="card bg-third-color w-full max-w-lg shrink-0 shadow-2xl p-10">
                <h2 className="text-center font-semibold text-4xl">Register your account</h2>
                <form onSubmit={henselSubmission} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Name</span>
                        </label>
                        <input name="name" type="text" placeholder="Enter your Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input name="photo" type="text" placeholder="Past your photo URL" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input name="email" type="email" placeholder="Enter your email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                        <p className="text-sm text-red-700">{ Err ? Err : "" }</p>
                    </div>
                    <div className="form-control mt-6 ">
                        <button className="btn btn-primary bg-secound-color hover:bg-farst-color text-black hover:text-white">Register</button>
                    </div>
                </form>
                <p className="text-center font-semibold">Already Have An Account ? <Link to={"/Login"} className="text-red-600">Log In</Link></p>
            </div>
            <div className="lg:block hidden pt-8">
                <img src={img} alt="" />

            </div>
        </div>
    );
};

export default Register;