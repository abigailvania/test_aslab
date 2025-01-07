import React, { useEffect, useState } from "react";

function Constructor() {
    const [constructors, setConstructors] = useState([]);

    useEffect(() => {
        fetch('https://ergast.com/api/f1/2024/constructors.json')
            .then(response => response.json())
            .then(data => setConstructors(data.MRData.ConstructorTable.Constructors));
    }, []);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
            {constructors.map(constructor => (
                <div
                    className="max-w-sm bg-[#2b2b2b] rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105"
                    key={constructor.constructorId}
                >
                    <div className="p-4">
                        <h5 className="text-red-600 text-xl font-semibold mb-2">{constructor.name}</h5>
                        <p className="text-white">{constructor.nationality}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Constructor;
