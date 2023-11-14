import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import CBEHeaderBrandingMobile from '../../public/images/img-cbe-branding-mobile.png'
import CBEHeaderBrandingDesktop from '../../public/images/img-cbe-branding-desktop.png'

// import Branding from '../components/Branding'
import Navbar from '../components/Navbar'


import * as styles from '../styles/Header.module.scss'

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.top_bar}>
        <Link 
          href='/'
          className={styles.branding_mobile_link}
        >
          <Image 
            src={CBEHeaderBrandingMobile} 
            width="0"
            height="0"
            sizes="100vw"
            // style={{ width: '100%', height: 'auto' }}
            className={styles.branding_mobile} alt="XXX"
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
        <Navbar />

      </div>
      <div className={styles.bottom_bar}>
        <div className={styles.bottom_bar_content}>
          <h2>inspire</h2>
          <h2>&bull;</h2>
          <h2>educate</h2>
          <h2>&bull;</h2>
          <h2>engage</h2>
        </div>
      </div>
    </div>
  )
}

export default Header