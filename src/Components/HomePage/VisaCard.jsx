/* eslint-disable react/prop-types */

const VisaCard = ({visa}) => {
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure>
                    <img
                        src={visa.photo}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{ visa.country }</h2>

                    <div className="flex justify-between">
                        <div>
                            <p className="font-semibold">Visa type</p>
                            <p>{ visa.visaType}</p>
                        </div>
                        <div>
                            <p className="font-semibold">Processing time</p>
                            <p>{ visa.Processing_time}</p>
                        </div>
                    </div>

                    <div className="flex justify-between">
                        <div>
                            <p className="font-semibold">Validity</p>
                            <p>{ visa.Validity}</p>
                            <p className="font-semibold">Application method</p>
                            <p>{ visa.method}</p>
                        </div>
                        <div>
                            <p className="font-semibold">Visa Fee</p>
                            <p>{ visa.fee}$</p>
                            <p className="font-semibold">Applied Date</p>
                            <p></p>
                        </div>
                    </div>
                    <div className="card-actions justify-end">
                        <button className="btn bg-pink-600 hover:bg-pink-400">Details</button>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default VisaCard;