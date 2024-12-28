import React from "react";
import Image from "next/image";

const Main: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <main className="container mx-auto py-16 px-8 space-y-16">
        {/* Section 1 - Text on Left, Small Image on Right */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between">
          {/* Left: Text */}
          <div className="text-left lg:w-3/4">
            <h2 className="text-4xl font-semibold leading-[58.09px] text-gray-800 underline decoration-gray-400">
              Discover the variety of career opportunities at Comfnet Solutions.
            </h2>
            <p className="mt-4 text-xl font-medium leading-[29px] text-gray-600">
              Working together to create a better future
            </p>
          </div>

          {/* Right: Small Image */}
          <div className="flex-shrink-0 mt-8 lg:mt-0 lg:w-1/5">
            <Image
              src="/image.png"
              alt="Illustration"
              width={150}
              height={150}
              className="shadow-md"
              style={{
                width: "864px",
                height: "200px",
                top: "1336px",
                left: "936px",
                gap: "0px",
              }}
            />
          </div>
        </div>

        {/* Section 2 - Text on Left, Small Image on Right */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between">
          {/* Left: Text */}
          <div className="text-left lg:w-3/4">
            <h2 className="text-3xl font-medium leading-[29.05px] text-gray-800">
              We ensure that everyone's opinion is heard and valued in all
              spaces. Expertise over experience.
            </h2>
          </div>

          {/* Right: Small Image */}
          <div className="flex-shrink-0 mt-8 lg:mt-0 lg:w-1/5">
            <Image
              src="/image copy.png"
              alt="Placeholder Icon"
              width={100}
              height={100}
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Main;
