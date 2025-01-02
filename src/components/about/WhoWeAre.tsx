'use client'
// Import Swiper and its styles
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Add additional modules if needed
import { Navigation, Pagination } from 'swiper/modules';

// Example Usage
const WhoWeAre: React.FC = () => {
        return (
                <div className="bg-white grid grid-cols-12 gap-8 px-8 md:px-16 lg:px-24 py-16">
                        {/* Left Section */}
                        <div className="col-span-12 md:col-span-12 flex flex-col gap-4">
                                <h2 className="text-3xl text-blue-700 font-bold text-[#0A3B40]">
                                        Who We Are <br /> Our Story
                                </h2>
                                <p className="text-gray-700">
                                        Comfnet Solutions GmbH does not only establish business relationships, but we establish meaningful connections that can catapult organizations to new heights. With the deep synergy of German, Indian, and GCC experience, we connect German engineering excellence, Indian technology innovation, and GCC's strategic outlook for the progress of the new millennium to create change-making solutions.
                                </p>
                                <p className="text-gray-700">
                                        Our core idea is to reveal unseen opportunities, and we aim to assist firms to not only enter new markets but excel within those markets. Together, we foster a future of collaboration, overcoming challenges with revolutionary methods and turning expansion dreams into shared realities. At Comfnet, your success drives us, and your growth is our destination.
                                </p>
                        </div>

                        {/* Carousel Section */}
                        <div className="col-span-12">
                                <Swiper
                                        modules={[Navigation, Pagination]}
                                        navigation
                                        pagination={{ clickable: true }}
                                        spaceBetween={20} // Adjust spacing
                                        slidesPerView={3} // Show 3 cards per view
                                >
                                        <SwiperSlide>
                                                <div className="col-span-5 bg-white p-2 rounded-xl shadow-lg">
                                                        <img
                                                                src="images/whoweare1.png"
                                                                alt="Slide 1"
                                                                className="w-full max-h-[230px] rounded-xl object-cover"
                                                        />
                                                </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                                <div className="col-span-5 bg-white p-2 rounded-xl shadow-lg">
                                                        <img
                                                                src="images/whoweare2.png"
                                                                alt="Slide 2"
                                                                className="w-full max-h-[230px] rounded-xl object-cover"
                                                        />
                                                </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                                <div className="col-span-5 bg-white p-2 rounded-xl shadow-lg">
                                                        <img
                                                                src="images/whoweare3.png"
                                                                alt="Slide 3"
                                                                className="w-full max-h-[230px] rounded-xl object-cover"
                                                        />
                                                </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                                <div className="col-span-5 bg-white p-2 rounded-xl shadow-lg">
                                                        <img
                                                                src="images/whoweare4.png"
                                                                alt="Slide 4"
                                                                className="w-full max-h-[230px] rounded-xl object-cover"
                                                        />
                                                </div>
                                        </SwiperSlide>
                                </Swiper>
                        </div>
                </div>
        );
};

export default WhoWeAre;
