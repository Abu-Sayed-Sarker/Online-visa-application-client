/* eslint-disable react/prop-types */



const AppliedvisaCard = ({ visa, applications, setApplications }) => {
    const handelDelete = id => {
        fetch(`https://visa-navigate-server.vercel.app/addedvisa/${id}`, {
        method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                const newArray = applications.filter((data => id != data._id));
                setApplications(newArray);
                console.log(result);
                
            
        })
    }



    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure>
                    <img
                        className="h-48 w-full"
                        src={visa.img}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{visa.countryName}</h2>

                    <div className="flex justify-between">
                        <div>
                            <p className="font-semibold">Applicant&apos;s name</p>
                            <p>{visa.firstName} {visa.LastName}</p>
                        </div>
                        <div>
                            <p className="font-semibold">Validity</p>
                            <p>{visa.validati}</p>
                        </div>
                    </div>
                    <p className="font-semibodl text-center">Email</p>
                            <p className="text-center">{visa.Email}</p>
                    <div className="flex justify-between">
                        <div>
                            <p className="font-semibold">Visa type</p>
                            <p>{visa.type}</p>
                            <p className="font-semibold">Processing time</p>
                            <p>{visa.prossingTime}</p>
                        </div>
                        <div>
                            <p className="font-semibold">Visa Fee</p>
                            <p>{visa.price}$</p>
                            <p className="font-semibold">Applied Date</p>
                            <p>{visa.date}</p>
                        </div>
                    </div>
                    <div className="card-actions justify-end">
                        <button onClick={()=> handelDelete(visa._id)} className="btn bg-pink-600 hover:bg-pink-400 w-full mt-3">Cancel</button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppliedvisaCard;