const OurValues=() =>
{
        const values=[
                { id: 1, text: "We always hold integrity towards our clients" },
                { id: 2, text: "We are deeply committed towards our client success" },
                { id: 3, text: "We always excel at what we do" },
        ];

        return (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-8 bg-white">
                        { values.map( ( value ) => (
                                <div
                                        key={ value.id }
                                        className={ `relative flex items-center justify-center ${ value.id%2===0
                                                        ? "bg-white text-blue-900"
                                                        :"bg-blue-900 text-white"
                                                } h-40 md:h-60 text-center` }
                                >
                                        <span className="absolute text-6xl md:text-8xl font-bold text-gray-300">
                                                { value.id }
                                        </span>
                                        <p className="relative text-lg font-medium z-10">{ value.text }</p>
                                </div>
                        ) ) }
                </div>
        );
};

export default OurValues;
