import { FC, memo } from 'react';
import { Button } from 'ui/Button';
import Item_1 from 'assets/Social/item_1.png';
import Item_2 from 'assets/Social/item_2.png';
import Item_3 from 'assets/Social/item_3.png';
import Item_4 from 'assets/Social/item_4.png';
import Item_5 from 'assets/Social/item_5.png';
import Item_6 from 'assets/Social/item_6.png';
import './SocialCard.scss';

interface ISocialCard {
    instagram?: boolean
    nameSocial: string
    postData?: string
    postText?: string
    postAuthor?: string
    srcSocial: string
}

export const SocialCard: FC<ISocialCard> = memo(({
                                                     instagram,
                                                     nameSocial,
                                                     postData,
                                                     postText,
                                                     postAuthor,
                                                     srcSocial
                                                 }) => {
    return (
        <div className="cards__social__wrapper">
            <div className="cards__social-header header__social">

                <div className="header__social__name">

                    <img src={srcSocial} alt=""/>
                    <span>{nameSocial}</span>

                </div>

                <div className="header__social__btn">
                    <Button label={'follow us'}/>
                </div>
            </div>

            {
                instagram
                    ? <div className="cards__social-instagram instagram__social">
                        <div className="instagram__social__wrapper">

                            <img src={Item_1} alt=""/>
                            <img src={Item_2} alt=""/>
                            <img src={Item_3} alt=""/>
                            <img src={Item_4} alt=""/>
                            <img src={Item_5} alt=""/>
                            <img src={Item_6} alt=""/>

                        </div>
                    </div>
                    : <div className="cards__social-post post__social">
                        <div className="post__social__date">
                            <p>{postData}</p>
                        </div>

                        <div className="post__social__text">
                            <p>
                                {postText}
                            </p>
                        </div>

                        <div className="post__social__author">
                            <p>{postAuthor}</p>
                        </div>
                    </div>
            }

        </div>
    );
});
