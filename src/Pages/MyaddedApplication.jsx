import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import AppliedvisaCard from "../Components/AppliedvisaCard";

const MyaddedApplication = () => {


    const [scarch, setscrch] = useState("");



    const allApplication = useLoaderData();
    const [applications, setApplications] = useState(allApplication)


    useEffect(() => {
        fetch(`https://visa-navigate-server.vercel.app/addedvisa?searchParams=${scarch}`)
            .then(res => res.json())
            .then(data => {
                setApplications(data)

            })
    }, [scarch])
    return (
        <div className="bg-gray-200">
            <div className="w-10/12 mx-auto">
                <h1 className="text-center py-5 lg:text-5xl text-3xl font-bold text-pink-600">MY APPLICATIONS</h1>
                <div>
                    <label className="input input-bordered flex items-center gap-2">
                        <input onChange={(e) => setscrch(e.target.value)} type="text" className="grow" placeholder="Search" />
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path
                                fillRule="evenodd"
                                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                clipRule="evenodd" />
                        </svg>
                    </label>
                </div>
                <div className="grid lg:grid-cols-4 gap-3 md:grid-cols-2 grid-cols-1 py-8">
                    {applications.map(visa => (
                        <AppliedvisaCard key={visa._id} visa={visa} setApplications={setApplications} applications={applications} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MyaddedApplication;