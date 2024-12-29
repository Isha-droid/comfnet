import Image from 'next/image';

interface Logo {
  src: string;
  alt: string;
}

const Companies: React.FC = () => {
  const logos: Logo[] = [
    { src: '/techstreet.png', alt: 'TechStreet Logo' },
    { src: '/kritikat.png', alt: 'KritiKal Solutions Logo' },
    { src: '/opencampus.png', alt: 'OpenCampus Logo' },
    { src: '/digitalTwin.png', alt: 'Digital Twin Technology Logo' },
    { src: '/cityware.png', alt: 'Cityware Logo' },
  ];

  return (
    <div className="flex flex-wrap justify-around items-center bg-white py-8 px-4">
      {logos.map((logo, index) => (
        <div key={index} className="m-4">
          <Image src={logo.src} alt={logo.alt} width={100} height={50} />
        </div>
      ))}
    </div>
  );
};

export default Companies;
