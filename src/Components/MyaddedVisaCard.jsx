/* eslint-disable react/prop-types */

const MyaddedVisaCard = ({ allvisa, visas, setVisas }) => {

    const handelDelete = id => {
        fetch(`http://localhost:5000/visas/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                const newArray = visas.filter((data => id != data._id));
                setVisas(newArray);
                console.log(result);
                
            
            })
    }

    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure>
                    <img
                        src={allvisa.photo}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{allvisa.country}</h2>
                    <div className="flex justify-between">
                        <div>
                            <p className="font-semibold">Visa type</p>
                            <p>{allvisa.visaType}</p>
                        </div>
                        <div>
                            <p className="font-semibold">Visa Fee</p>
                            <p>{allvisa.fee}$</p>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div>
                            <p className="font-semibold">Validity</p>
                            <p>{allvisa.Validity}</p>
                        </div>
                        <div>
                            <p className="font-semibold">Processing time</p>
                            <p>{allvisa.Processing_time}</p>
                        </div>
                    </div>
                    <div className="text-center">
                        <p className="font-semibold">Method</p>
                        <p>{allvisa.method}</p>
                    </div>
                    <div className="card-actions justify-end">
                        <button className="btn bg-pink-600 hover:bg-pink-400 text-black">Update Visa</button>
                        <button onClick={()=>handelDelete(allvisa._id)} className="btn bg-pink-600 hover:bg-pink-400 text-black">Delete Visa</button>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyaddedVisaCard;