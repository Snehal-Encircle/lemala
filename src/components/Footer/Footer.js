import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gray-100">
            <div className="container-fluid">
                <div className="form py-50 md:py-85 ">
                    <div className='form-header mb-30 md:mb-52'>
                        <div className="form-title">
                            <h2 className='title-green'>Hear the latest news about Lemala</h2>
                        </div>
                    </div>
                    <form className="form-main">
                        <div className='name-info lg:flex'>
                            <div className='lg:mr-6'>
                                <label htmlFor="name"></label>
                                <input type="text" placeholder="Jane" className="form-field w-full" />
                            </div>
                            <div className='lg:mr-6'>
                                <label htmlFor="surname"></label>
                                <input type="text" placeholder="Surname" className="form-field w-full" />
                            </div>
                            <div className='lg:mr-6'>
                                <label htmlFor="email"></label>
                                <input type="email" placeholder="Email address" className="form-field w-full" />
                            </div>
                            <div className='lgscreen:flex lgscreen:justify-center'>
                                <input type="submit" value="Subscribe" className="form-field hover:bg-black-100 hover:text-white px-10 !mr-0 border-green-100 text-green-100" />
                            </div>
                        </div>
                    </form>
                </div>
                <div className="footer-nav">
                    <div className="flex flex-wrap lgscreen:pt-0 py-45">
                        <div className="lg:w-4/12 w-full">
                            <div className="footer-info">
                                <div className="logo">
                                    <Link to="/">
                                        <img src="../images/footerlogo.png" className="max-w-[196px]  lgscreen:m-auto" alt="Logo" />
                                    </Link>
                                </div>
                                <p className='lgscreen:text-center lg:max-w-[244px]'>
                                    A leading provider of boutique, beautiful and unusual accommodation in some of the world’s most celebrated wildlife regions.
                                </p>
                                <div className="sicon">
                                    <ul className="flex flex-wrap justify-start mt-31 space-x-4 lgscreen:justify-center">
                                        <li><Link to="/"><img src="../images/twitter.svg" alt="twitter" /></Link></li>
                                        <li><Link to="/"><img src="../images/facebook.svg" alt="facebook" /></Link></li>
                                        <li><Link to="/"><img src="../images/tripadvisor.svg" alt="tripadvisor" /></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="footer-menu lg:w-8/12 w-full xlmax:pt-25">
                            <div className="lg:flex flex-wrap">
                                <div className="w-full md:w-3/12 lgscreen:text-center lgscreen:mx-auto">
                                    <div className="footer-navbar-menu">
                                        <ul className="grid gap-y-2 lg:max-w-110">
                                            <h5 className='title'><Link to="/">About</Link></h5>
                                            <li><Link to="/">Our People</Link></li>
                                            <li><Link to="/">Community & Conservation</Link></li>
                                            <li><Link to="/">Offers</Link></li>
                                            <li><Link to="/">Rates</Link></li>
                                            <li><Link to="/">Gallery</Link></li>
                                            <li><Link to="/">Need To Know</Link></li>
                                            <li><Link to="/">Blogs</Link></li>
                                            <li><Link to="/">Awards</Link></li>
                                            <li><Link to="/">Press</Link></li>
                                            <li><Link to="/">Lemala Cubs</Link></li>
                                            <li><Link to="/">Contact</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="w-full md:w-3/12 lgscreen:text-center lgscreen:mx-auto">
                                    <div className="footer-navbar-menu">
                                        <ul className="grid gap-y-3">
                                            <h5 className='title'><Link to="/">Destinations</Link></h5>
                                            <li><Link to="/">Serengeti</Link></li>
                                            <li><Link to="/">Ngorongoro</Link></li>
                                            <li><Link to="/">Tarangire</Link></li>
                                            <li><Link to="/">River Nile</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="w-full md:w-3/12 lgscreen:text-center lgscreen:mx-auto">
                                    <div className="footer-navbar-menu">
                                        <ul className="grid gap-y-3">
                                            <h5 className='title'><Link to="/">Camps & Lodges</Link></h5>
                                            <li><Link to="/">Hamerkop House</Link></li>
                                            <li><Link to="/">Mpingo Ridge Lodge</Link></li>
                                            <li><Link to="/">Ngorongoro Tented Camp</Link></li>
                                            <li><Link to="/">Ewanjan Tented Camp</Link></li>
                                            <li><Link to="/">Nanyukie Lodge</Link></li>
                                            <li><Link to="/">Mara & Ndutu Tented Camps</Link></li>
                                            <li><Link to="/">Kuria Hills Lodge</Link></li>
                                            <li><Link to="/">Wildwaters Lodge</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="w-full md:w-3/12 lgscreen:text-center flex justify-center lgscreen:mx-auto">
                                    <div className="footer-navbar-menu">
                                        <ul className="grid gap-y-3">
                                            <h5 className='title'><Link to="/">Experiences</Link></h5>
                                            <li><Link to="/">Walking Safari</Link></li>
                                            <li><Link to="/">Game Drives</Link></li>
                                            <li><Link to="/">Hot Air Balloon</Link></li>
                                            <li><Link to="/">Horse Riding</Link></li>
                                            <li><Link to="/">Rafting</Link></li>
                                            <li><Link to="/">Kayaking</Link></li>
                                            <li><Link to="/">Fishing</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr className='mt-36' />
            <div className="px-25 lg:container-fluid">
                <div className="copyright lgscreen:py-15">
                    <div className="flex flex-wrap copyright pt-19 pb-37 justify-between items-center mdscreen:flex-col mdscreen:justify-center">
                        <div className='lgscreen:text-center'>
                            <h5>All rights reserved © 2021 Lemala</h5>
                        </div>
                        <ul className="flex flex-wrap justify-center items-center lgscreen:pt-4">
                            <li><Link to="/">COVID-19 Protocol</Link></li>
                            <li className='lg:px-35'><Link to="/">Terms and Conditions</Link></li>
                            <li><Link to="/">Privacy Policy</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
