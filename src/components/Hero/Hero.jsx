import React from 'react'
import css from './Hero.module.css'
import HeroImg from '../../assets/hero.png'
import {FaShoppingBag} from 'react-icons/fa'
import {BsArrowReturnRight} from 'react-icons/bs'
const Hero = () => {
  return (
    <div className={css.container}>
        {/* left side*/ }
        <div className={css.h_sides}>
            <span className={css.text1}>KADIN ERKEK VE ÇOCUK ÖZEL 100TL VE ÜZERİ ALIŞVERİŞE  %40'a VARAN İNDİRİM</span>
            <br />
            <div className={css.text2}>
                <span>Trendy Colleciton</span>
                <span>Sınırlı Sayıda Pazartesi Kuponu "Çok Al Az Öde Kampanyaları Hariç Tüm Amazon Akkoç Ürünlerinde Geçerlidir."</span>
            </div>
        </div>
        {/*middle side hero image */}
        <div className={css.wrapper}>
            <div className={css.blueCircle}></div>
              <img src={HeroImg} alt="" width={600} />
              <div className={css.cart2}>
                <FaShoppingBag/>
                <div className={css.signup}>
                  <span>Best Signup Offers</span>
                  <div>
                    <BsArrowReturnRight/>
                  </div>
                </div>
              </div>
            
        </div>
        {/* right side*/}
        <div className={css.h_sides}>
          <div className={css.traffic}>
            <span> 1.5m</span>
            <span> Monthly Traffic</span>
          </div>
          <div className={css.customers}>
            <span>100k </span>
            <span>Happy Customers</span>
          </div>
        </div>
    </div>
  )
}

export default Hero