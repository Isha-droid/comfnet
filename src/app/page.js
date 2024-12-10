import HeroSection from '@components/Hero';
import PartnersSection from '@components/Partners';
import VisionMissionSection from '@components/VisionMission';
import ServicesSection from '@components/Services';
import CaseStudiesSection from '@components/CaseStudies';
import IndustriesSection from '@components/Industries';
import WhyChooseUsSection from '@components/WhyChooseUs';

const Home=() =>
{
        return (
                <>
                        <HeroSection />
                        <PartnersSection />
                        <VisionMissionSection />
                        <ServicesSection />
                        <CaseStudiesSection />
                        <IndustriesSection />
                        <WhyChooseUsSection />
                </>
        );
};

export default Home;
