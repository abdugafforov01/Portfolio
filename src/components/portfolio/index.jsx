import React from 'react'
import css from './portfolio.module.css'
import hydra from '../../assets/png/hydra.png'
import loftmebel from '../../assets/png/loftmebel.png'
import youtube from '../../assets/png/Cover.png'
import product from '../../assets/png/product.png'
import brella from '../../assets/png/brella.png'
import job from '../../assets/png/job.png'
import googlestore from '../../assets/png/googestore.png'
import restoran from '../../assets/png/restoran.png'
import { useTranslation } from 'react-i18next'
import { useContext } from 'react'
import { DarkModeContext } from '../../darkMode/context'
export default function Portfolio() {
    const [theme, setTheme] = useContext(DarkModeContext);
    const { t } = useTranslation()
    return (
        <section className={css.portfolio} id='portfolio'>
            <div className={css.title} data-aos="zoom-in" data-aos-esing="ease-out-cubic" data-aos-duration="1500">{t('Portfolio')}</div>
            <div className={css.row}>
                <div className={css.col} >
                    <img src={hydra} alt="" data-aos="zoom-in" data-aos-esing="ease-out-cubic" data-aos-duration="1500" />
                    <h3 style={{ color: theme ? "aliceblue" : "#0007" }}>{t('Hydra & Landing Page')}</h3>
                    <a href="https://github.com/abdugafforov01/HYDRA"><button>GitHub</button></a>
                </div>
                <div className={css.col}>
                    <img src={loftmebel} alt="" data-aos="zoom-in" data-aos-esing="ease-out-cubic" data-aos-duration="1500" />
                    <h3 style={{ color: theme ? "aliceblue" : "#0007" }}>{t('Loft Mebel online shopping')}</h3>
                    <a href="https://github.com/abdugafforov01/MebelShop"><button>GitHub</button></a>
                </div>
                <div className={css.col}>
                    <img src={job} alt="" data-aos="zoom-in" data-aos-esing="ease-out-cubic" data-aos-duration="1500" />
                    <h3 style={{ color: theme ? "aliceblue" : "#0007" }}>{t('Green space & web')}</h3>
                    <a href="https://github.com/abdugafforov01/SquareDash"><button>GitHub</button></a>
                </div>
                <div className={css.col}>
                    <img src={youtube} alt="" data-aos="zoom-in" data-aos-esing="ease-out-cubic" data-aos-duration="1500" />
                    <h3 style={{ color: theme ? "aliceblue" : "#0007" }}>{t('Youtube UI clone design')}</h3>
                    <a href="https://github.com/abdugafforov01/Youtube-UI-Clon"><button>GitHub</button></a>
                </div>
                <div className={css.col}>
                    <img src={brella} alt="" data-aos="zoom-in" data-aos-esing="ease-out-cubic" data-aos-duration="1500" />
                    <h3 style={{ color: theme ? "aliceblue" : "#0007" }}>{t('Brella web site & Landing page')}</h3>
                    <a href="https://github.com/abdugafforov01/Brella"><button>GitHub</button></a>
                </div>
                <div className={css.col}>
                    <img src={product} alt="" data-aos="zoom-in" data-aos-esing="ease-out-cubic" data-aos-duration="1500" />
                    <h3 style={{ color: theme ? "aliceblue" : "#0007" }}>{t('Product & Work product')}</h3>
                    <a href="https://github.com/abdugafforov01/Atelier"><button>GitHub</button></a>
                </div>
                <div className={css.col}>
                    <img src={googlestore} alt="" data-aos="zoom-in" data-aos-esing="ease-out-cubic" data-aos-duration="1500" />
                    <h3 style={{ color: theme ? "aliceblue" : "#0007" }}>{t('Google Store & online phones')}</h3>
                    <a href="https://github.com/abdugafforov01/GoogleStore"><button>GitHub</button></a>
                </div>
                <div className={css.col}>
                    <img src={restoran} alt="" data-aos="zoom-in" data-aos-esing="ease-out-cubic" data-aos-duration="1000" />
                    <h3 style={{ color: theme ? "aliceblue" : "#0007" }}>{t('The main restaurant')}</h3>
                    <a href="https://github.com/abdugafforov01/Restaurant_Menu"><button>GitHub</button></a>
                </div>
            </div>
        </section>
    )
}
