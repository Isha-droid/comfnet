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
                        image: 'images/case_study1.svg',
                },
                {
                        title: 'Crane Safety and Efficiency',
                        description: 'Enhancing safety and operational efficiency for a top crane manufacturer through innovative cluster solutions.',
                        image: 'images/case_study2.svg',
                },
                {
                        title: 'Intelligent Security Systems',
                        description: 'Creating secure systems with cutting-edge security technology for enterprises.',
                        image: 'images/case_study2.svg',
                },
        ];

        return (
                <section className="py-12 bg-white">
                        <div className="max-w-[calc(100%-280px)] mx-auto px-4 relative">
                                <h2 className="text-5xl font-bold text-blue-700 mb-6">Case studies</h2>
                                <Swiper
                                        modules={ [ Navigation ] }
                                        navigation={ {
                                                nextEl: '.swiper-b-next',
                                                prevEl: '.swiper-b-prev',
                                        } }
                                        spaceBetween={ 40 }
                                        slidesPerView={ 2.5 }
                                        className="w-full mx-4"
                                >
                                        { studies.map( ( study, index ) => (
                                                <SwiperSlide key={ index } className="bg-gray-100 p-4 rounded shadow">
                                                        <img
                                                                src={ study.image }
                                                                alt={ study.title }
                                                                className="rounded w-full object-cover"
                                                                width={ 40 }
                                                                height={ 22 }
                                                        />
                                                        <h3 className="mt-4 font-bold text-lg">{ study.title }</h3>
                                                        <p className="text-gray-600 mt-2">{ study.description }</p>
                                                </SwiperSlide>
                                        ) ) }
                                </Swiper>

                                {/* Navigation buttons */ }
                                <div>
                                        <button
                                                className="swiper-b-prev absolute left-[-60px] top-1/2 transform -translate-y-1/2 z-10 text-white p-3 rounded-full transition duration-300"
                                        >
                                                <img
                                                        src="/images/left-navigate.svg"
                                                        alt="Previous"
                                                        className="w-12 h-12 object-contain"
                                                />
                                        </button>
                                        <button
                                                className="swiper-b-next absolute right-[60px] top-1/2 transform -translate-y-1/2 z-10 text-white p-3 rounded-full transition duration-300"
                                        >
                                                <img
                                                        src="/images/right-navigate.svg"
                                                        alt="Next"
                                                        className="w-12 h-12 object-contain"
                                                />
                                        </button>
                                </div>
                        </div>
                </section>
        );
}
