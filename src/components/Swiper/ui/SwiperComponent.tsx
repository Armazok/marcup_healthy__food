import { FC, memo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { SwiperDataItem } from 'modules/SwiperModule/SwiperCardsData';

import './SwiperComponent.scss';
import 'swiper/css';
import 'swiper/css/navigation';

interface ISwiper {
    items: SwiperDataItem[]
}

export const SwiperComponent: FC<ISwiper> = memo(({
                                                      items
                                                  }) => {
    return (
        <Swiper
            // @ts-ignore
            modules={[ Navigation ]}
            navigation

            spaceBetween={20}
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
