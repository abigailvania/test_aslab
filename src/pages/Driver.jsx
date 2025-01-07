import React, { useEffect, useState } from "react";

function Driver() {
    const [drivers, setDrivers] = useState([]);

    useEffect(() => {
        fetch('https://ergast.com/api/f1/2024/1/drivers.json')
            .then(response => response.json())
            .then(data => setDrivers(data.MRData.DriverTable.Drivers));
    }, []);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
            {drivers.map(driver => (
                <div
                    className="max-w-sm bg-[#2b2b2b] rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105"
                    key={driver.driverId}
                >
                    <div className="p-4">
                        <h5 className="text-red-600 text-xl font-semibold mb-2">{driver.givenName} {driver.familyName}</h5>
                        <p className="text-white mb-2">Nationality: {driver.nationality}</p>
                        <p className="text-white mb-2">Date of Birth: {driver.dateOfBirth}</p>
                        <p className="text-white">Permanent Number: {driver.permanentNumber}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Driver;
