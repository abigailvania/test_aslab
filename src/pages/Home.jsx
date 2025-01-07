import React from "react";

function Home() {
    
    return (
        <div className="p-8">
            <div className="about">
                <div className="text-2xl text-red-600">
                    What is F1?
                </div>
                <div className="text-lg">
                    Formula One, commonly abbreviated as F1, is the highest class of international racing for open-wheel single-seater formula racing cars sanctioned by the Fédération Internationale de l'Automobile (FIA). The FIA Formula One World Championship has been one of the world's premier forms of motorsport since its inaugural running in 1950 and is often considered to be the pinnacle of motorsport. The word formula in the name refers to the set of rules all participants' cars must follow. A Formula One season consists of a series of races, known as Grands Prix. Grands Prix take place in multiple countries and continents on either purpose-built circuits or closed roads.
                </div>
            </div>
            <div className="mt-8">
                <div className="text-2xl text-red-600">
                    Find Us Here!
                </div>
                <iframe
                    style={{ height: '100%', width: '100%', border: '0' }}
                    src="https://www.google.com/maps/embed/v1/place?q=2+St.+James's+Market,+London,+SW1Y+4AH,+GB&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                    title="Google Map"
                ></iframe>
            </div>
        </div>
    );
}

export default Home;

