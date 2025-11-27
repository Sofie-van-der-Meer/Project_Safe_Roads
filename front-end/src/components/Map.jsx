// presentational component for the map section
import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import styles from '../styles/Map.module.css';

function Map({ api }) {
    // if (fragmentationMeasurements.loading) return <div>Loading map data...</div>;
    // if (fragmentationMeasurements.error) return <div style={{ color: 'red' }}>Error loading map data: {fragmentationMeasurements.error}</div>;

    // const data = JSON.stringify(fragmentationMeasurements.data);
    const apiData = JSON.stringify(api.data);
    return (
        <div className={styles.map}>
            <MapContainer center={[51.1, 4.2]} zoom={8} className={styles.mapTile}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                />
            </MapContainer>
            {console.log(apiData)}
        </div>
    );
}

export default Map;