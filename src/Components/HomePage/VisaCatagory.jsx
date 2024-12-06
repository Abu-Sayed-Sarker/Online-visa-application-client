import { FaToolbox } from "react-icons/fa";
import { FaEarthAmericas } from "react-icons/fa6";
import { HiHomeModern, HiMiniUsers } from "react-icons/hi2";

const VisaCatagory = () => {
    return (
        <div className="w-10/12 mx-auto">
            <div className="grid lg:grid-cols-4 grid-cols-1 md:grid-cols-2 py-10">
                <div className="p-5">
                    <div className="text-9xl">
                        <HiHomeModern />
                    </div>
                    <h4 className="text-2xl font-medium text-pink-600 py-3">Education Visa</h4>
                    <p>
                        Porta semper lacus cursus, feugiat primis ultrice in ligula risus auctor a tempus feugiat dolor and lacinia blandit ligula posuere at feugiat
                    </p>

                </div>

                <div className="p-5">
                    <div className="text-9xl">
                    <HiMiniUsers />
                    </div>
                    <h4 className="text-2xl font-medium text-pink-600 py-3">Job Seeker Visa</h4>
                    <p>
                        Porta semper lacus cursus, feugiat primis ultrice in ligula risus auctor a tempus feugiat dolor and lacinia blandit ligula posuere at feugiat
                    </p>

                </div>

                <div className="p-5">
                    <div className="text-9xl">
                    <FaToolbox />
                    </div>
                    <h4 className="text-2xl font-medium text-pink-600 py-3">PR Visa</h4>
                    <p>
                        Porta semper lacus cursus, feugiat primis ultrice in ligula risus auctor a tempus feugiat dolor and lacinia blandit ligula posuere at feugiat
                    </p>

                </div>

                <div className="p-5">
                    <div className="text-9xl">
                    <FaEarthAmericas />
                    </div>
                    <h4 className="text-2xl font-medium text-pink-600 py-3">Tourist & Visitor Visa</h4>
                    <p>
                        Porta semper lacus cursus, feugiat primis ultrice in ligula risus auctor a tempus feugiat dolor and lacinia blandit ligula posuere at feugiat
                    </p>

                </div>
            </div>

        </div>
    );
};

export default VisaCatagory;