'use client';

import { services, caseStudies } from "../app/constants";  // Destructuring both exports

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import MissionVision from '../components/VisionMission';
import ServicesSection from '../components/ServicesSection';
import SuccessStories from '../components/SuccessStories';  // Fixed typo in the import
import CaseStudies from '../components/CaseStudies';
import IndustriesWeServe from '../components/IndustriesWeServe';
import WhyChooseUs from '../components/WhyChooseUs';
import Slogan from '../components/Slogan';
import { reasons } from '../app/constants'
export default function Home() {
        return (
                <div>
                        <Navbar />
                        <Hero />
                        <MissionVision />
                        <Slogan />

                        <div className="bg-gray-50">
                                {services.map((service, index) => (
                                        <ServicesSection
                                                key={index}
                                                title={service.title}
                                                description={service.description}
                                                tags={service.tags}
                                                image={service.image}
                                                reverse={index % 2 !== 0}
                                        />
                                ))}
                        </div>

                        <SuccessStories />
                        <CaseStudies />
                        <IndustriesWeServe />
                        <WhyChooseUs reasons={reasons} />
                </div>
        );
}
