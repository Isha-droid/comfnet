import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import MissionVision from '../components/VisionMission';
import ServicesSection from '../components/ServicesSection'
import SuccessStories from '../components/SucessStories'
import CaseStudies from '../components/CaseStudies';
import IndustriesWeServe from '../components/IndustriesWeServe';
import WhyChooseUs from '../components/WhyChooseUs';
import Slogan from '../components/Slogan'
export default function Home() {
        const services = [
                {
                        title: 'Global & Local Talent Integration',
                        description:
                                'We will provide skilled engineering and technical personnel, including recruitment, visa management, employee leasing, and remote or on-site placement across all regions.',
                        tags: [
                                'Engineering Recruitment',
                                'Technical Talent Acquisition',
                                'Onsite Staffing',
                                'Freelance IT/Engineering',
                                'Remote Technical Teams',
                                'Employee Leasing',
                        ],
                        image: 'services1.png',
                },
                {
                        title: 'Digital Transformation',
                        description:
                                'We enhance your business with cutting-edge technologies and drive innovation and growth. We empower your vision with tailored solutions, optimizing operations and unlocking growth.',
                        tags: [
                                'Internet of Things',
                                'Artificial Intelligence',
                                'Machine Learning',
                                'Intelligent Automation',
                                'Virtual Reality',
                                'Cloud Computing',
                        ],
                        image: 'services1.png',
                },
                {
                        title: 'Technology Transfer Services',
                        description:
                                'We bring the latest technology from Germany and one of the best creative and talents from India while ensuring seamless integration into your business.',
                        tags: [
                                'Technology Placement',
                                'Innovation Deployment',
                                'Solution Integration',
                                'German Technology Transfer',
                                'Knowledge Transfer',
                        ],
                        image: 'services1.png',
                },
                {
                        title: 'Business Consulting',
                        description:
                                'We bring the latest technology from India and Germany to the GCC, ensuring seamless and efficient integration into your business operations.',
                        tags: [
                                'Advisory',
                                'Startups',
                                'Financial advisory and Taxation services',
                                'Event Management',
                        ],
                        image: 'services1.png',
                },
                {
                        title: 'Partnership Advisory',
                        description:
                                'We will help you build strong and influential partnerships between Germany, India, and GCC companies, paving the way for sustainable long-term success.',
                        tags: [
                                'Partnership Development',
                                'Contract Negotiation',
                                'Solution Integration',
                                'Business Matchmaking',
                                'Strategic Collaboration',
                        ],
                        image: 'services1.png',
                },
        ];
        return (
                <div>
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
                        <WhyChooseUs />
                </div>
        );
}
