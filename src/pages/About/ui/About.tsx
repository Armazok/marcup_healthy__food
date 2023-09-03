import { FC, memo } from 'react';
import './About.scss';
import { SwiperComponent, swiperData } from 'components/Swiper';

interface IAbout {

}

export const About: FC<IAbout> = memo(({}) => {
    return (
        <section className="about">
            <div className="about__container">
                <div className="about__content content__about">

                    <div className="content__about-header header__about">
                        <div className="header__about__title">
                            <p>
                                The Basics Of Healthy Food <span>About</span>
                            </p>
                        </div>

                        <div className="header__about__subtitle">
                            <p>
                                In aliqua ea ullamco ad est ex non deserunt nulla. Consectetur sint ea aliquip aliquip
                                consectetur voluptate est. Eu minim dolore laboris enim mollit voluptate irure esse
                                aliquip.
                            </p>
                        </div>
                    </div>


                    <div className="content__about-swiper swiper__about">
                        <div className="swiper__about__wrapper">
                            <SwiperComponent items={swiperData}/>
                        </div>
                    </div>


                </div>

            </div>
        </section>
    );
});
