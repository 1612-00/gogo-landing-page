/* eslint-disable jsx-a11y/anchor-is-valid */
import './header.scss';
import { useRef, useEffect } from 'react';

import logoBlack from '../../asset/logo.svg';
import logo from '../../asset/logo-white.svg';

const clickOutsideRef = (content_ref, toggle_ref) => {
    document.addEventListener('mousedown', (e) => {
        if (toggle_ref.current && toggle_ref.current.contains(e.target)) {
            content_ref.current.classList.add('active');
        } else {
            if (
                content_ref.current &&
                !content_ref.current.contains(e.target)
            ) {
                content_ref.current.classList.remove('active');
            }
        }
    });
};

const Header = () => {
    const header_ref = useRef(null);
    const header_toggle = useRef(null);
    const header_content = useRef(null);

    clickOutsideRef(header_content, header_toggle);

    const onClick = () => {
        header_content.current.classList.add('active');
    };

    useEffect(() => {
        const shrinkHeader = () => {
            if (
                document.body.scrollTop > 50 ||
                document.documentElement.scrollTop > 50
            ) {
                header_ref.current.classList.add('shrink');
            } else {
                header_ref.current.classList.remove('shrink');
            }
        };

        window.addEventListener('scroll', shrinkHeader);
        return () => {
            window.removeEventListener('scroll', shrinkHeader);
        };
    }, []);

    return (
        <div ref={header_ref} className='header'>
            <div className='header__inner container'>
                <div className='header__logo'>
                    <div className='header__logo__white'>
                        <img src={logo} alt='' />
                    </div>
                    <div className='header__logo__black'>
                        <img src={logoBlack} alt='' />
                    </div>
                </div>
                <div
                    className='header__toggle'
                    onClick={onClick}
                    ref={header_toggle}
                >
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        style={{ fill: 'white' }}
                    >
                        <path d='M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z'></path>
                    </svg>
                </div>
                <div className='header__right'>
                    <ul
                        className='header__right__nav'
                        id='header__right__nav'
                        ref={header_content}
                    >
                        <div className='header__right__nav__logo'>
                            <img src={logoBlack} alt='' />
                        </div>
                        <li>
                            <a href='#'>feature</a>
                        </li>
                        <li>
                            <a href='#'>layouts</a>
                        </li>
                        <li>
                            <a href='#'>components</a>
                        </li>
                        <li>
                            <a href='#'>apps</a>
                        </li>
                        <li>
                            <a href='#'>themes</a>
                        </li>
                        <hr className='mobile-hr' />
                        <li>
                            <div className='header__right__nav__buy'>
                                <a href='#'>buy</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;
