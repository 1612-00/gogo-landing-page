/* eslint-disable jsx-a11y/anchor-is-valid */
import './footer.scss';

import logo from '../../asset/logo-white.svg';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer__logo'>
                <a href='#' className='footer__logo__a'>
                    <img src={logo} alt='' />
                </a>
            </div>
            <div className='footer__copyright'>
                <span>2021 © ColoredStrategies</span>
            </div>
        </div>
    );
};

export default Footer;
