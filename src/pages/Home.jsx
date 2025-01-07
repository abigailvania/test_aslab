import React from "react";
import vid from '/src/assets/home.mp4';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <div className="relative h-screen">
                <video
                    className="absolute w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                >
                    <source src={vid} type="video/mp4" />
                </video>
            </div>

            <div className="p-12 bg-[#242424] text-white">
                <div className="about flex flex-col lg:flex-row gap-8 items-center">
                    <div className="about-left flex-1">
                        <h2 className="text-2xl text-red-600 mb-4">What is F1?</h2>
                        <p className="text-lg leading-relaxed">
                            Formula One, commonly abbreviated as F1, is the highest class of international racing for open-wheel single-seater formula racing cars sanctioned by the FIA. The FIA Formula One World Championship has been one of the world's premier forms of motorsport since its inaugural running in 1950.
                        </p>
                    </div>
                    <div className="about-right flex-1">
                        <img
                            src="https://media.formula1.com/image/upload/t_16by9South/f_auto/q_auto/v1709392049/trackside-images/2024/F1_Grand_Prix_of_Bahrain/2053149561.jpg"
                            alt="F1 Race"
                            className="rounded-lg shadow-md w-full h-auto"
                        />
                    </div>
                </div>

                <div className="match mt-8 flex flex-col lg:flex-row gap-8 items-center">
                    <div className="match-right flex-1">
                        <img
                            src="https://media.formula1.com/image/upload/t_16by9Centre/f_auto/q_auto/v1682606473/Teams_1920x1080.jpg"
                            className="rounded-lg shadow-md w-full h-auto"
                        />
                    </div>
                    <div className="match-left flex-1">
                        <h2 className="text-2xl text-red-600 mb-4">Matches History</h2>
                        <p className="text-lg leading-relaxed">
                            See the matches history here.
                        </p>
                        <Link to="/match">
                            <button className="mt-4 bg-red-600 text-[#28282b] font-bold px-4 py-2 rounded">
                                Explore Matches
                            </button>
                        </Link>
                    </div>
                </div>

                <div className="driver mt-8 flex flex-col lg:flex-row gap-8 items-center">
                    <div className="driver-left flex-1">
                        <h2 className="text-2xl text-red-600 mb-4">Drivers</h2>
                        <p className="text-lg leading-relaxed">
                            See the drivers information here.
                        </p>
                        <Link to="/driver">
                            <button className="mt-4 bg-red-600 text-[#28282b] font-bold px-4 py-2 rounded">
                                View Drivers
                            </button>
                        </Link>
                    </div>
                    <div className="driver-right flex-1">
                        <img
                            src="https://media.formula1.com/image/upload/t_16by9South/f_auto/q_auto/v1709459664/trackside-images/2024/F1_Grand_Prix_of_Bahrain/2055023690.jpg"
                            alt="F1 Race"
                            className="rounded-lg shadow-md w-full h-auto"
                        />
                    </div>
                </div>

                <div className="constructor mt-8 flex flex-col lg:flex-row gap-8 items-center">
                    <div className="constructor-right flex-1">
                        <img
                            src="https://media.formula1.com/image/upload/t_16by9South/f_auto/q_auto/v1700391768/trackside-images/2023/F1_Grand_Prix_of_Las_Vegas___Race/1801966266.jpg"
                            className="rounded-lg shadow-md w-full h-auto"
                        />
                    </div>
                    <div className="constructor-left flex-1">
                        <h2 className="text-2xl text-red-600 mb-4">Participating Constructors</h2>
                        <p className="text-lg leading-relaxed">
                            Wanna see the participating constructors?
                        </p>
                        <Link to="/constructor">
                            <button className="mt-4 bg-red-600 text-[#28282b] font-bold px-4 py-2 rounded">
                                Check Constructors
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
