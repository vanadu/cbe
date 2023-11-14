import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import CBEHeaderTitle from '../../public/images/img-cbe-header-text.png'
import * as styles from '../styles/Header.module.scss'

const Branding = () => {
  return (
    <>
      <Link href='/'>
      <Image 
        src={CBEHeaderTitle} 
        width="0"
        height="0"
        sizes="100vw"
        // style={{ width: '100%', height: 'auto' }}
        className={styles.logo}
        alt="LarParLife.com"
        />
      </Link>
    </>
  )
}

export default Branding