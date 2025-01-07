import React from "react";
import vid from '/src/assets/home.mp4';

function Home() {
    return (
        <div>
            {/* Fullscreen Video */}
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

            {/* Page Content */}
            <div className="p-8 bg-gray-900 text-white">
                {/* About Section */}
                <div className="about">
                    <h2 className="text-2xl text-red-600 mb-4">What is F1?</h2>
                    <p className="text-lg leading-relaxed">
                        Formula One, commonly abbreviated as F1, is the highest class of international racing for open-wheel single-seater formula racing cars sanctioned by the FIA. The FIA Formula One World Championship has been one of the world's premier forms of motorsport since its inaugural running in 1950.
                    </p>
                </div>

                {/* Map Section */}
                <div className="mt-8">
                    <h2 className="text-2xl text-red-600 mb-4">Find Us Here!</h2>
                    <iframe
                        style={{ height: "400px", width: "100%", border: "0" }}
                        src="https://www.google.com/maps/embed/v1/place?q=2+St.+James's+Market,+London,+SW1Y+4AH,+GB&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                        title="Google Map"
                    ></iframe>
                </div>
            </div>
        </div>
    );
}

export default Home;
