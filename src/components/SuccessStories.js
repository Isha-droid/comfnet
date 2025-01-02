'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect } from 'react';

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
                        image: "/images/Client success stories IMG.svg",
                        text: `ComfNet Solutions helped us implement eco-friendly IT solutions that reduced our operational costs by 30%. Their expertise is unmatched in the industry.`,
                },
        ];

        useEffect( () =>
        {
                const swiperPrevButton=document.querySelector( '.swiper-b-prev' );
                const swiperNextButton=document.querySelector( '.swiper-b-next' );

                // Attach these buttons to Swiper navigation
                swiperPrevButton.classList.add( 'swiper-navigation-button' );
                swiperNextButton.classList.add( 'swiper-navigation-button' );
        }, [] );

        return (
                <section className="py-12 bg-gray-100">
                        <div className="max-w-[calc(100%-280px)] mx-auto px-4 grid grid-cols-12 gap-8">
                                <h2 className="col-span-12 text-3xl lg:text-5xl font-bold text-blue-700 mb-8 flex justify-between items-center">
                                        <b>Success stories from our clients</b>
                                        <div className="flex space-x-4">
                                                <button
                                                        className="swiper-b-prev rounded-full w-12 h-12 bg-gray-200 flex justify-center items-center"
                                                >
                                                        <img
                                                                src="/images/left-navigate.svg"
                                                                alt="Previous"
                                                                className="w-6 h-6 object-contain"
                                                        />
                                                </button>
                                                <button
                                                        className="swiper-b-next rounded-full w-12 h-12 bg-gray-200 flex justify-center items-center"
                                                >
                                                        <img
                                                                src="/images/right-navigate.svg"
                                                                alt="Next"
                                                                className="w-6 h-6 object-contain"
                                                        />
                                                </button>
                                        </div>
                                </h2>
                                <div className="col-span-12">
                                        <Swiper
                                                modules={ [ Navigation ] }
                                                navigation={ {
                                                        nextEl: '.swiper-b-next',
                                                        prevEl: '.swiper-b-prev',
                                                } }
                                                spaceBetween={ 32 }
                                                slidesPerView={ 1 }
                                                className="w-full"
                                        >
                                                { stories.map( ( story, index ) => (
                                                        <SwiperSlide key={ index }>
                                                                <div className="grid grid-cols-12 gap-8 items-center">
                                                                        <div className="col-span-12 lg:col-span-4 flex justify-center">
                                                                                <img
                                                                                        src={ story.image }
                                                                                        alt={ story.name }
                                                                                        className="w-full h-auto rounded-xl object-contain"
                                                                                />
                                                                        </div>
                                                                        <div className="col-span-12 lg:col-span-8">
                                                                                <p className="text-lg text-gray-700 font-semibold mb-2">{ story.name }</p>
                                                                                <p className="text-sm text-gray-500 mb-4">{ story.title }</p>
                                                                                <p className="text-gray-700">{ `"${ story.text }"` }</p>
                                                                        </div>
                                                                </div>
                                                        </SwiperSlide>
                                                ) ) }
                                        </Swiper>
                                </div>
                        </div>
                </section>
        );
}
