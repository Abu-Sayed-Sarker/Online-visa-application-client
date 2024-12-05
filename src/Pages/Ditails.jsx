import { useLoaderData } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Ditails = () => {
    const {user} = useContext(AuthContext)
    const visa = useLoaderData()


    const [Dates, setDate] = useState(new Date())
    console.log(visa);

    return (
        <div className="bg-gray-200">
            <div className="mx-auto w-10/12">
                <h1 className="text-center py-5 lg:text-5xl text-3xl font-bold text-pink-600">VISA DITAILS</h1>
                <div>
                    <div className="card bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img

                                src={visa.photo}
                                alt="Shoes"
                                className="rounded-xl border-pink-600 border-2" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-4xl">{visa.country}</h2>
                            <p>{visa.description}</p>
                            <div className="card-actions">
                                {/* Open the modal using document.getElementById('ID').showModal() method */}
                                <button className="btn bg-pink-600 hover:bg-pink-400" onClick={() => document.getElementById('my_modal_5').showModal()}>Apply Now</button>
                                <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                                    <div className="modal-box">


                                        <form method="dialog">
                                            <div className="flex flex-col gap-3">
                                                <p className="text-left">Enter email</p>
                                                <input type="text" defaultValue={`${user.email}`} required placeholder="Type here" className="input input-bordered w-full" />
                                                <div className="flex gap-3">
                                                    <input type="text" required placeholder="First Name" className="input input-bordered w-ful" />
                                                    <input type="text" required placeholder="Last Name" className="input input-bordered w-full" />
                                                </div>
                                                <div className="flex gap-3">
                                                    <DatePicker className="input input-bordered w-ful" selected={Dates} onChange={(Date) => setDate(Date)}></DatePicker>
                                                    <input defaultValue={`${visa.fee}`} type="text" required placeholder="Visa Fee" className="input input-bordered w-full" />
                                                </div>
                                            </div>
                                            {/* if there is a button in form, it will close the modal */}
                                            <button className="btn mt-4 bg-pink-600 hover:bg-pink-400">Apply</button>
                                        </form>

                                    </div>
                                </dialog>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Ditails;