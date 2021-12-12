import './component.scss';
import component from '../../../asset/image/components.jpg';

const Component = () => {
    return (
        <div className='component'>
            <div className='container'>
                <div className='section-header'>
                    <h2>Components</h2>
                    <span>
                        We used most popular and well managed open source
                        components with bootstrap components. Combined them into
                        even more useful ones. Themed them with same design
                        principles and created a design harmony between
                        components and layouts.
                    </span>
                    <span>
                        From carousels to charts, switches to list we tried to
                        provide components that we like to use on our
                        development processes.
                    </span>
                </div>
            </div>
            <div className='component__img'>
                <img src={component} alt='' />
            </div>
        </div>
    );
};

export default Component;
