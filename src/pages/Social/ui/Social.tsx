import { FC, memo } from 'react';
import { HeaderSection } from 'components/HeaderSection';
import { SocialCard } from 'modules/SocialModule/SocialCard';
import Twitter from '../../../assets/Social/twitter.svg';
import Instagram from '../../../assets/Social/instagram.svg';
import Facebook from '../../../assets/Social/facebook.svg';
import './Social.scss';

interface ISocial {

}

export const Social: FC<ISocial> = memo(({}) => {
    return (
        <section className="social">
            <div className="social__container">
                <div className="social__content content__social">

                    <div className="content__social-header">
                        <HeaderSection
                            title={'We in Social'}
                            bgTitle={'SOCIAL'}
                        />
                    </div>

                    <div className="content__social-cards cards__social">

                        <SocialCard
                            srcSocial={Twitter}
                            nameSocial={'Twitter'}
                            postData={'24 Jun at 16:20 pm'}
                            postText={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut Lorem ipsum dolor sit amet, consectetur adipiscing'}
                            postAuthor={'@DennisFerguson'}
                        />

                        <SocialCard
                            instagram

                            srcSocial={Instagram}
                            nameSocial={'Instagram'}
                        />

                        <SocialCard
                            srcSocial={Facebook}
                            nameSocial={'Facebook'}
                            postData={'26 Jun at 16:20 pm'}
                            postText={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, consectetur adipiscing'}
                        />


                    </div>

                </div>
            </div>
        </section>
    );
});
