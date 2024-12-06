import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import AppliedvisaCard from "../Components/AppliedvisaCard";

const MyaddedApplication = () => {



    const allApplication = useLoaderData();
    const [applications, setApplications] = useState(allApplication)
    return (
        <div className="bg-gray-200">
            <div className="w-10/12 mx-auto">
                <h1 className="text-center py-5 lg:text-5xl text-3xl font-bold text-pink-600">MY APPLICATIONS</h1>
                <div></div>
                <div className="grid lg:grid-cols-4 gap-3 md:grid-cols-2 grid-cols-1">
                    {applications.map(visa => (
                        <AppliedvisaCard key={visa._id} visa={visa} setApplications={setApplications} applications={applications} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MyaddedApplication;