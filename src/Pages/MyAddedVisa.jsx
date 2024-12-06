import { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import MyaddedVisaCard from "../Components/MyaddedVisaCard";

const MyAddedVisa = () => {
    const visaData = useLoaderData();
    const params = useParams()
    const [visas, setVisas] = useState(visaData);

    console.log(params.email);
    
    



    return (
        <div>
            <div className="bg-gray-200">
                <div className="w-10/12 mx-auto">
                    <h1 className="text-center py-5 lg:text-5xl text-3xl font-bold text-pink-600">MY ADDED VISA</h1>
                    <div></div>
                    <div className="pb-8 grid lg:grid-cols-4 gap-3 md:grid-cols-2 grid-cols-1">
                        {
                            visas.map(allvisa => <MyaddedVisaCard key={allvisa._id} visas={visas} setVisas={setVisas} allvisa={allvisa}></MyaddedVisaCard>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyAddedVisa;