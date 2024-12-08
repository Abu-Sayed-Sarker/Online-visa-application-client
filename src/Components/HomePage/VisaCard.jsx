/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const VisaCard = ({ visa }) => {
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure>
                    <img
                        className="h-60 w-full"
                        src={visa.photo}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{visa.country}</h2>

                    <div className="flex justify-between">
                        <div>
                            <p className="font-semibold">Visa type</p>
                            <p>{visa.visaType}</p>
                        </div>
                        <div>
                            <p className="font-semibold">Processing time</p>
                            <p>{visa.Processing_time}</p>
                        </div>
                    </div>

                    <div className="flex justify-between">
                        <div>
                            <p className="font-semibold">Validity</p>
                            <p>{visa.Validity}</p>
                            <p className="font-semibold">Application method</p>
                            <p>{visa.method}</p>
                        </div>
                        <div>
                            <p className="font-semibold">Visa Fee</p>
                            <p>{visa.fee}$</p>
                            <p className="font-semibold">Age restriction</p>
                            <p>{visa.Age} Years</p>
                        </div>
                    </div>
                    <div className="card-actions justify-end">
                        <Link to={`/deteils/${visa._id}`}><button className="btn bg-pink-600 hover:bg-pink-400">See Details</button></Link>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default VisaCard;