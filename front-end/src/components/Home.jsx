import React from 'react';
import MapContainer from '../containers/MapContainer';
import FormContainer from '../containers/FormContainer';

function Home() {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <p>This is the main landing page of the application.</p>
      <MapContainer></MapContainer>
      <FormContainer></FormContainer>
    </div>
  );
}

export default Home;