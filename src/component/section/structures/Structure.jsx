import './structure.scss';

import StructureCard from './structure_card/StructureCard';

import menu_default from '../../../asset/layout/menu-default.jpg';
import menu_subhidden from '../../../asset/layout/menu-subhidden.jpg';
import menu_hidden from '../../../asset/layout/menu-hidden.jpg';
import image_list from '../../../asset/layout/image-list.jpg';
import thumb_list from '../../../asset/layout/thumb-list.jpg';
import data_list from '../../../asset/layout/data-list.jpg';
import details from '../../../asset/layout/details.jpg';
import authentication from '../../../asset/layout/authentication.jpg';
import search_result from '../../../asset/layout/search-result.jpg';
import single_page_application from '../../../asset/layout/spa.jpg';
import data_list_app from '../../../asset/layout/data-list-app-menu-hidden.jpg';
import tabs from '../../../asset/layout/tabs.jpg';

const Structure = () => {
    return (
        <div className='structure'>
            <div className='container'>
                <div className='section-header'>
                    <h2>Structures & Layouts</h2>
                    <span>
                        We did our best to create layouts for various needs that
                        developers might have and best experience for users.
                        They are clean and slick. They function well and look
                        good at the same time.
                    </span>
                </div>

                <div className='structure__grid-layout'>
                    <StructureCard
                        img={menu_default}
                        description='Menu Default'
                    />
                    <StructureCard
                        img={menu_subhidden}
                        description='Menu Subhidden'
                    />
                    <StructureCard
                        img={menu_hidden}
                        description='Menu Hidden'
                    />
                    <StructureCard img={image_list} description='Image List' />
                    <StructureCard img={thumb_list} description='Thumb List' />
                    <StructureCard img={data_list} description='Data List' />
                    <StructureCard img={details} description='Details' />
                    <StructureCard
                        img={authentication}
                        description='Authentication'
                    />
                    <StructureCard
                        img={search_result}
                        description='Search Results'
                    />
                    <StructureCard
                        img={single_page_application}
                        description='Single Page Application'
                    />
                    <StructureCard
                        img={data_list_app}
                        description='Data List App Menu Hidden'
                    />
                    <StructureCard img={tabs} description='Tabs' />
                </div>
            </div>
        </div>
    );
};

export default Structure;
