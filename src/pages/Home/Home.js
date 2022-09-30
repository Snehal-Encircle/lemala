import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

const Home = () => {
    const imageSlider = [
        {
            image: "",
            description: '',
            writer: '',
            btnText: ''
        },
        {
            image: "",
            description: '',
            writer: '',
            btnText: ''
        },
        {
            image: "",
            description: '',
            writer: '',
            btnText: ''
        },
    ]
    const campsSlider = [
        {
            image: "../images/House.jpg",
            title: 'Hamerkop House by Lemala',
        },
        {
            image: "../images/Ridge.jpg",
            title: 'Mpingo Ridge Tented Lodge',
        },
        {
            image: "../images/camp.jpg",
            title: 'Ngoronoro Tented Camp',
        },
        {
            image: "../images/House.jpg",
            title: 'Mpingo Ridge Tented Lodge',
        },
        {
            image: "../images/House.jpg",
            title: 'Hamerkop House by Lemala',
        },
        {
            image: "../images/Ridge.jpg",
            title: 'Mpingo Ridge Tented Lodge',
        },
        {
            image: "../images/camp.jpg",
            title: 'Ngoronoro Tented Camp',
        },
    ]
    return (
        <>
            <Layout>
                <section className='banner h-screen relative'>
                    <div className='banner-img items-center h-full bg-cover flex justify-center' style={{ backgroundImage: `url("../images/banner-bg.jpg")` }}>
                        <div className='banner-info px-15 text-center relative'>
                            <h1 className='lg:text-53 lg:leading-59 text-white capitalize'>Authentic African Safaris</h1>
                            <Link to='/'>
                                <button className='btn text-white lgscreen:text-base mt-5 lg:mt-10'>
                                    Explore Camps & Lodges
                                </button>
                            </Link>

                        </div>
                    </div>
                </section>
                <section className='zigzag lg:py-66 py-35'>
                    <div className='container-fluid'>
                        <div className='flex flex-wrap items-center'>
                            <div className='lg:w-6/12 w-full'>
                                <div className='zigzag-img'>
                                    <div className='img'>
                                        <img src="../images/ourstory.jpg" alt="our story" />
                                    </div>
                                </div>
                            </div>
                            <div className='lg:w-6/12 w-full'>
                                <div className='zigzag-content pr-0 lg:px-30 xl:px-72'>
                                    <div className='title'>
                                        <div className='subtitle'>Our Story</div>
                                        <h2 className='title-green'>
                                            Immersive Experiences in the Land of the Serengeti and Nile
                                        </h2>
                                    </div>
                                    <div className='content'>
                                        <p>
                                            Lemala properties are an authentic collection of inspiring lodges, luxurious villas and intimate tented camps. Our locations include Tanzania’s Serengeti, Ngorongoro and Tarangire regions, and Uganda’s River Nile.
                                        </p>
                                        <p>
                                            Our properties are located in the heart of the wilderness, allowing our guests to connect deeply with the environment, while experiencing superior comfort and service. Exceptional professional guiding, first-class cuisine and year-round game viewing are hallmarks of a classic Lemala stay.
                                        </p>
                                    </div>
                                    <div className='btn-custom mt-6 lg:mt-12'>
                                        <Link to="/" className='btn-green'>Our Story</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <img src="../images/firstcurve.png" alt="" className='-mt-100' />
                <section className='why-book lg:py-66 py-35'>
                    <div className=''>
                        <div className='title text-center pb-50'>
                            <h2 className='title-green'>Why book with us?</h2>
                        </div>
                        <div className='container-fluid'>
                            <div className="content-inner grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 xl:gap-5">
                                <div className='location'>
                                    <img src="../images/location.svg" alt="" className='m-auto' />
                                    <h6 className='py-5'>Location, Location, Location</h6>
                                    <p>Our portfolio features properties in Africa’s most celebrated wildlife regions, ensuring that our guests get as close to the action as possible.</p>
                                </div>
                                <div className='location'>
                                    <img src="../images/heart.svg" alt="" className='m-auto' />
                                    <h6 className='py-5'>Our Impact</h6>
                                    <p>We’re committed to supporting conservation, education and empowerment in the places we call home. </p>
                                </div>
                                <div className='location'>
                                    <img src="../images/time.svg" alt="" className='m-auto' />
                                    <h6 className='py-5'>Authentic Experiences</h6>
                                    <p>Whether it’s game viewing, climbing Kilimanjaro, diving in Zanzibar or just relaxing in a pristine hideaway, we’ll help you fulfil your wildest dreams.</p>
                                </div>
                                <div className='location'>
                                    <img src="../images/sunset.svg" alt="" className='m-auto' />
                                    <h6 className='py-5'>The Spirit of Lemala</h6>
                                    <p>Every day, we’re filled with joy and pride to be able to share our properties and experiences with our guests, ensuring each stay is imbued with that special Lemala feeling.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='destinations lg:py-66 py-35'>
                    <div className='main-title text-center pb-25 lg:pb-73'>
                        <h2 className='title-green'>Our Destinations</h2>
                    </div>
                    <div className='destination-grid'>
                        <div className='container-fluid'>
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
                                            <Link to="/" className='explore-link'>Explore</Link>
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
                                            <Link to="/" className='explore-link'>Explore</Link>
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
                                            <Link to="/" className='explore-link'>Explore</Link>
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
                                            <Link to="/" className='explore-link'>Explore</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </section>
                <section className='camps-slider lg:py-66 py-35'>
                    <div className='container-fluid'>
                        <div className='lg:flex justify-between'>
                            <h2 className='title-green'>Our Camps and Lodges</h2>
                            <div className='lgscreen:mt-5'>
                                <Link to="/" className='btn-green !px-38'>Explore All</Link>
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
                        loop={true}
                        keyboard={true}
                        modules={[Navigation]}
                        className=""
                        breakpoints={{
                            "@0.00": {
                                slidesPerView: 1.5,
                                spaceBetween: 10
                            },
                            "@0.75": {
                                slidesPerView: 2.5,
                                spaceBetween: 20
                            },
                            "@1.00": {
                                slidesPerView: 3.5,
                                spaceBetween: 30
                            },
                            "@1.50": {
                                slidesPerView: 4.5,
                                spaceBetween: 40
                            }
                        }}
                    >
                        {campsSlider.map(data => {
                            return (
                                <SwiperSlide>
                                    <div className='CampSlider-content'>
                                        <div className='slider-image'>
                                            <img src={data.image} alt="" className='' />
                                        </div>
                                        <div className='absolute bottom-6 left-7'>
                                            <h4>{data.title}</h4>
                                            <div className='explore-btn text-white pt-1 border-white'>
                                                <Link to="/" className='explore-link'>Explore</Link>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )
                        })}
                        <div className='flex mdscreen:pt-[25%] lgscreen:pt-15per xl:pt-12per minscreen:pt-[10%] pr-100 justify-end'>
                            {/* <img src="../images/black-pre.svg" alt="" className='pr-30' />
                            <img src="../images/black-nex.svg" alt="" /> */}
                        </div>
                    </Swiper>
                </section>
                <section className='zigzag zigzag-gray lg:py-66 py-35'>
                    <div className='container-fluid lg:pr-0'>
                        <div className='flex flex-wrap items-center bg-gray-100'>
                            <div className='lg:w-6/12 w-full lg:order-2'>
                                <div className='zigzag'>
                                    <div className='img image-wrapper'>
                                        <img src="../images/experiences.jpg" alt="Breathe in the Real Africa" className='aspect-square' />
                                    </div>
                                </div>
                            </div>
                            <div className='lg:w-6/12 w-full'>
                                <div className='zigzag-content px-25 xl:pl-84'>
                                    <div className='title'>
                                        <h3 className='subtitle'>Experiences</h3>
                                        <h2 className='title-green'>
                                            Breathe in the Real Africa
                                        </h2>
                                    </div>
                                    <div className='content'>
                                        <p className='lg:max-w-[438px] minscreen:max-w-[538px]'>
                                            Nothing can prepare you for a trip to Africa – the vast landscapes, the thrilling encounters with big game, the details brought to life by your expert guides. It’s in the cool of the morning and afternoon that your senses will be most alive, stimulated whether you are on foot, atop a horse, in a game vehicle, hot air balloon or boat.
                                        </p>
                                    </div>
                                    <div className='my-12'>
                                        <Link to="/" className='btn-green'>Explore Experiences</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='zigzag zigzag-gray lg:pt-66 py-35'>
                    <div className='container-fluid lg:pl-0'>
                        <div className='flex flex-wrap items-center bg-gray-100'>
                            <div className='lg:w-6/12 w-full lgscreen::order-2'>
                                <div className='zigzag'>
                                    <div className='img'>
                                        <img src="../images/tours.jpg" alt="Our Impact" className='aspect-square' />
                                    </div>
                                </div>
                            </div>
                            <div className='lg:w-6/12 w-full px-25 xl:pl-84'>
                                <div className='zigzag-content'>
                                    <div className='title'>
                                        <h3 className='subtitle'>Community & Conservation</h3>
                                        <h2 className='title-green'>
                                            Our Impact
                                        </h2>
                                    </div>
                                    <div className='content'>
                                        <p className='lg:max-w-[440px] minscreen:max-w-[538px]'>
                                            We’re passionate about protecting the environment and supporting our local communities. From sponsoring small businesses to donating to schools and shelters and investing in our staff, almost all of whom come from the surrounding areas, we do everything we can to uplift and protect those around us.
                                        </p>
                                    </div>
                                    <div className='my-12 smscreen:text-xs'>
                                        <Link to="/" className='btn-green'>Explore Community & Conservation</Link>
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
                        pagination={{
                            clickable: true
                        }}
                        mousewheel={true}
                        keyboard={true}
                        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                        className=""
                    >
                        {imageSlider.map(item => {
                            return (
                                <SwiperSlide>
                                    <div className='slider-inner min-h-[700px] bg-center' style={{ backgroundImage: `url("../images/image-slide.jpg")` }} >
                                        <div className='slider-content absolute top-1/4 left-18per right-18per'>
                                            <h2 className='title-green text-white text-center'>
                                                “Lemala has the most beautiful properties and best
                                                locations throughout Tanzania. Their food is worthy
                                                of a Three Stars Michelin rating, and the staff could
                                                not be more welcoming or perfectly attentive.”
                                            </h2>
                                            <h2 className='text-white text-center py-3 xl:pt-6 xl:pb-41'>Jessica</h2>
                                            <div className='btn-white mx-auto flex justify-center'>
                                                <Link to="/" className=' xlmax:text-15'>Enquire Now Trip</Link>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </section>
            </Layout>
        </>
    )
}

export default Home;
