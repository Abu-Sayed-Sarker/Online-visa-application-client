import { useEffect, useState } from "react";
import VisaCard from "./VisaCard";
import { Slide } from "react-awesome-reveal";

const LetestVisa = () => {

    const [visas, setVisa] = useState([])


    const letestVisa = visas.slice(-6)
    

    useEffect(() => {
        fetch("https://visa-navigate-server.vercel.app/visas")
            .then(res => res.json())
            .then(data => {
            setVisa(data)
        })
    },[])


    return (
        <div className="w-10/12 mx-auto pt-7">
            <Slide><h1 className="lg:text-5xl text-2xl text-pink-600 font-semibold">Latest visas</h1></Slide>
            <div className="grid lg:grid-cols-3 gap-3 py-10">
                {
                    letestVisa.map(visa => <VisaCard key={visa._id} visa={visa}></VisaCard>)
                }
            </div>
            
        </div>
    );
};

export default LetestVisa;