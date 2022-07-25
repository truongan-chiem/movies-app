import React from 'react';
import logo from '../../assets/tmovie.png';
import bg from '../../assets/footer-bg.jpg';

import './footer.scss';
import { Link } from 'react-router-dom';
const Footer = () => {
    const footerMenus = [
        [
            {
                display: 'Home',
                path: '/',
            },
            {
                display: 'Contact us',
                path: '/',
            },
            {
                display: 'Term of services',
                path: '/',
            },
            {
                display: 'About us',
                path: '/',
            },
        ],
        [
            {
                display: 'Live',
                path: '/',
            },
            {
                display: 'FAQ',
                path: '/',
            },
            {
                display: 'Premium',
                path: '/',
            },
            {
                display: 'Pravacy policy',
                path: '/',
            },
        ],
        [
            {
                display: 'You must watch',
                path: '/',
            },
            {
                display: 'Recent release',
                path: '/',
            },
            {
                display: 'Top IMDB',
                path: '/',
            },
        ],
    ];
    return (
        <div className="footer" style={{ backgroundImage: `url(${bg})` }}>
            <div className="footer__contact container">
                <div className="footer__contact__logo">
                    <div className="logo">
                        <img src={logo} alt="" />
                        <Link to={'/'}>tMovies</Link>
                    </div>
                </div>

                <div className="footer__contact__menus">
                    {footerMenus.map((menus, index) => (
                        <div className="footer__contact__menu" key={index}>
                            {menus.map((menu, index) => (
                                <Link key={index} to={menu.path}>
                                    {menu.display}
                                </Link>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Footer;
