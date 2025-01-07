import React, { useEffect, useState } from "react";

function Match() {
    const [races, setRaces] = useState([]);

    useEffect(() => {
        fetch('https://ergast.com/api/f1/2024.json')
            .then(response => response.json())
            .then(data => setRaces(data.MRData.RaceTable.Races));
    }, []);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
            {races.map(race => (
                <a
                    href={`https://en.wikipedia.org/wiki/${race.raceName.replace(/\s+/g, '_')}_Grand_Prix`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="max-w-sm bg-[#2b2b2b] rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105"
                    key={race.round}
                >
                    <div className="p-4">
                        <h5 className="text-red-600 text-xl font-semibold mb-2">{race.raceName}</h5>
                        <p className="text-white mb-2">{race.date}</p>
                        <p className="text-white">{race.Circuit.circuitName}</p>
                    </div>
                </a>
            ))}
        </div>
    );

}

export default Match;