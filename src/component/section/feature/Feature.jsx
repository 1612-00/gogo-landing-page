import './feature.scss';

import feature_img from '../../../asset/image/plesant-design.png';
import reponsive_img from '../../../asset/image/extra-responsive.png';
import superfine_img from '../../../asset/image/superfine-charts.png';
import layout_for_job from '../../../asset/image/layouts-for-the-job.png';
import smart_menu from '../../../asset/image/smart-menu.png';

const Feature = () => {
    return (
        <div className='feature container' id='feature'>
            <div className='section-header'>
                <h2>Features At a Glance</h2>
                <span>
                    We tried to create an admin theme that we would like to use
                    ourselves so we listed our priorities. We would like to have
                    a theme that is not over complicated to use, does the job
                    well, contains must have omponents and looks really nice.
                </span>
            </div>

            <div className='feature__item'>
                <div className='feature__item__info'>
                    <h3 className='title'>Pleasant Design</h3>
                    <div className='description'>
                        <span>
                            As a web developer we enjoy to work on something
                            looks nice. It is not an absolute necessity but it
                            really motivates us that final product will look
                            good for user point of view.
                        </span>
                        <span>
                            So we put a lot of work into colors, icons,
                            composition and design harmony. Themed components
                            and layouts with same design language.
                        </span>
                        <span>
                            We kept user experience principles always at the
                            heart of the design process.
                        </span>
                    </div>
                </div>
                <div className='feature__item__img'>
                    <img src={feature_img} alt='' />
                </div>
            </div>

            <div className='feature__item'>
                <div className='feature__item__img'>
                    <img src={reponsive_img} alt='' />
                </div>
                <div className='feature__item__info'>
                    <h3 className='title'>Extra Responsive</h3>
                    <div className='description'>
                        <span>
                            Xxs breakpoint is for smaller screens that has a
                            resolution lower than 420px. Xs works between 576px
                            and 420px. Xxl breakpoint is for larger screens that
                            has a resolution higher than 1440px. Xl works
                            between 1200px and 1440px.
                        </span>
                        <span>
                            With this approach we were able to create better
                            experiences for smaller and larger screens.
                        </span>
                    </div>
                </div>
            </div>

            <div className='feature__item'>
                <div className='feature__item__info'>
                    <h3 className='title'>Superfine Charts</h3>
                    <div className='description'>
                        <span>
                            Using charts is a good way to visualize data but
                            they often look ugly and break the rhythm of design.
                        </span>
                        <span>
                            We concentrated on a single chart library and tried
                            to create charts that look good with color, opacity,
                            border and shadow.
                        </span>
                        <span>
                            Used certain plugins and created some to make charts
                            even more useful and beautiful.
                        </span>
                    </div>
                </div>
                <div className='feature__item__img'>
                    <img src={superfine_img} alt='' />
                </div>
            </div>

            <div className='feature__item'>
                <div className='feature__item__img'>
                    <img src={layout_for_job} alt='' />
                </div>
                <div className='feature__item__info'>
                    <h3 className='title'>Layouts for the Job</h3>
                    <div className='description'>
                        <span>
                            Layouts are the real thing, they need to be accurate
                            and right for the job. They should be functional for
                            both user and developer.
                        </span>
                        <span>
                            We created lots of different layouts for different
                            jobs.
                        </span>
                        <span>
                            Listing pages with view mode changing capabilities,
                            shift select and select all functionality,
                            application layouts with an additional menu,
                            authentication and error layouts which has a
                            different design than the other pages were our main
                            focus. We also created details page with tabs that
                            can hold many components.
                        </span>
                    </div>
                </div>
            </div>

            <div className='feature__item'>
                <div className='feature__item__info'>
                    <h3 className='title'>Smart Menu</h3>
                    <div className='description'>
                        <span>
                            Instead of good old single panel menus with
                            accordion structure that looks over complicated, we
                            created 2 panels and categorized pages accordingly.
                        </span>
                        <span>
                            The default menu auto hides sub panel when
                            resolution is under some breakpoint to open some
                            space. You may also hide menu completely or use only
                            main panel open only.
                        </span>
                    </div>
                </div>
                <div className='feature__item__img'>
                    <img src={smart_menu} alt='' />
                </div>
            </div>
        </div>
    );
};

export default Feature;
