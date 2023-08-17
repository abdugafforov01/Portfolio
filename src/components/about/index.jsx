import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import './about.css'
import my from '../../assets/png/my.jpg'
import it from '../../assets/png/it.jpg'
import me from '../../assets/png/me.jpg'
import mk from '../../assets/png/mk.jpg'
import sto2 from '../../assets/png/sto2.jpg'
import { useTranslation } from 'react-i18next';


export default function About() {
    const { t } = useTranslation()
    return (
        <div className='about' id='about'>
            <div className='flex'>
                <Swiper
                    data-aos="fade-right"
                    data-aos-esing="ease-out-cubic" data-aos-duration="1000"
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 100,
                        modifier: 3,
                        slideShadows: true,
                    }}
                    loop={true}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination]}
                    className="swiper"
                >
                    <SwiperSlide>
                        <img src={it} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={mk} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={my} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={mk} alt="" />
                    </SwiperSlide>
                </Swiper>
                <div className='title'  data-aos="fade-left"
                    data-aos-esing="ease-out-cubic" data-aos-duration="1000">
                    <h1>{t('About Me')}</h1>
                    <h3>{t('Frontend Developer !')}</h3>
                    <p>{t('Hello, my name is Abdugaforov Khyslatbek, I was born on November 14, 2005, my nationality is Uzbek. I am very interested in programming and want to get to senior level and create websites that will benefit people')}</p>
                    <a href="#skills"><button>{t('Read More')}</button></a>
                </div>
            </div>
        </div>
    )
}
