import './listCard.scss';

import { Swiper, SwiperSlide } from 'swiper/react';
import Card from './card/Card';

const swiperOptions = {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 25,
    breakpoints: {
        100: {
            slidesPerView: 1,
        },
        600: {
            slidesPerView: 2,
            spaceBetween: 15,
        },
        1024: {
            slidesPerView: 4,
        },
    },
};

const ListCard = () => {
    return (
        <Swiper {...swiperOptions} className='list-card'>
            <SwiperSlide>
                <Card
                    icon='bx bx-mouse-alt'
                    title='Right Click Menu'
                    description='Increases overall usability of the project by providing additional actions menu.'
                />
            </SwiperSlide>
            <SwiperSlide>
                <Card
                    icon='bx bx-video'
                    title='Video Player'
                    description='Carefully themed multimedia players powered by Video.js library with Youtube support.'
                />
            </SwiperSlide>
            <SwiperSlide>
                <Card
                    icon='bx bxs-keyboard'
                    title='Keyboard Shortcuts'
                    description='Easily configurable keyboard shortcuts plugin that highly improves user experience.'
                />
            </SwiperSlide>
            <SwiperSlide>
                <Card
                    icon='bx bx-food-menu'
                    title='Two Panels Menu'
                    description='Three states two panels icon menu that looks good, auto resizes and does the job well.'
                />
            </SwiperSlide>
            <SwiperSlide>
                <Card
                    icon='bx bxs-cat'
                    title='Icons Mind'
                    description='1040 icons in 53 different categories, designed pixel perfect and ready for your project.'
                />
            </SwiperSlide>
            <SwiperSlide>
                <Card
                    icon='bx bx-palette'
                    title='20 Color Schemes'
                    description='Colors, icons and design harmony that creates excellent themes to cover entire project.'
                />
            </SwiperSlide>
            <SwiperSlide>
                <Card
                    icon='bx bx-spa'
                    title='3 Applications'
                    description='Applications that mostly made of components are the way to get started to create something similar.'
                />
            </SwiperSlide>
            <SwiperSlide>
                <Card
                    icon='bx bx-repost'
                    title='Extra Responsive'
                    description='Custom Bootstrap 4 xxs & xxl classes delivers better experiences for smaller and larger screens.'
                />
            </SwiperSlide>
        </Swiper>
    );
};

export default ListCard;
