// map component containing all stateful logic
import React from 'react';
import useFragmentationMeasurements from '../hooks/useFragmentationMeasurements.jsx';
import useApiData from '../hooks/useApiData.jsx';
import Map from '../components/Map.jsx';

function MapContainer() {
    // map state and logic would go here
    const fragmentationMeasurements = useFragmentationMeasurements();
    const api = useApiData('https://docs.basisregisters.vlaanderen.be/v2/wegen/organisaties');
    const roadkills = useApiData(`https://waarnemingen.be/api/v1/observations/?date_after=&date_before=&user=&location=&species_group=&sex=&month=&country_division=&rarity=&search=&modified_since=&has_photo=unknown&life_stage=&activity=ROAD_KILL&method=
`)

    return (
        <Map
            fragmentationMeasurements={fragmentationMeasurements}
            api={api}
            roadkills={roadkills}
        ></Map>
    );
}

export default MapContainer;