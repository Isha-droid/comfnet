import React from 'react';

const Quote = () => {
  return (
    <div className="bg-blue-900 p-8 flex flex-col items-center text-center">
      <h1 className="text-2xl font-semibold text-white mb-4">
        Is it worth spending on Automotive & Manufacturing?
      </h1>
      <p className="text-white text-lg leading-relaxed">
        <span className="text-yellow-400 text-3xl font-serif">“</span>
        In the future, the vehicle will be software-driven and contain hundreds of millions of lines of programming. To achieve this, the automotive industry must develop new competencies and invest more in IT and communication technologies.
        <span className="text-yellow-400 text-3xl font-serif">”</span>
      </p>
    </div>
  );
};

export default Quote;
