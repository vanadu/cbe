import React from 'react'
import Image from 'next/image'
import FooterLogo from '../../public/images/img-branding-inverted.png'

import * as styles from '../styles/Footer.module.scss'

const Footer = () => {
  return (
    <>
      <div className={styles.footer}>
        <div className={styles.footer_branding}>
          <Image 
            src={FooterLogo} 
            width="0"
            height="0"
            sizes="100vw"
            // style={{ width: '100%', height: 'auto' }}
            className={styles.footer_branding_img} alt="Crossroads Blues Experience" 
          />
        </div>
        <p className={styles.footer_text}>&copy;2023 Crossroads Blues Experience. All&nbsp;rights&nbsp;reserved.</p>
        <p className={styles.footer_text}>All website content &copy;CrossroadsBluesExperience.com unless otherwise noted.</p>
        <p className={styles.footer_text}>Crossroads Blues Experience and the Crossroads Blues Experience logo are trademarks of CrossroadsBluesExperience.com</p>
        <p className={styles.footer_text}>Concept, website design, graphics, video, and text content by Van Albert. </p>
        
        <p className={styles.footer_text}>Website background image by Bettina Schwehn/freeimages.com</p>
        
        
      </div>
    </>
  )
}

export default Footer