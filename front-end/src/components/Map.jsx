// presentational component for the map section
import React, {useRef } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import styles from '../styles/Map.module.css';

function Map({data}) {
    return (
        <div className={styles.map}>
            <p>{data}</p>
            <MapContainer center={[51.1, 4.2]} zoom={8} className={styles.mapTile} ref={useRef(null)}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                />
            </MapContainer>
        </div>
    );
}


export default Map;