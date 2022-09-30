import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
            <header className="absolute z-50 w-full">
                <div className="container-fluid relative z-50">
                    <nav className="navbar relative flex items-center justify-between pt-30 lg:pt-50">
                        <div className="logo flex">
                            <Link className="navbar-logo" to="/">
                                <img
                                    src="../images/logo.png"
                                    className="max-w-[235px] laptopmini:max-w-[200px]"
                                    alt="Logo"
                                />
                            </Link>
                        </div>
                        <div className="navigations flex justify-end">
                            <ul className="flex items-center lgscreen:hidden">
                                <li><Link to='/'>Camps & Lodges</Link></li>
                                <li><Link to='/'>Destinations</Link></li>
                                <li><Link to='/'>Experiences</Link></li>
                            </ul>
                            <button className='btn text-white xlmax:hidden'>
                                Plan Your Trip
                            </button>
                            <div className="hemburgur-icon flex justify-end pl-49"
                                type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                                <img src="../images/menuicon.svg" alt="" className="hover:cursor-pointer" />
                            </div>
                        </div>
                    </nav>
                </div>

                <div className="menu-inner">
                    <div className="offcanvas offcanvas-end fixed bottom-0 flex flex-col max-w-full invisible bg-clip-padding shadow-sm outline-none transition duration-1000 ease-out top-0 right-0 w-full" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel" style={{ backgroundImage: `url("../images/inner-menu-bg.jpg")` }}>
                        <div className="px-25 lg:container-fluid">
                            <div className="offcanvas-header flex items-center justify-between pt-50">
                                <div className="offcanvas-title" id="offcanvasRightLabel">
                                    <Link className="navbar-logo" to="/">
                                        <img
                                            src="../images/logo.png"
                                            className="max-w-[200px] lg:max-w-[235px]"
                                            alt="Logo"
                                        />
                                    </Link>
                                </div>
                                <div className="">
                                    <button className='btn text-white lgscreen:hidden'>
                                        Plan Your Trip
                                    </button>
                                    <button type="button" className="lg:pl-45 align-middle btn-close box-content w-5 lg:w-30 h-21 hover:opacity-50 focus:shadow-none focus:outline-none focus:opacity-100" data-bs-dismiss="offcanvas" aria-label="Close">
                                        <img src="../images/close.svg" alt="" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="offcanvas-body flex-grow items-center overflow-y-auto">
                            <div className="container lgscreen:flex-col flex justify-around items-center lgscreen:py-50 lg:pt-165">
                                <ul className="inner-menu-big lgscreen:text-center">
                                    <li><Link to='/'>Our Story</Link></li>
                                    <li><Link to='/'>Destinations</Link></li>
                                    <li><Link to='/'>Camps & Lodges</Link></li>
                                    <li><Link to='/'>Experiences</Link></li>
                                </ul>
                                <ul className="inner-menu-small lgscreen:text-center py-30 lgmin:py-75 lgmin:pr-12per lgscreen:border-none border-r border-green-300 border-opacity-30">
                                    <li><Link to='/'>Offers & Conservation</Link></li>
                                    <li><Link to='/'>Gallery</Link></li>
                                    <li><Link to='/'>Blog</Link></li>
                                    <li><Link to='/'>Need To Know</Link></li>
                                    <li><Link to='/'>Rates</Link></li>
                                    <li><Link to='/'>Press</Link></li>
                                    <li><Link to='/'>Awards</Link></li>
                                    <li><Link to='/'>Agent Page</Link></li>
                                </ul>
                                <div className="contact-detail items-center font-body text-10 leading-18 text-white">
                                    <div className="address lgscreen:text-center font-normal text-opacity-75">
                                        <h5>Lemala Camps</h5>
                                        <h5>P.O.Box 14529, Arusha. Tanzania.</h5>
                                    </div>
                                    <div className="lgscreen:text-center">
                                        <Link to="/" className="font-bold">View on Google Maps</Link>
                                    </div>
                                    <div className="contacts font-normal pt-2 lg:pt-4">
                                        <div className="text-opacity-75 lgscreen:text-center pb-25 lg:pb-47">
                                            <h5>Tel: +255682933933</h5>
                                            <h5>res@lemalacamp.com</h5>
                                        </div>
                                        <div className="lgscreen:flex lgscreen:justify-center">
                                            <Link to='/' className=" pb-2 text-15 leading-22 relative after:absolute after:block after:w-full after:pt-1 after:border-b after:border-white after:duration-300 hover:after:w-0">
                                                Contact Us
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </header>
        </>
    );
}

export default Header;
