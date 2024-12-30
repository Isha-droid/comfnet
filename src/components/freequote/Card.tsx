interface CardProps {
    logo: string;
    title: string;
    description: string;
  }
  
  const Card: React.FC<CardProps> = ({ logo, title, description }) => {
    return (
      <div className="bg-white flex text-black items-center py-8 px-14 rounded-2xl space-x-7 border-2 shadow-lg max-w-[400px]">
        <img
          src={logo}
          alt="Logo"
          className="p-4 bg-[#243e90] rounded-full w-[50px]"
        />
        <div>
          <h1 className="font-bold">{title}</h1>
          <p>{description}</p>
        </div>
      </div>
    );
  };
  
  export default Card;
