import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import ClientLogo from '../ClientLogo/ClientLogo';
import FeaturesHighLights from '../FeaturesHighLights/FeaturesHighLights';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <ClientLogo></ClientLogo>
            <FeaturesHighLights></FeaturesHighLights>
        </div>
    );
};

export default Home;