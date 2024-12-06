import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import VisaCard from "../Components/AllVisa/VisaCard";

const Allvisa = () => {
    const allVisa = useLoaderData();


    const [visas, setvisa] = useState(allVisa)

    



    return (
        <div className="bg-gray-200">
            <div className="w-10/12 mx-auto">
                <h1 className="text-center py-5 lg:text-5xl text-3xl font-bold text-pink-600">ALL VISA</h1>
                <div className="grid lg:grid-cols-4 gap-3 md:grid-cols-2 grid-cols-1">
                    {
                        visas.map(visa => <VisaCard key={visa._id} visa={visa} setvisa={setvisa}></VisaCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Allvisa;