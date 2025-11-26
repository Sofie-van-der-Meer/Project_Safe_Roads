// map component containing all stateful logic
import React, { useState, useEffect } from 'react';

import Map from '../components/map.jsx';

function MapContainer() {
    // map state and logic would go here
    // variables
    const [data, setData] = useState('Map data loading...');


    // useEffect hooks
    useEffect(() => {
        const timer = setTimeout(() => {
            setData("Map data loaded");
        }, 5000);

        return () => clearTimeout(timer);
    }, []);


    return (
        <Map data={data}></Map>
    );
}

export default MapContainer;