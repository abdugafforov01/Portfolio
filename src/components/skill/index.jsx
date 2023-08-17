import React from 'react'
import css from './skill.module.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { ReactComponent as Sass } from '../../assets/svg/icons8-sass.svg'
import { ReactComponent as Java } from '../../assets/svg/icons8-javascript (1).svg'
import { ReactComponent as Reactjs } from '../../assets/svg/icons8-react.svg'
import { ReactComponent as Vue } from '../../assets/svg/icons8-vue-js.svg'
import { ReactComponent as Bootstrap } from '../../assets/svg/icons8-bootstrap.svg'
import { ReactComponent as Html } from '../../assets/svg/icons8-html.svg'
import { ReactComponent as Css } from '../../assets/svg/icons8-css.svg'
import { useContext } from 'react';
import { DarkModeContext } from '../../darkMode/context';
import { useTranslation } from 'react-i18next';
export default function Skills() {
    const [theme] = useContext(DarkModeContext);
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    const { t } = useTranslation()
    return (
        <section className={css.skill} id='skills' data-aos="fade-up"
            data-aos-duration="2000">
            <div className={css.row}>
                <div className={css.col}>
                    <div className={css.skill_bx} style={{ backgroundColor: theme ? "rgba(0, 0, 0, 0.3)" : "#696969" }}>
                        <h2>{t('Skills')}</h2>
                        <p>{t('Skills I know in programming')}</p>
                        <Carousel responsive={responsive} infinite={true} className={css.slider}>
                            <div className={css.item}>
                                <Html />
                                <h5>96%</h5>
                            </div>
                            <div className={css.item}>
                                <Css />
                                <h5>95%</h5>
                            </div>
                            <div className={css.item}>
                                <Sass />
                                <h5>90%</h5>
                            </div>
                            <div className={css.item}>
                                <Bootstrap />
                                <h5>100%</h5>
                            </div>
                            <div className={css.item}>
                                <Java />
                                <h5>85%</h5>
                            </div>
                            <div className={css.item}>
                                <Reactjs />
                                <h5>92%</h5>
                            </div>
                            <div className={css.item}>
                                <Vue />
                                <h5>70%</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </section>
    )
}
