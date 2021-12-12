import './section.scss';

import Feature from './feature/Feature';
import Structure from './structures/Structure';
import Component from './component/Component';
import Application from './application/Application';
import Themes from './themes/Themes';
import Enjoy from './enjoy/Enjoy';

const Section = () => {
    return (
        <div className='section'>
            <Feature />
            <Structure />
            <Component />
            <Application />
            <Themes />
            <Enjoy />
        </div>
    );
};

export default Section;
