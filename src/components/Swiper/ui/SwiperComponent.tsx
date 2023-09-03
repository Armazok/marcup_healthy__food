import { FC, memo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Navigation, Pagination } from 'swiper/modules';
import { SwiperDataItem } from '../SwiperData/SwiperData';

import './SwiperComponent.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface ISwiper {
    items: SwiperDataItem[]
}

export const SwiperComponent: FC<ISwiper> = memo(({
                                                      items
                                                  }) => {
    return (
        <Swiper
            modules={[ Navigation, Pagination, A11y ]}
            navigation
            pagination={{clickable: true}}

            spaceBetween={-200}
            slidesPerView={2}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            {items.map((el) => {
                return (
                    <SwiperSlide key={el.id}>
                        <img src={el.src} alt=""/>
                    </SwiperSlide>
                )
            })}
        </Swiper>
    );
});
