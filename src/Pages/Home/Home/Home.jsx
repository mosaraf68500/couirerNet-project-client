import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import ClientLogo from '../ClientLogo/ClientLogo';
import FeaturesHighLights from '../FeaturesHighLights/FeaturesHighLights';
import PrirotySection from '../PrirotySection/PrirotySection';
import TestimonialSlider from '../TestimonialSlider/TestimonialSlider';
import FrequentlyQuestion from '../FrequentlyQuestion/FrequentlyQuestion';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <ClientLogo></ClientLogo>
            <FeaturesHighLights></FeaturesHighLights>
            <PrirotySection></PrirotySection>
            <TestimonialSlider></TestimonialSlider>
            <FrequentlyQuestion></FrequentlyQuestion>
        </div>
    );
};

export default Home;