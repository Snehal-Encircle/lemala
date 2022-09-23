import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
            <header className="absolute z-50 w-full">
                <div className="px-25 lg:container-fluid relative z-50">
                    <nav className="navbar relative flex items-center justify-between">
                        <div className="logo flex">
                            <Link className="navbar-logo" to="/">
                                <img
                                    src="../images/logo.png"
                                    className="pt-30 max-w-[235px] laptopmini:max-w-[200px]  mdscreen:max-w-[150px]"
                                    alt="Logo"
                                />
                            </Link>
                        </div>
                        <div className="navigations flex justify-end lg:pt-50">
                            <ul className="flex items-center lgscreen:hidden">
                                <li>Camps & Lodges</li>
                                <li>Destinations</li>
                                <li>Experiences</li>
                            </ul>
                            <button className='btn text-white xlmax:hidden'>
                                Plan Your Trip
                            </button>
                            <div className="hemburgur-icon flex justify-end pl-49 lgscreen:pt-30">
                                <img src="../images/menuicon.svg" alt="" />
                            </div>
                        </div>
                    </nav>

                </div>
            </header>
        </>
    );
}

export default Header;
