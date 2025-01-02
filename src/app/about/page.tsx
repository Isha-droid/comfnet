import React from 'react';
import ConnectWithExpert from '../../components/about/ConnectWithExpert';
import About from '../../components/about/About';
import FueledByVision from '../../components/about/FueledByVision';
import IndustriesWeServe from '../../components/about/IndustriesWeServe';
import OurValues from '../../components/about/OurValues';
import WhoWeAre from '../../components/about/WhoWeAre';
import Approach from '../../components/about/Approach';
import WhyChooseUs from '../../components/WhyChooseUs';
import { approaches, reasonstSetPart } from '../constants';
import MissionVision from '../../components/VisionMission';
const AboutPage: React.FC = () => {
        return (
                <div>
                        <About />
                        <WhoWeAre />
                        <Approach
                                title={approaches.title}
                                subtitle={approaches.subtitle}
                                steps={approaches.steps}
                        />
                        <IndustriesWeServe />
                        <WhyChooseUs reasons={reasonstSetPart} />
                        <OurValues />
                        <MissionVision />
                        <ConnectWithExpert />
                </div>
        );
};

export default AboutPage;
