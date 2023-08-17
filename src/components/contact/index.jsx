import React, { useContext } from 'react'
import emailjs from '@emailjs/browser'
import css from './contact.module.css'
import { useRef } from 'react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { DarkModeContext } from '../../darkMode/context'

export default function Contact() {
    const [theme] = useContext(DarkModeContext);
    const { t } = useTranslation()
    const ref = useRef()
    const [success, setSuccess] = useState(null)
    const handleSubmit = () => {

        emailjs.sendForm('xislatbek2005', 'template_u0348hp', ref.current, '3IfkSgjmc8rRLF8db')
            .then((result) => {
                console.log(result.text);
                setSuccess(true)
            }, (error) => {
                console.log(error.text)
                setSuccess(false)
            });

    }
    return (
        <section className={css.contact} id='contact'>
            <div className={css.container} style={{ backgroundColor: theme ? "rgba(255, 255, 255, 0.1)" : "rgba(145, 144, 144, 0.8)" }}>
                <form ref={ref} action="" onSubmit={handleSubmit}>
                    <h2 data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom" data-aos-duration="1000">{t('Contact')}</h2>
                    <div className={css.row100}>
                        <div className={css.col}>
                            <div className={css.inputBox} data-aos="fade-up"
                                data-aos-anchor-placement="top-bottom" data-aos-duration="1000">
                                <input type="text" name='name' required='required' />
                                <span className={css.text}>{t('First Name')}</span>
                                <span className={css.line}></span>
                            </div>
                        </div>
                        <div className={css.col} data-aos="fade-up"
                            data-aos-anchor-placement="top-bottom" data-aos-duration="1000">
                            <div className={css.inputBox}>
                                <input type="text" name='' required='required' />
                                <span className={css.text}>{t('Last Name')}</span>
                                <span className={css.line}></span>
                            </div>
                        </div>
                    </div>
                    <div className={css.row100} data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom" data-aos-duration="1000">
                        <div className={css.col}>
                            <div className={css.inputBox}>
                                <input type="text" name='email' required='required' />
                                <span className={css.text}>{t('Email')}</span>
                                <span className={css.line}></span>
                            </div>
                        </div>
                        <div className={css.col} data-aos="fade-up"
                            data-aos-anchor-placement="top-bottom" data-aos-duration="1000">
                            <div className={css.inputBox}>
                                <input type="text" name='' required='required' />
                                <span className={css.text}>{t('Phone Number')}</span>
                                <span className={css.line}></span>
                            </div>
                        </div>
                    </div>

                    <div className={css.row100} data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom" data-aos-duration="1000">
                        <div className={css.col}>
                            <div className={css.inputBox}>
                                <div className={css.textarea}>
                                    <textarea required='required' name='message' rows={10}></textarea>
                                    <span className={css.text}>{t('Type Your Messege Here...')}</span>
                                    <span className={css.line}></span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={css.row100} data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom" data-aos-duration="1000">
                        <div className={css.col}>
                            <input type="submit" value={t('Send')} />
                        </div>
                    </div>
                    {success && "Your messege has been sent. We'll getback to you soon :)"}
                </form>
            </div>
        </section>
    )
}
