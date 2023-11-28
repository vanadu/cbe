import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import CBEHeaderBrandingMobile from '../../public/images/img-cbe-branding-mobile.png'
import CBEHeaderBrandingDesktop from '../../public/images/img-cbe-branding-desktop.png'
import headerimg from '../../public/images/img-header.png'

// import Branding from '../components/Branding'
import Navbar from './Navbar'


import * as styles from '../styles/Header.module.scss'

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.top_bar}>
        <div className={styles.branding}>
          <Link 
            href='/'
            className={styles.branding_mobile_link}
          >
            <Image 
              src={CBEHeaderBrandingMobile} 
              width="0"
              height="0"
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }}
              className={styles.branding_mobile_img} alt="XXX"
              />
          </Link>
          <Link href='/'>
            <Image 
              src={CBEHeaderBrandingDesktop} 
              width="0"
              height="0"
              sizes="100vw"
              // style={{ width: '100%', height: 'auto' }}
              className={styles.branding_desktop} alt="XXX"
              />
          </Link>
        </div>
        <Navbar />
      </div>
      <div className={styles.header_img_box}>
        <Image 
          src={headerimg} 
          width={2940} 
          height={200}
          // sizes="100vw"
          className={styles.header_img} alt="LarParLife.com" 
        />
        
      </div>
      <div className={styles.bottom_bar}>
        {/* <div className={styles.bottom_bar_content}>
          <h2>inspire</h2>
          <h2>&bull;</h2>
          <h2>educate</h2>
          <h2>&bull;</h2>
          <h2>engage</h2>
        </div> */}
      </div>
    </div>
  )
}

export default Header