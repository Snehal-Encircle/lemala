import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gray-100">
            <div className="px-25 lg:container-fluid">
                <div className="form py-85">
                    <div className="form-title">
                        <h1>Hear the latest news about Lemala</h1>
                    </div>
                    <form className="xl:flex mt-52 xl:items-center">
                        <div className='name-info xl:flex'>
                            <input type="text" value="Jane" className="form-field w-full" />
                            <input type="text" placeholder="Surname" className="form-field w-full" />
                        </div>
                        <div className='xl:flex'>
                            <input type="email" placeholder="Email address" className="form-field w-full" />
                            <input type="submit" value="Subscribe" className="form-field smscreen:pr-6 xlmax:justify-center xlmax:flex xl:px-65.5 border-green-100 text-green-100" />
                        </div>

                    </form>
                </div>
                <div className="footer-nav">
                    <div className="flex flex-wrap lgscreen:pt-50 pt-100">
                        <div className="xl:w-3/12 w-full">
                            <div className="footer-info">
                                <div className="logo">
                                    <Link to="/">
                                        <img src="../images/footerlogo.png" className="max-w-[196px]  lgscreen:m-auto" alt="Logo" />
                                    </Link>
                                </div>
                                <p className='lgscreen:text-center'>
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
                        <div className="xl:w-9/12 w-full xlmax:pt-25 xl:pl-113">
                            <div className="lg:flex flex-wrap">
                                <div className="w-full md:w-22.7 lgscreen:text-center lgscreen:m-auto">
                                    <div className="footer-navbar-menu">
                                        <ul className="grid gap-y-3">
                                            <h1 className='text-xl'><Link to="/">About</Link></h1>
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
                                <div className="w-full md:w-23per lgscreen:text-center lgscreen:m-auto">
                                    <div className="footer-navbar-menu">
                                        <ul className="grid gap-y-3">
                                            <h1 className='text-xl'><Link to="/">Destinations</Link></h1>
                                            <li><Link to="/">Serengeti</Link></li>
                                            <li><Link to="/">Ngorongoro</Link></li>
                                            <li><Link to="/">Tarangire</Link></li>
                                            <li><Link to="/">River Nile</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="w-full md:w-3/12 lgscreen:text-center lgscreen:m-auto">
                                    <div className="footer-navbar-menu">
                                        <ul className="grid gap-y-3">
                                            <h1 className='text-xl'><Link to="/">Camps & Lodges</Link></h1>
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
                                <div className="w-full md:w-3/12 lgscreen:text-center flex justify-center lgscreen:m-auto">
                                    <div className="footer-navbar-menu">
                                        <ul className="grid gap-y-3">
                                            <h1 className='text-xl'><Link to="/">Experiences</Link></h1>
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
            <hr className='my-36' />
            <div className="px-25 lg:container-fluid">
                <div className="copyright lg:py-30 py-15">
                    <div className="flex flex-wrap justify-between items-center mdscreen:flex-col mdscreen:justify-center">
                        <div>
                            <h2 className="text-black-100">All rights reserved © 2021 Lemala</h2>
                        </div>
                        <ul className="flex flex-wrap justify-center lgscreen:space-x-4 items-center py-25">
                            <h2 className='text-black-100'><Link to="/">COVID-19 Protocol</Link></h2>
                            <h2 className='text-black-100 lg:px-35'><Link to="/">Terms and Conditions</Link></h2>
                            <h2 className='text-black-100'><Link to="/">Privacy Policy</Link></h2>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
