import { BarChart2, GitBranch, FileText } from 'lucide-react';

interface ServiceFeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceFeature = ({ icon, title, description }: ServiceFeatureProps) => (
  <div className="flex flex-col items-center text-center p-4">
    <div className="bg-blue-800 p-4 rounded-full mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-3 text-black">{title}</h3>
    <p className="text-gray-600 max-w-sm">{description}</p>
  </div>
);

const ServiceFeatures = () => {
  const features = [
    {
      icon: <BarChart2 className="w-6 h-6 text-white" />,
      title: "Performance comparison",
      description: "We analyze your company's performance to identify hidden disruptors and key factors."
    },
    {
      icon: <GitBranch className="w-6 h-6 text-white" />,
      title: "Build up",
      description: "We analyze data to assess risks, errors, and costs, ensuring efficient solutions."
    },
    {
      icon: <FileText className="w-6 h-6 text-white" />,
      title: "Deliver",
      description: "Our delivery models feature presentations on project scope, schedule, roadmaps, costs, and key aspects."
    }
  ];

  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <ServiceFeature
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </div>
  );
};

export default ServiceFeatures;