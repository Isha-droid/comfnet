import ConnectWithExpert from './components/ConnectWithExpert';
import About from './components/About';
import FueledByVision from './components/FueledByVision';
import IndustriesWeServe from './components/IndustriesWeServe';
import OurValues from './components/OurValues';
import WhyWorkWithUs from './components/WhyWorkWithUs';

const AboutPage=() =>
{
        return (
                <div>
                        <About />
                        <WhyWorkWithUs />
                        <IndustriesWeServe />
                        <OurValues />
                        <FueledByVision />
                        <ConnectWithExpert />
                </div>
        );
};

export default AboutPage;
