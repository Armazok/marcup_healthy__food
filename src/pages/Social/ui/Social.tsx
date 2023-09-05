import { FC, memo } from 'react';
import './Social.scss';

interface ISocial {

}

export const Social: FC<ISocial> = memo(({}) => {
    return (
        <section className="social">
            <div className="social__container">
                <div className="social__content content__social">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad atque aut blanditiis cumque,
                    dignissimos, dolorum, earum facere id molestias nihil nisi nulla vel voluptates? Blanditiis dolore
                    dolorem facilis in ipsa.
                </div>
            </div>
        </section>
    );
});
