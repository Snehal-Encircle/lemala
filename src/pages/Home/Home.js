import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

const Home = () => {
    return (
        <>
            <Layout>
                <section className='banner h-screen relative'>
                    <div className='banner-img items-center h-full bg-cover flex justify-center' style={{ backgroundImage: `url("../images/banner-bg.jpg")` }}>
                        <div className='banner-info px-15 text-center relative'>
                            <h1 className='lg:text-53 lg:leading-59 text-white capitalize'>Authentic African Safaris</h1>
                            <button className='btn text-white mt-10'>
                                Explore Camps & Lodges
                            </button>
                        </div>
                    </div>
                </section>
                <section className='zigzag lg:pt-66 pt-35'>
                    <div className='lg:container-fluid lgscreen:px-25'>
                        <div className='flex flex-wrap items-center'>
                            <div className='lg:w-6/12 w-full'>
                                <div className='zigzag-img'>
                                    <div className='img'>
                                        <img src="../images/ourstory.jpg" alt="our story" />
                                    </div>
                                </div>
                            </div>
                            <div className='lg:w-6/12 w-full pl-25 xl:pl-144 lgscreen:pt-25'>
                                <div className='zigzag-content lg:w-[451px]'>
                                    <div className='title'>
                                        <h3 className='subtitle pb-25'>Our Story</h3>
                                        <h1>
                                            Immersive Experiences in the Land of the Serengeti and Nile
                                        </h1>
                                    </div>
                                    <div className='content pt-4 lg:pt-42'>
                                        <p className='lg:max-w-[440px]'>
                                            Lemala properties are an authentic collection of inspiring lodges, luxurious villas and intimate tented camps. Our locations include Tanzania’s Serengeti, Ngorongoro and Tarangire regions, and Uganda’s River Nile.
                                        </p>
                                        <p className='pt-5 max-w-[440px]'>
                                            Our properties are located in the heart of the wilderness, allowing our guests to connect deeply with the environment, while experiencing superior comfort and service. Exceptional professional guiding, first-class cuisine and year-round game viewing are hallmarks of a classic Lemala stay.
                                        </p>
                                    </div>
                                    <div className='btn-green mt-12'>
                                        <Link to="/">our story</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='shape-line relative left-0 bottom-0 md:bottom-[-30px] md:mt-[-100px] z-50'>
                        <img src="https://www.lemalacamps.com/app/themes/lemala/public/images/shape-line.png?id=d9d75b32763757e52d15" alt="" className='w-full block align-middle' />
                    </div>
                </section>
                <section className='why-book py-14'>
                    <div className=''>
                        <div className='title text-center pb-50'>
                            <h1>Why book with us?</h1>
                        </div>
                        <div className='px-25 sm:container-fluid'>
                            <div className="content-inner grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 xl:gap-5">
                                <div className='location'>
                                    <img src="../images/location.svg" alt="" className='m-auto' />
                                    <h2 className='py-5'>Location, Location, Location</h2>
                                    <p>Our portfolio features properties in Africa’s most celebrated wildlife regions, ensuring that our guests get as close to the action as possible.</p>
                                </div>
                                <div className='location'>
                                    <img src="../images/heart.svg" alt="" className='m-auto' />
                                    <h2 className='py-5'>Our Impact</h2>
                                    <p>We’re committed to supporting conservation, education and empowerment in the places we call home. </p>
                                </div>
                                <div className='location'>
                                    <img src="../images/time.svg" alt="" className='m-auto' />
                                    <h2 className='py-5'>Authentic Experiences</h2>
                                    <p>Whether it’s game viewing, climbing Kilimanjaro, diving in Zanzibar or just relaxing in a pristine hideaway, we’ll help you fulfil your wildest dreams.</p>
                                </div>
                                <div className='location'>
                                    <img src="../images/sunset.svg" alt="" className='m-auto' />
                                    <h2 className='py-5'>The Spirit of Lemala</h2>
                                    <p>Every day, we’re filled with joy and pride to be able to share our properties and experiences with our guests, ensuring each stay is imbued with that special Lemala feeling.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='destinations lg:pt-46'>
                    <div className='main-title text-center pb-25 lg:pb-73'>
                        <h1>Our Destinations</h1>
                    </div>
                    <div className='destination-grid'>
                        <div className='px-25 lg:container-fluid'>
                            <div className='grid grid-cols-1 lg:grid-cols-2 gap-37'>
                                <div className='serengeti'>
                                    <div className='grid-img'>
                                        <img src="../images/Serengeti.jpg" alt="" />
                                    </div>
                                    <div className='grid-content'>
                                        <h3 className='subtitle'>Tanzania</h3>
                                        <h2>Serengeti</h2>
                                        <p>One of the world’s most famous national parks, the Serengeti is known for its annual wildebeest migration.</p>
                                        <div className='explore-btn'>
                                            <Link to="/">Explore</Link>
                                        </div>

                                    </div>
                                </div>
                                <div className='ngorongoro'>
                                    <div className='grid-img'>
                                        <img src="../images/Ngorongoro.jpg" alt="" />
                                    </div>
                                    <div className='grid-content'>
                                        <h3 className='subtitle'>Tanzania</h3>
                                        <h2>Ngorongoro</h2>
                                        <p>The main feature in this astounding conservation area and Unesco World Heritage Site is the Ngorongoro Crater.</p>
                                        <div className='explore-btn'>
                                            <Link to="/">Explore</Link>
                                        </div>
                                    </div>
                                </div>

                                <div className='tarangire lg:pt-46'>
                                    <div className='grid-img'>
                                        <img src="../images/Tarangire.jpg" alt="" />
                                    </div>
                                    <div className='grid-content'>
                                        <h3 className='subtitle'>Tanzania</h3>
                                        <h2>Tarangire</h2>
                                        <p>Tarangire is second only to the Serengeti when it comes to wildlife numbers in Tanzania.</p>
                                        <div className='explore-btn'>
                                            <Link to="/">Explore</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className='nile lg:pt-46'>
                                    <div className='grid-img'>
                                        <img src="../images/River Nile.jpg" alt="" />
                                    </div>
                                    <div className='grid-content'>
                                        <h3 className='subtitle'>Uganda</h3>
                                        <h2>River Nile</h2>
                                        <p>Famous as the historic source of the Nile River, Jinja is now the adrenaline capital of East Africa.</p>
                                        <div className='explore-btn'>
                                            <Link to="/">Explore</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </section>
                <section className='camps-slider pt-50 lg:pt-150 pb-50 lg:pb-142'>
                    <div className='px-25 lg:container-fluid'>
                        <div className='lg:flex justify-between'>
                            <h1>Our Camps and Lodges</h1>
                            <div className='btn-green lgscreen:mt-5 '>
                                <Link to="/">Explore All</Link>
                            </div>
                        </div>
                        <p className='max-w-[505px] pt-21 pb-25 lg:pb-79'>We have a range of inspiring lodges, luxurious villas and intimate tented camps in Northern Tanzania and Uganda.</p>
                    </div>
                    <Swiper
                        slidesPerView={4.2}
                        centeredSlides={true}
                        spaceBetween={40}
                        navigation={true}
                        mousewheel={true}
                        keyboard={true}
                        modules={[Navigation]}
                        className=""
                        breakpoints={{
                            319: {
                                spaceBetween: 20,
                            },
                            768: {
                                spaceBetween: 20,
                            },
                            1024: {
                                spaceBetween: 40,
                            },
                        }}
                    >
                        <SwiperSlide>
                            <img src="../images/House.jpg" alt="" />
                            <div className='absolute bottom-6 left-7'>
                                <h4>Hamerkop House by Lemala</h4>
                                <div className='explore-btn text-white pt-1 border-white'>
                                    <Link to="/">Explore</Link>
                                </div>
                            </div>

                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="../images/Ridge.jpg" alt="" />
                            <div className='absolute bottom-6 left-7'>
                                <h4>Mpingo Ridge Tented Lodge</h4>
                                <div className='explore-btn text-white pt-1 border-white'>
                                    <Link to="/">Explore</Link>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="../images/camp.jpg" alt="" />
                            <div className='absolute bottom-6 mdscreen:left-3 left-7'>
                                <h4>Ngoronoro Tented Camp</h4>
                                <div className='explore-btn text-white pt-1 border-white'>
                                    <Link to="/">Explore</Link>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="../images/House.jpg" alt="" />
                            <div className='absolute bottom-6 left-7'>
                                <h4>Mpingo Ridge Tented Lodge</h4>
                                <div className='explore-btn text-white pt-1 border-white'>
                                    <Link to="/">Explore</Link>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="../images/camp.jpg" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="../images/camp.jpg" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="../images/House.jpg" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="../images/camp.jpg" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="../images/camp.jpg" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="../images/camp.jpg" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="../images/camp.jpg" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="../images/camp.jpg" alt="" />
                        </SwiperSlide>
                        <div className='flex mdscreen:pt-[15%] lg:pt-12per pr-100 justify-end'>
                            {/* <img src="../images/black-pre.svg" alt="" className='pr-30' />
                            <img src="../images/black-nex.svg" alt="" /> */}
                        </div>
                    </Swiper>
                </section>
                <section className='zigzag-gray lg:pb-132'>
                    <div className='lg:container-fluid lg:pr-0'>
                        <div className='flex flex-wrap items-center bg-gray-100'>
                            <div className='lg:w-6/12 w-full lg:order-2'>
                                <div className='zigzag'>
                                    <div className='img'>
                                        <img src="../images/experiences.jpg" alt="Breathe in the Real Africa" />
                                    </div>
                                </div>
                            </div>
                            <div className='lg:w-6/12 w-full px-25 xl:pl-84 lgscreen:pt-25'>
                                <div className='zigzag-content lg:w-[451px]'>
                                    <div className='title'>
                                        <h3 className='subtitle pb-25'>Experiences</h3>
                                        <h1>
                                            Breathe in the Real Africa
                                        </h1>
                                    </div>
                                    <div className='content pt-4 lg:pt-42'>
                                        <p className='lg:max-w-[426px]'>
                                            Nothing can prepare you for a trip to Africa – the vast landscapes, the thrilling encounters with big game, the details brought to life by your expert guides. It’s in the cool of the morning and afternoon that your senses will be most alive, stimulated whether you are on foot, atop a horse, in a game vehicle, hot air balloon or boat.
                                        </p>
                                    </div>
                                    <div className='btn-green my-12'>
                                        <Link to="/">Explore Experiences</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='zigzag-gray lg:pt-66 lgscreen1:pb-2 py-35'>
                    <div className='lg:container-fluid lg:pl-0'>
                        <div className='flex flex-wrap items-center bg-gray-100'>
                            <div className='lg:w-6/12 w-full lgscreen::order-2'>
                                <div className='zigzag'>
                                    <div className='img'>
                                        <img src="../images/tours.jpg" alt="Our Impact" />
                                    </div>
                                </div>
                            </div>
                            <div className='lg:w-6/12 w-full px-25 xl:pl-84 lgscreen:pt-25'>
                                <div className='zigzag-content lg:w-[451px]'>
                                    <div className='title'>
                                        <h3 className='subtitle pb-25'>Community & Conservation</h3>
                                        <h1>
                                            Our Impact
                                        </h1>
                                    </div>
                                    <div className='content pt-4 lg:pt-42'>
                                        <p className='lg:max-w-[426px]'>
                                            We’re passionate about protecting the environment and supporting our local communities. From sponsoring small businesses to donating to schools and shelters and investing in our staff, almost all of whom come from the surrounding areas, we do everything we can to uplift and protect those around us.
                                        </p>
                                    </div>
                                    <div className='btn-green my-12 smscreen:text-xs'>
                                        <Link to="/">Explore Community & Conservation</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <img src="../images/curve-line.jpg" alt="" />
                <section className='image-slider'>
                    <Swiper
                        cssMode={true}
                        navigation={true}
                        pagination={true}
                        mousewheel={true}
                        keyboard={true}
                        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                        className=""
                    >
                        <SwiperSlide>
                            <img src="../images/image-slide.jpg" alt="" />
                            <div className='slider-content absolute mdscreen:top-5 lgscreen:top-18per lg:top-1/4 left-18per right-18per'>
                                <h1 className='text-white text-center small:text-10 small:leading-3 smscreen:text-15 smscreen:leading-4 xlmax:text-20 lgscreen:leading-25'>
                                    “Lemala has the most beautiful properties and best
                                    locations throughout Tanzania. Their food is worthy
                                    of a Three Stars Michelin rating, and the staff could
                                    not be more welcoming or perfectly attentive.”
                                </h1>
                                <h1 className='text-white smscreen:text-10 lgscreen:text-20 text-center py-3 xl:pt-6 xl:pb-41  smscreen:hidden'>Jessica</h1>
                                <div className='btn-white mx-auto flex justify-center smscreen:hidden'>
                                    <Link to="/" className=' xlmax:text-15'>Enquire Now Trip</Link>
                                </div>
                            </div>

                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="../images/image-slide.jpg" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="../images/image-slide.jpg" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="../images/image-slide.jpg" alt="" />
                        </SwiperSlide>
                    </Swiper>
                </section>
            </Layout>
        </>
    )
}

export default Home;
