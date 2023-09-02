import { FC, memo } from 'react';
import './About.scss';

interface IAbout {

}

export const About: FC<IAbout> = memo(({}) => {
    return (
        <section className="about">
            <div className="about__container">
                <div className="about__content content__about">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid assumenda, consequuntur cum
                    distinctio dolor, hic inventore ipsa iure labore, molestiae nam placeat provident quasi quia
                    sapiente sunt tempora voluptas voluptate?
                </div>
            </div>
        </section>
    );
});
