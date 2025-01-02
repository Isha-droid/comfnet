import { Globe } from 'lucide-react';

interface StatProps {
        number: string;
        description: string;
}

const StatCard = ({ number, description }: StatProps) => (
        <div className="bg-blue-900 text-white p-6 rounded-lg">
                <div className="text-4xl font-bold mb-2">{number}</div>
                <div className="text-sm">{description}</div>
        </div>
);

interface TeamMemberProps {
        name: string;
        title: string;
        description: string;
        imageUrl: string;
}

const TeamMember = ({ name, title, description, imageUrl }: TeamMemberProps) => (
        <div className="bg-white rounded-lg shadow-lg p-16 flex flex-col md:flex-row gap-6 items-center md:items-start">
                <img
                        src={imageUrl}
                        alt={name}
                        className="w-40 h-40 rounded-lg object-cover"
                />
                <div className='text-black'>
                        <div className="text-sm text-gray-600 mb-1">{title}</div>
                        <h3 className="text-xl font-bold mb-2">{name}</h3>
                        <p className="text-gray-600">{description}</p>
                </div>
        </div>
);

const CompanySections = () => {
        return (
                <div className="max-w-6xl mx-auto p-6 space-y-16">

                        <div className="grid grid-cols-1 md:grid-cols-[30%_70%] gap-4">
                                <StatCard
                                        number="500+"
                                        description="Partnership Facilitated"
                                />
                                <div className="bg-blue-900 text-white p-6 rounded-lg flex justify-between items-center">
                                        <div>
                                                <div className="text-4xl font-bold mb-2">10,000</div>
                                                <div className="text-sm">hours of consultation delivered</div>
                                        </div>
                                        <Globe className="w-16 h-16 text-blue-700 opacity-50" />
                                </div>
                        </div>


                        <div className='p-6'>
                                <h2 className="text-3xl font-bold text-blue-700 mb-6 p-4">Team highlights</h2>
                                <TeamMember
                                        name="Dr. Mohammad Faizan"
                                        title="FOUNDER & CEO"
                                        description="ComfNet has a highly motivated and dynamic team that brings together the strength and expertise of each individual. Following this principle, we have been creating reliable, tailor-made solutions for each of our customers since 2015."
                                        imageUrl="/unnamed.png"
                                />
                        </div>


                        <div className="bg-blue-900 text-white p-8 rounded-lg">
                                <div className="max-w-2xl mx-auto text-center">
                                        <h2 className="text-2xl font-bold mb-4">Take A Survey</h2>
                                        <p className="mb-6">
                                                Tell us about your business challenges, and we'll recommend solutions tailored to your needs. Please take a moment to complete this short survey.
                                        </p>
                                        <button className="bg-white text-blue-700 px-6 py-2 rounded-full font-medium hover:bg-blue-50 transition-colors duration-200">
                                                Start Survey
                                        </button>
                                </div>
                                <div className="flex justify-between mt-6">
                                        <div className="w-12 h-12 bg-white rounded-full opacity-50" />
                                        <div className="w-12 h-12 bg-white rounded-full opacity-50" />
                                </div>
                        </div>
                </div>
        );
};

export default CompanySections;