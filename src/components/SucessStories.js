'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export default function SuccessStories ()
{
        const stories=[
                {
                        name: "Henning Tepe",
                        title: "Co-Founder, Transparenseeds",
                        image: "/images/Client success stories IMG.svg",
                        text: `ComfNet Solutions provided us with outstanding business consulting and expertly guided us on a 10-day trip to India for our research on fair trade and organic cotton. We highly recommend ComfNet Solutions for consulting and IT services if you're considering starting a business.`,
                },
                {
                        name: "Jane Doe",
                        title: "CEO, Green Innovations",
                        image: "/images/Client2.jpg",
                        text: `ComfNet Solutions helped us implement eco-friendly IT solutions that reduced our operational costs by 30%. Their expertise is unmatched in the industry.`,
                },
                // Add more stories here...
        ];

        return (
                <section className="py-12 bg-gray-100">
                        <div className="max-w-[calc(100%-280px)] mx-auto px-4 grid grid-cols-12 gap-8">
                                <h2 className="col-span-12 text-5xl font-bold text-blue-600 mb-8">
                                        Success stories from our clients
                                </h2>
                                <div className="col-span-12">
                                        <Swiper
                                                modules={ [ Navigation ] }
                                                navigation={ {
                                                        nextEl: ".swiper-button-next",
                                                        prevEl: ".swiper-button-prev",
                                                } }
                                                spaceBetween={ 32 } // Match the gutter size
                                                slidesPerView={ 1 }
                                                className="w-full"
                                        >
                                                { stories.map( ( story, index ) => (
                                                        <SwiperSlide key={ index }>
                                                                <div className="grid grid-cols-12 gap-8 items-center">
                                                                        {/* Image */ }
                                                                        <div className="flex flex-col col-span-4">
                                                                                <img
                                                                                        src={ story.image }
                                                                                        alt={ story.name }
                                                                                        className="w-full h-auto rounded-xl object-cover"
                                                                                />
                                                                                <p className="font-bold text-lg text-slate-700 py-4">{ story.name }</p>
                                                                                <p className="text-gray-500 text-sm">{ story.title }</p>
                                                                        </div>
                                                                        {/* Text */ }
                                                                        <div className="col-span-8">
                                                                                <p className="text-gray-700 mb-4">{ `"${ story.text }"` }</p>

                                                                        </div>
                                                                </div>
                                                        </SwiperSlide>
                                                ) ) }
                                        </Swiper>
                                </div>
                                <div className="col-span-12 flex justify-end mt-4 space-x-2">
                                        <button className="swiper-button-prev bg-blue-600 text-white p-2 rounded-full hover:bg-blue-500 transition duration-300">
                                                ◀
                                        </button>
                                        <button className="swiper-button-next bg-blue-600 text-white p-2 rounded-full hover:bg-blue-500 transition duration-300">
                                                ▶
                                        </button>
                                </div>
                        </div>
                </section>
        );
}
