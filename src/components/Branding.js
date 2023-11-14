import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import CBEHeaderLogo from '../../public/images/img-cbe-logo-header.png'
import * as styles from '../styles/Header.module.scss'

const Branding = () => {
  return (
    <>
      <Link href='/'>
        <Image 
          src={CBEHeaderLogo} 
          width="0"
          height="0"
          sizes="100vw"
          // style={{ width: '100%', height: 'auto' }}
          className={styles.logo} alt="LarParLife.com"
          />
      </Link>
    </>
  )
}

export default Branding