'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

export default function CaseStudies ()
{
        const studies=[
                {
                        title: 'Connected Mobility Solution',
                        description: 'Developing an advanced connected solution for a leading automotive manufacturer to improve customer experience.',
                        image: 'images/mobility.jpg',
                },
                {
                        title: 'Crane Safety and Efficiency',
                        description: 'Enhancing safety and operational efficiency for a top crane manufacturer through innovative cluster solutions.',
                        image: 'images/crane.jpg',
                },
                {
                        title: 'Intelligent Security Systems',
                        description: 'Creating secure systems with cutting-edge security technology for enterprises.',
                        image: 'images/security.jpg',
                },
        ];

        return (
                <section className="py-12 bg-white">
                        <div className="max-w-[calc(100%-280px)] mx-auto px-4 relative">
                                <h2 className="text-5xl font-bold text-blue-600 mb-6">Case studies</h2>
                                <Swiper
                                        modules={ [ Navigation ] }
                                        navigation={ {
                                                nextEl: '.swiper-button-next',
                                                prevEl: '.swiper-button-prev',
                                        } }
                                        spaceBetween={ 40 } // Increase space between slides
                                        slidesPerView={ 2.5 }
                                        className="w-full"
                                >
                                        { studies.map( ( study, index ) => (
                                                <SwiperSlide key={ index } className="bg-gray-100 p-4 rounded shadow">
                                                        <img
                                                                src={ study.image }
                                                                alt={ study.title }
                                                                className="rounded w-full object-cover"
                                                        />
                                                        <h3 className="mt-4 font-bold text-lg">{ study.title }</h3>
                                                        <p className="text-gray-600 mt-2">{ study.description }</p>
                                                </SwiperSlide>
                                        ) ) }
                                </Swiper>
                                {/* Custom navigation buttons */ }
                                <div className="swiper-button-prev absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-blue-600 text-white p-3 rounded-full hover:bg-blue-500 shadow transition duration-300"></div>
                                <div className="swiper-button-next absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-blue-600 text-white p-3 rounded-full hover:bg-blue-500 shadow transition duration-300"></div>
                        </div>
                </section>
        );
}
