import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import IconBar from './IconBar'
import NavBar from './NavBar'
import logo from '../../public/img-lpl-logo.png'
import headerimg from '../../public/img-header.png'
import * as styles from '../styles/Header.module.scss'

const Header = () => {
  return (
    <div className={styles.header}>

      <div className={styles.header_content}>
        <div className={styles.logo}>
          <Link href='/'>
            <Image 
              src={logo} 
              width="0"
              height="0"
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }}
              className={styles.logo_img} alt="LarParLife.com" 
            />
          </Link>
        </div>
        <div className={styles.icons}>
          <IconBar />
        </div>
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


      <div className={styles.nav}>
      </div>
    </div>
  )
}

export default Header